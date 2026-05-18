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
- ✅ Stripe products + prices created (LIVE mode, BC+AI account `acct_1S0B1xF2GLxOhIwJ`)
- ✅ `BCAI50` coupon created with applies_to restriction (live + test, scoped to async product)
- ✅ Test-mode catalog mirror created via Stripe CLI (overrides in `.env.local`)
- ✅ Install `@clerk/nextjs` + `stripe` packages
- ✅ Wire `<ClerkProvider>` + sign-in routes into `app/layout.tsx`
- ✅ Build `app/api/stripe/checkout/route.ts`
- ✅ Build `app/api/stripe/webhook/route.ts`
- ✅ Hook RAP Self-Study CTA on `/pricing` to checkout
- ✅ Stripe CLI webhook forwarding (local test) — used during dev
- ✅ Production-URL test webhook endpoint registered (`we_1TYEctF2GLxOhIwJs0hwXL0M`, secret stored in vault outside repo)
- ⏳ Port `/Users/kk/Code/RAP/course/` static files into `app/(course)/`, Clerk-gated (deferred to Phase 2)
- ⏳ Dry-run purchase with a real Stripe test card → confirm Clerk entitlement set → confirm `/course` unlocks → refund → confirm entitlement revoked

## Design pass status — 2026-05-16 (shipped, commit `d1c79ce`)

- ✅ Public rename: "RAP Async Self-Paced Course" → "RAP Self-Study" across all marketing surfaces and both Stripe modes
- ✅ "Async widgets" (cohort-homework descriptor) → "between-session widgets" / "self-directed widgets"
- ✅ CursorAccent removed entirely
- ✅ RAP shield in Nav as 28px logo lockup
- ✅ Glass morphism on PricingCards, CohortCard, Hero CTA shelf
- ✅ Single fixed `<NoiseOverlay>` global texture
- ✅ Cohorts scroll-stop: Lenis duration tuned + Festival section `isolate` (suspects 1 + 2 applied; suspect 3 untouched pending feedback)
- ✅ CohortCard aspect `4/3 → 3/2` to match DSLR sources
- ✅ InstructorPortrait sticky height capped at `min(60vh, 520px)` on mobile
- ✅ Group portrait placeholder on `/instructors`

---

## Tomorrow's punch list (2026-05-17 / next session)

Pick up here. Everything in order, nothing has a hard dependency on me being the one to do it.

### Blockers before real customers can buy

1. **Re-authenticate Vercel CLI** — the earlier OAuth session was wiped. Either:
   - Run `mcp__plugin_vercel_vercel__authenticate` and follow the OAuth URL, OR
   - Run `vercel login` in terminal (browser-based OAuth, ~30 seconds).
2. **Decide: test mode or live mode for production?**
   - Test mode in prod = visitors can "complete" checkout but no real money moves. Bad for trust if launched as-is. Only acceptable as a private staging step.
   - Live mode in prod = real charges. Requires live Stripe keys (`sk_live_…` / `pk_live_…`) which need to be pasted (MCP can't read raw API keys). Also requires creating a **live-mode** webhook endpoint pointed at `https://rap-marketing.vercel.app/api/stripe/webhook` and capturing its secret.
3. **Push env vars to Vercel.** After (1) + (2):
   - Development + Preview scopes: push the current `.env.local` test values so preview deploys work end-to-end.
   - Production scope: push whichever set (test or live) the decision in (2) yields.
   - The keys to push: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, the six `STRIPE_PRODUCT_*` / `STRIPE_PRICE_*` overrides (test-mode only — production scope drops these so the live defaults in `lib/stripe-catalog.ts` apply), and the six Clerk vars (test or live).
4. **Switch Clerk to live keys before public launch.** Currently using `pk_test_` / `sk_test_`. Live keys come from the Clerk dashboard; user pastes when ready.
5. **Real Stripe test purchase end-to-end** with the dev server + `stripe listen`, against the test catalog. Confirm `checkout.session.completed` → Clerk `publicMetadata.entitlements` populated → `/course` unlocks → refund revokes. Wasn't run during the Phase 1 build (only the static click-through was verified).

### Site is currently in a known partial state

- Live at `rap-marketing.vercel.app` with the design pass shipped.
- `/pricing` has the new "Enroll — Self-Study" CTA, but Production scope has no Stripe env vars yet, so the API route will 500 if clicked. Pricing page itself renders fine; CTAs to Luma (cohorts) still work.
- Cohort enrollment continues to go through Luma — Stripe is only for Self-Study + Coaching once the env push happens.

### Design follow-ups (non-blocking)

- Real headshots for Kris / Martin / Sarah on `/instructors`.
- Group portrait file (1800×1200 landscape) to drop into the placeholder block on `/instructors`.
- Decide on cohorts scroll-stop suspect 3 (ScrollReveal `rootMargin`) only if the scroll bug recurs after suspects 1+2 fixes.
- `BCAI50` mirrored coupon in each Luma cohort event (manual, in Luma dashboard).
- In-person cohort doc reconciliation at `/Users/kk/Code/RAP/cohorts/2026-cohort-2-october-inperson.md:30` ($1,500/$750 → $2,200/$900).

### Stripe state recap (for tomorrow)

| | Live (`acct_1S0B1xF2GLxOhIwJ`) | Test (same account) |
|---|---|---|
| Async product | `prod_UWnpSkjuzR7RIP` | `prod_UWpr4O92d7mPcU` |
| Async price ($899) | `price_1TXkDyF2GLxOhIwJkP7NGssA` | `price_1TXmCaF2GLxOhIwJYGuOLM3w` |
| Coaching 90-min product | `prod_UWnpKZAiFMax1H` | `prod_UWpsLUJS9J0OHO` |
| Coaching 90-min price ($250) | `price_1TXkE3F2GLxOhIwJ2h20SHhD` | `price_1TXmCgF2GLxOhIwJPfM9LgCY` |
| Coaching 4-pack product | `prod_UWnpICpwPHJgdY` | `prod_UWps7Z1PE5NYWV` |
| Coaching 4-pack price ($900) | `price_1TXkECF2GLxOhIwJ0h0GYOBS` | `price_1TXmCnF2GLxOhIwJRIYLfawx` |
| `BCAI50` coupon | yes, scoped to live async product | yes, scoped to test async product |
| Webhook for `rap-marketing.vercel.app` | none yet (needs live-mode endpoint) | `we_1TYEctF2GLxOhIwJs0hwXL0M` (secret in dashboard) |

Stripe CLI session: profile `bcai`, logged in to BC+AI account, test-mode keys valid until 2026-08-14.
