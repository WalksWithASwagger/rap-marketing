# Stripe + Course Integration Plan

Status: Phase 1 in progress · 2026-05-16

## Decisions captured

- **Stripe account**: BC + AI Ecosystem (`acct_1S0B1xF2GLxOhIwJ`). MCP authenticated, **live mode**. KK explicitly authorized live-product creation 2026-05-16.
- **Cohort enrollment stays on Luma.** Stripe handles async + coaching only in v1. Cohort SKUs intentionally NOT created in Stripe.
- **Course hosting: Option A** — port the static HTML/JS course (`/Users/kk/Code/RAP/course/`) into Next.js routes in `rap-marketing/app/(course)/`. Single domain, Clerk-gated. 1–2 days of porting work.
- **Access model**: real accounts via **Clerk**. Test keys (`pk_test_…` / `sk_test_…`) in local `.env.local` 2026-05-16. Switch to live Clerk keys before launch.
- **Member discount**: single Stripe coupon `BCAI50` (50% off, duration `once`). Applies to the async course product only. Coaching has **no discounts** ever. Cohort discounts handled separately in Luma using a matching `BCAI50` code there.

---

## Stripe product catalog (created live 2026-05-16)

| Product                                | Price                | Stripe Product ID            | Stripe Price ID                       |
| -------------------------------------- | -------------------- | ---------------------------- | ------------------------------------- |
| **RAP Async Self-Paced Course**        | $899 CAD             | `prod_UWnpSkjuzR7RIP`        | `price_1TXkDyF2GLxOhIwJkP7NGssA`      |
| **RAP Student Coaching — 90-min**      | $250 CAD             | `prod_UWnpKZAiFMax1H`        | `price_1TXkE3F2GLxOhIwJ2h20SHhD`      |
| **RAP Student Coaching — 4-Pack**      | $900 CAD             | `prod_UWnpICpwPHJgdY`        | `price_1TXkECF2GLxOhIwJ0h0GYOBS`      |

**Coupon (live):**
- `BCAI50` — 50% off, `duration: once`, restricted to `prod_UWnpSkjuzR7RIP` (async course) only. Coaching products are NOT eligible.

**Cohort SKUs intentionally NOT in Stripe:**
- Cohort 1 (Online, May) — Luma
- Cohort 2 (In-Person, Oct) — Luma
- Cohort 3 (Online, Sep) — Luma
- Member discount in Luma uses a matching `BCAI50` coupon code, configured in the Luma event settings.

**Deferred to Phase 1b (when self-serve checkout for these makes sense):**
- Consulting rate card ($500 / $1,800 / $3,200) — currently consultative-sales, invoice via Stripe ad hoc.
- Alumni consulting tier ($400 / $1,400 / $2,400) — same reasoning.
- Standalone certification challenge-exam — cert stays welded to cohort attendance.
- Cert + coaching bundle — revisit after first cohort retro.

Mechanics:
- One Stripe **Product** per row; one or more **Prices** per Product (member vs standard = two Prices on the same Product).
- Member discount handled via Stripe **coupon** (`BCAI50`) — keeps product list clean, surfaces member-conversion in Stripe analytics directly.
- Cohort-specific seats use Stripe **metadata** (`cohort=C1|C2|C3`) on the Price + optional inventory cap.
- Alumni rates gated by Clerk `publicMetadata.alumni=true`, set on cohort completion.

## Pricing rationale (audit trail)

- **Async at $899/$449** — RAP async (4 modules, 20 widgets, 5 builders, 4 quizzes) is closest in scope to MIT/Emory/Athabasca ($1,400–$2,000 CAD band) per `competitive-analysis.md:33-95, 166-168`. Pricing at $899 undercuts that band while signalling premium content (well above the $350 CertNexus exam-prep floor). 60% of cohort = clear differentiation without devaluing the live experience. Member at $449 makes BC+AI membership ($340) pay for itself on this purchase alone.
- **Live cohort prices** — already committed across `LUMA-COPY-FINAL.md:114-117`, `NOTION-COPY-FINAL.md:155-160`, `marketing/wordpress-certification-page.md:77-82`, `app/pricing/page.tsx:33-37`. Don't touch.
- **In-person at $2,200/$900** — published on the live marketing site, but `cohorts/2026-cohort-2-october-inperson.md:30` internally still shows $1,500/$750. Stripe mirrors what buyers see (the marketing site). Reconcile the internal doc separately.
- **$250/90min coaching as separate tier** — preserves the existing $500/60min consulting rate card. RAP Student Coaching is a distinct product, not a discount on consulting.
- **No standalone cert SKU** — keeps v1 ops surface tight. Cert administration today is welded to cohort assessment per `NOTION-COPY-FINAL.md:261-264`.

