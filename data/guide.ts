// data/guide.ts
export interface GuideCard {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  bullets?: string[];
  modalContent: string;
}

export const MAIN_GUIDE_CARDS: GuideCard[] = [
  {
    id: "how-to-choose",
    tag: "Aesthetics & Form",
    title: "How to Choose",
    description: "The definitive formula for selecting foundational silhouette structures that adapt to posture and proportions.",
    image: "https://www.siriusjewels.com/uploads/blogs/copy_1WhatsApp%20Image%202022-04-13%20at%209.07.58%20PM.jpeg",
    modalContent: "Selecting the perfect piece is about balancing geometric weight. Ensure the setting supports your lifestyle intensity; minimalist bands are ideal for daily wear, while high-profile mountings act as structural anchors for gala events."
  },
  {
    id: "diamond-guide",
    tag: "Gemological Core",
    title: "Diamond Guide",
    description: "Demystifying optical engineering, internal crystal structures, and fire dispersion equations.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
    bullets: ["Cut Optimization", "Clarity Matrices", "Color Gradients", "Carat Proportions"],
    modalContent: "Diamonds are valued by their light performance. An ideal cut maximizes 'scintillation'—the play of light—by ensuring facets are cut at angles that prevent light leakage through the pavilion."
  },
  {
    id: "gold-purity",
    tag: "Metallurgy Standards",
    title: "Gold Purity",
    description: "Analyzing atomic micro-alloys from pure institutional bullion down to highly durable artisan settings.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000&auto=format&fit=crop",
    modalContent: "Purity levels (24K vs 18K) determine alloy hardness. 24K is the softest form of gold, while 14K/18K are blended with copper or silver to enhance durability for active, daily-wear environments."
  },
  {
    id: "ring-size",
    tag: "Anatomical Fit",
    title: "Ring Size Guide",
    description: "An interactive, zero-error calibration suite mapped against global measuring metrics.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    modalContent: "Finger circumference fluctuates based on ambient temperature and hydration. Always measure when hands are at a comfortable room temperature for the most accurate sizing."
  },
  {
    id: "care-tips",
    tag: "Asset Preservation",
    title: "Care Tips",
    description: "Securing generational longevity through proper environmental shielding.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    modalContent: "To maintain your assets, bathe settings in neutral filtered water only. Avoid synthetic fragrances and heavy chemical exposures, which can degrade soft porous gemstone surfaces over time."
  },
  {
    id: "styling-tips",
    tag: "Curation Strategy",
    title: "Styling Tips",
    description: "The geometry of personal curation. Stacking, spacing, and balancing visual weight.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    modalContent: "Styling is about contrast. Balance voluminous statement pieces with slender, ergonomic chains to ensure the visual narrative of your ensemble remains cohesive yet dynamic."
  }
];