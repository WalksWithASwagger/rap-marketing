// Live Stripe price IDs for the BC + AI account (acct_1S0B1xF2GLxOhIwJ).
// Created 2026-05-16. Update if products are re-created.

export type CatalogSlug =
  | "async-self-paced"
  | "rap-coaching-single"
  | "rap-coaching-4pack";

type CatalogEntry = {
  slug: CatalogSlug;
  productId: string;
  priceId: string;
  amountCad: number;
  label: string;
  entitlement: string;
};

// Defaults are LIVE-mode IDs. Override per-env via STRIPE_PRICE_* / STRIPE_PRODUCT_*.
export const CATALOG: Record<CatalogSlug, CatalogEntry> = {
  "async-self-paced": {
    slug: "async-self-paced",
    productId: process.env.STRIPE_PRODUCT_ASYNC ?? "prod_UWnpSkjuzR7RIP",
    priceId: process.env.STRIPE_PRICE_ASYNC ?? "price_1TXkDyF2GLxOhIwJkP7NGssA",
    amountCad: 899,
    label: "RAP Self-Study",
    entitlement: "async-course",
  },
  "rap-coaching-single": {
    slug: "rap-coaching-single",
    productId: process.env.STRIPE_PRODUCT_RAP_COACHING_SINGLE ?? "prod_UWnpKZAiFMax1H",
    priceId: process.env.STRIPE_PRICE_RAP_COACHING_SINGLE ?? "price_1TXkE3F2GLxOhIwJ2h20SHhD",
    amountCad: 250,
    label: "RAP Student Coaching — 90-min Session",
    entitlement: "rap-coaching-single",
  },
  "rap-coaching-4pack": {
    slug: "rap-coaching-4pack",
    productId: process.env.STRIPE_PRODUCT_RAP_COACHING_4PACK ?? "prod_UWnpICpwPHJgdY",
    priceId: process.env.STRIPE_PRICE_RAP_COACHING_4PACK ?? "price_1TXkECF2GLxOhIwJ0h0GYOBS",
    amountCad: 900,
    label: "RAP Student Coaching — 4-Pack",
    entitlement: "rap-coaching-4pack",
  },
};

export function getCatalogEntry(slug: CatalogSlug): CatalogEntry {
  return CATALOG[slug];
}

export function getCatalogEntryByPriceId(priceId: string): CatalogEntry | undefined {
  return Object.values(CATALOG).find((entry) => entry.priceId === priceId);
}
