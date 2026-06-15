export interface GoldTier {
  id: string;
  purity: string;
  title: string;
  description: string;
  premiumPct: number;
}

export const GOLD_TIERS: GoldTier[] = [
  {
    id: "tier-24k",
    purity: "99.99% Pure",
    title: "LBMA London Good Delivery",
    description: "Highest tier institutional grade bullion, fully insured and physically vaulted in Zurich.",
    premiumPct: 0
  },
  {
    id: "tier-custom",
    purity: "Bespoke Minted",
    title: "Atelier Signature Ingots",
    description: "Custom serialized micro-bars cast directly with our house monogram emblem.",
    premiumPct: 1.5
  }
];