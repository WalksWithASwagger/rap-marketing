import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import { CATALOG, type CatalogSlug } from "@/lib/stripe-catalog";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  let body: { slug?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const slug = body.slug as CatalogSlug | undefined;
  if (!slug || !(slug in CATALOG)) {
    return NextResponse.json({ error: "Unknown product slug" }, { status: 400 });
  }

  const entry = CATALOG[slug];
  const origin = req.headers.get("origin") ?? new URL(req.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: entry.priceId, quantity: 1 }],
    customer_email: email,
    allow_promotion_codes: true,
    metadata: {
      clerkUserId: userId,
      slug,
      entitlement: entry.entitlement,
    },
    success_url: `${origin}/enroll/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pricing?checkout=cancelled`,
  });

  if (!session.url) {
    return NextResponse.json({ error: "Stripe did not return a session URL" }, { status: 500 });
  }

  return NextResponse.json({ url: session.url });
}