---

## Hosting options — pick one

### Option A: Monorepo (recommended)

> Move the async course into `rap-marketing` as gated Next.js routes.

```
rap-marketing/
├── app/
│   ├── (marketing)/        ← existing public site (/, /pricing, /cohorts, …)
│   ├── (course)/           ← new, Clerk-gated
│   │   ├── layout.tsx          ← <SignedIn><CourseShell> wrapper
│   │   ├── dashboard/page.tsx  ← "your enrolments"
│   │   ├── module-[n]/…        ← ported from /Users/kk/Code/RAP/course/
│   │   └── certificate/…
│   └── api/
│       ├── stripe/checkout/route.ts   ← POST → Stripe Checkout Session
│       └── stripe/webhook/route.ts    ← fulfilment + entitlement write
└── lib/entitlements.ts                ← Clerk publicMetadata reads/writes
```

**Pros**
- One domain (`rap.bcai.ca` or wherever) → one cookie scope, one Clerk app, one Vercel project, one deploy pipeline.
- Shared design tokens — course inherits the marketing site's typography/colour system automatically.
- Entitlement check is a one-liner: `auth().sessionClaims.publicMetadata.entitlements.includes('async-course')`.
- Cheaper: one Vercel project, one analytics stream.

**Cons**
- Porting the static HTML/JS course into Next routes is real work (est. 1–2 days). Module pages are mostly static so it's mechanical, not architectural.
- Marketing site bundle grows; mitigated by route groups + Next's per-route code splitting.

**Best for**: shipping fast, keeping ops simple, and treating the course as a first-class part of the brand site.

### Option B: Separate domain

> Keep the static course on its own Vercel project, link from marketing.

```
rap-marketing.vercel.app              ← marketing + checkout + webhook + Clerk
course.rap.bcai.ca (or similar)       ← static course, Clerk-gated via middleware
```

Two Vercel projects, both signed into the same Clerk app (Clerk supports multi-domain). Webhook in `rap-marketing` writes the entitlement to Clerk; `course.*` reads it on every page load via Clerk's Edge Middleware.

**Pros**
- Async course stays as a pure static bundle (no port). Faster initial migration.
- Clean separation: marketing site can iterate on motion/visuals without risking course routes.
- If you ever sell the course product separately, it already lives at its own URL.

**Cons**
- Two deploys, two analytics streams, two sets of env vars to keep in sync.
- Course UI won't share Next-side components (motion library, design tokens) without duplication.
- Cross-domain auth: Clerk supports it but you have to configure the satellite domain — adds setup steps and a class of "auth works in prod, not in preview" footguns.
- Twice the surface for "the certificate page broke and only I noticed."

**Best for**: keeping the course bundle hermetic if you ever want to ship it on a third-party LMS, or if the course team and the marketing team are different people.

### Recommendation

**Option A.** The async course is small (~20 widgets, 4 modules per memory), and the marketing site is the front door to the product. One project, one auth domain, one deploy. We pay the porting cost once and get a much simpler ops story forever.

The only reason to pick B is if you have a near-term plan to also ship the course standalone elsewhere (Teachable, Thinkific, white-label for a corporate buyer). Worth saying out loud before we commit.

---

## Stripe + Clerk wiring (applies to either option)

1. **Vercel Marketplace → install Clerk** for the `rap-marketing` project. Provisions `CLERK_PUBLISHABLE_KEY` + `CLERK_SECRET_KEY` into all envs automatically.
2. **Stripe** (BC + AI account): create the products above, capture price IDs into a single `lib/stripe-catalog.ts`.
3. **API route** `app/api/stripe/checkout/route.ts`:
   - Reads `priceId` + `cohortCode` from POST body.
   - Requires Clerk auth (so we have a `userId` to stamp on the session metadata).
   - Creates a Stripe Checkout Session with `metadata: { clerkUserId, priceId, cohortCode }`.
