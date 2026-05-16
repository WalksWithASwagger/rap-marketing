import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { clerkClient } from "@clerk/nextjs/server";
import { getCatalogEntryByPriceId } from "@/lib/stripe-catalog";

export const runtime = "nodejs";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

type Entitlement = {
  slug: string;
  grantedAt: string;
  stripeSessionId?: string;
  stripeChargeId?: string;
};

async function appendEntitlement(clerkUserId: string, entitlement: Entitlement) {
  const client = await clerkClient();
  const user = await client.users.getUser(clerkUserId);
  const existing = (user.publicMetadata?.entitlements as Entitlement[] | undefined) ?? [];
  if (existing.some((e) => e.slug === entitlement.slug)) return;
  await client.users.updateUserMetadata(clerkUserId, {
    publicMetadata: { ...user.publicMetadata, entitlements: [...existing, entitlement] },
  });
}

async function revokeEntitlementByCharge(clerkUserId: string, chargeId: string) {
  const client = await clerkClient();
  const user = await client.users.getUser(clerkUserId);
  const existing = (user.publicMetadata?.entitlements as Entitlement[] | undefined) ?? [];
  const next = existing.filter((e) => e.stripeChargeId !== chargeId);
  if (next.length === existing.length) return;
  await client.users.updateUserMetadata(clerkUserId, {
    publicMetadata: { ...user.publicMetadata, entitlements: next },
  });
}

export async function POST(req: Request) {
  if (!webhookSecret) {
    return NextResponse.json({ error: "STRIPE_WEBHOOK_SECRET not configured" }, { status: 500 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  const payload = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Signature verification failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const clerkUserId = session.metadata?.clerkUserId;
        const slug = session.metadata?.slug;
        if (!clerkUserId || !slug) break;

        const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1 });
        const priceId = lineItems.data[0]?.price?.id;
        const entry = priceId ? getCatalogEntryByPriceId(priceId) : undefined;
        if (!entry) break;

        await appendEntitlement(clerkUserId, {
          slug: entry.entitlement,
          grantedAt: new Date().toISOString(),
          stripeSessionId: session.id,
          stripeChargeId: typeof session.payment_intent === "string" ? session.payment_intent : undefined,
        });
        break;
      }
      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;
        const paymentIntent = typeof charge.payment_intent === "string" ? charge.payment_intent : null;
        if (!paymentIntent) break;
        const sessions = await stripe.checkout.sessions.list({ payment_intent: paymentIntent, limit: 1 });
        const clerkUserId = sessions.data[0]?.metadata?.clerkUserId;
        if (!clerkUserId) break;
        await revokeEntitlementByCharge(clerkUserId, paymentIntent);
        break;
      }
      default:
        break;
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook handler error";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
