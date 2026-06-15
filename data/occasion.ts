export interface OccasionCapsule {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  description: string;
  bgImage: string;
  featuredPieceImage: string;
  pieceName: string;
  piecePrice: string;
  curatorNote: string;
}

export const OCCASIONS: OccasionCapsule[] = [
  {
    id: "gala",
    title: "The Sovereign Gala",
    tagline: "Grand Tier Prominence",
    subtitle: "High-stature silhouettes crafted for midnight flashbulbs.",
    description: "Architectural line arrangements engineered with high-carat marquise solitaires and cascading liquid platinum strands that shimmer beautifully under chandeliers.",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8XSctnHiNexVVKA9Qh-ciWbUG-fKG6q34g&s",
    featuredPieceImage: "https://5.imimg.com/data5/ANDROID/Default/2020/9/YX/HR/HK/62526059/product-jpeg-500x500.jpg",
    pieceName: "Imperial Sovereign Choker",
    piecePrice: "$165,000",
    curatorNote: "Features D-Flawless diamond drops catching light with every fluid turn."
  },
  {
    id: "bridal",
    title: "The Atelier Bridal",
    tagline: "Bespoke Ancestral Vows",
    subtitle: "Breathtaking heritage treasures preserving sacred legacies.",
    description: "Deep, multi-layered structural pieces featuring authentic handcrafted Jadau Polki matrices, micro-fine gold foil techniques, and Basra seed-pearl tassels.",
    bgImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1200",
    featuredPieceImage: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=600",
    pieceName: "Mughal Majesty Bridal Mala",
    piecePrice: "$240,000",
    curatorNote: "22K Solid Fine Gold Jadau back-etched with intricate red champlevé enamel work."
  },
  {
    id: "soiree",
    title: "The Riviera Soirée",
    tagline: "Resort Elite Minimalism",
    subtitle: "Effortless luxury designed for high-noon and sunset coastlines.",
    description: "Asymmetrical open bands and fluid geometric line paths highlighting raw, high-intensity Colombian emerald bases set alongside celestial gold fields.",
    bgImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1200",
    featuredPieceImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
    pieceName: "Cosmic Radial Emerald Band",
    piecePrice: "$48,500",
    curatorNote: "Bespoke numbered studio edition cuff molded to fit like a secondary silk layer."
  }
];