4. **API route** `app/api/stripe/webhook/route.ts`:
   - Verifies signature with `STRIPE_WEBHOOK_SECRET`.
   - On `checkout.session.completed`: write the entitlement to Clerk via `clerkClient.users.updateUser(userId, { publicMetadata: { entitlements: [...prev, productSlug] } })`.
   - On `charge.refunded`: revoke.
   - Idempotent: dedupe by `event.id` (small KV check, or rely on Stripe's at-most-once behaviour for the MVP and revisit if we see issues).
5. **Course gating**: Clerk middleware on `/course/*` routes; per-page check on the user's `publicMetadata.entitlements`.
6. **Receipt / welcome email**: piggyback on Stripe's built-in receipts for MVP; later we can swap in a real transactional email (Resend on the Marketplace) when we want a branded welcome.

Env vars to provision (`vercel env add …`):
- `STRIPE_SECRET_KEY` (live + test)
- `STRIPE_WEBHOOK_SECRET` (live + test)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Clerk vars (auto-provisioned by Marketplace install)

Test mode first; flip the keys to live only after a dry-run purchase + a dry-run refund.

---

## Phased plan

**Phase 0 — Decisions (this doc)**
- KK signs off on SKU list + prices, picks Option A or B.

**Phase 1 — Plumbing (≈ 1 day)**
- Install Clerk via Marketplace. Wire `<SignIn>` / `<UserButton>` into marketing nav.
- Create Stripe products + prices in test mode. Commit `lib/stripe-catalog.ts`.
- Build `/api/stripe/checkout` + `/api/stripe/webhook` with Stripe CLI forwarding locally.

**Phase 2 — Course gating (≈ 1–2 days, depends on A vs B)**
- Option A: port the static course into `app/(course)/…` Next routes; protect with Clerk middleware; entitlement check per module.
- Option B: stand up a second Vercel project with the static course; configure Clerk satellite domain; entitlement check via Edge Middleware.

**Phase 3 — Wire CTAs**
- Replace "Enroll on Luma" links on `/pricing`, `/enroll`, `/cohorts` with Stripe Checkout for the chosen SKUs (or keep Luma for live-cohort logistics + add Stripe only for cert/coaching/async — open question).

**Phase 4 — Test mode dry run**
- One test purchase per SKU. Verify entitlement appears, course unlocks, refund revokes.

**Phase 5 — Go live**
- Swap to live keys. Single low-value live purchase by KK as smoke test. Then announce.

---

## Remaining follow-ups

1. **Mirror `BCAI50` in Luma.** Create a matching 50%-off coupon code in each cohort event in Luma so the buyer-facing UX is consistent across both systems.
2. **In-person cohort doc reconciliation.** Update `/Users/kk/Code/RAP/cohorts/2026-cohort-2-october-inperson.md:30` from $1,500/$750 → $2,200/$900 to match the live marketing site.
3. **Switch Clerk to live keys before launch.** Currently using `pk_test_` / `sk_test_`. Live keys go in Vercel env (Production scope) and stay out of git.
4. **Member-discount distribution.** Decide how BC+AI members learn the `BCAI50` code: members-only email, gated webpage, embed in member portal, or auto-applied via Clerk metadata + a later upgrade. v1 = manual share is fine.

## Phase 1 status — 2026-05-16

- ✅ Plan doc + price research
- ✅ Clerk test keys provisioned in `.env.local`
- ✅ Stripe products + prices created (live mode)
- ✅ `BCAI50` coupon created with applies_to restriction
- ⏳ Install `@clerk/nextjs` + `stripe` packages
- ⏳ Wire `<ClerkProvider>` + sign-in routes into `app/layout.tsx`
- ⏳ Build `app/api/stripe/checkout/route.ts` (creates Checkout Session)
- ⏳ Build `app/api/stripe/webhook/route.ts` (writes entitlements to Clerk on `checkout.session.completed`)
- ⏳ Hook async-course CTA on `/pricing` and `/enroll` to checkout
- ⏳ Port `/Users/kk/Code/RAP/course/` static files into `app/(course)/`, Clerk-gated
- ⏳ Stripe CLI webhook forwarding for local testing
- ⏳ Dry-run purchase with a real Stripe test card → confirm Clerk entitlement set → confirm `/course/module-1` unlocks → refund → confirm entitlement revoked
