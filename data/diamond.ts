export interface DiamondProduct {
  id: string;
  name: string;
  price: string;
  shape: string;
  rating: number;
}

export const CATEGORIES = [
  { title: 'Engagement Collection', subtitle: 'The ultimate vow of absolute devotion.', icon: '💍' },
  { title: 'Bridal Selection', subtitle: 'Timeless configurations for eternal alignment.', icon: '👰' },
  { title: 'Everyday Luxury', subtitle: 'Casual elegance calibrated for daily life.', icon: '✨' },
  { title: 'Anniversary Lineage', subtitle: 'Celebrating dynamic decades of shared brilliance.', icon: '🎁' },
];

export const BEST_SELLERS: DiamondProduct[] = [
  { id: 'b1', name: 'The Imperial Solitaire Ring', price: '₹89,999', shape: 'round', rating: 5 },
  { id: 'b2', name: 'Celestial Cascade Necklace', price: '₹1,49,999', shape: 'pear', rating: 5 },
  { id: 'b3', name: 'Aura Radiant Cushion Studs', price: '₹59,999', shape: 'cushion', rating: 5 },
];

export const SHAPES = [
  { id: 'round', label: 'Round Brilliant', glyph: '💎' },
  { id: 'oval', label: 'Oval Elegance', glyph: '🥚' },
  { id: 'princess', label: 'Princess Cut', glyph: '🟩' },
  { id: 'emerald', label: 'Step Emerald', glyph: '▮' },
  { id: 'pear', label: 'Classic Pear', glyph: '💧' },
  { id: 'cushion', label: 'Vintage Cushion', glyph: '🪞' },
];

export const SHAPE_PRODUCTS: Record<string, DiamondProduct[]> = {
  round: [{ id: 's1', name: 'Sovereign 2.5ct Round Brilliant', price: '₹4,50,000', shape: 'round', rating: 5 }],
  oval: [{ id: 's2', name: 'Exquisite Elongated Oval Solitaire', price: '₹3,80,000', shape: 'oval', rating: 5 }],
  princess: [{ id: 's3', name: 'Architectural Princess Cut Eternity Band', price: '₹2,90,000', shape: 'princess', rating: 5 }],
  emerald: [{ id: 's4', name: 'High-Clarity Emerald Cut Statement Ring', price: '₹6,20,000', shape: 'emerald', rating: 5 }],
  pear: [{ id: 's5', name: 'Majestic Teardrop Pear Silhouette Drop Pendant', price: '₹1,85,000', shape: 'pear', rating: 5 }],
  cushion: [{ id: 's6', name: 'Legacy Pillow Cushion Micro-Pave Ring', price: '₹5,10,000', shape: 'cushion', rating: 5 }],
};