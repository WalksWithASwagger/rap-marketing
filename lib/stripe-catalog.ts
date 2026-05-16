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

export const CATALOG: Record<CatalogSlug, CatalogEntry> = {
  "async-self-paced": {
    slug: "async-self-paced",
    productId: "prod_UWnpSkjuzR7RIP",
    priceId: "price_1TXkDyF2GLxOhIwJkP7NGssA",
    amountCad: 899,
    label: "RAP Async Self-Paced Course",
    entitlement: "async-course",
  },
  "rap-coaching-single": {
    slug: "rap-coaching-single",
    productId: "prod_UWnpKZAiFMax1H",
    priceId: "price_1TXkE3F2GLxOhIwJ2h20SHhD",
    amountCad: 250,
    label: "RAP Student Coaching — 90-min Session",
    entitlement: "rap-coaching-single",
  },
  "rap-coaching-4pack": {
    slug: "rap-coaching-4pack",
    productId: "prod_UWnpICpwPHJgdY",
    priceId: "price_1TXkECF2GLxOhIwJ0h0GYOBS",
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
