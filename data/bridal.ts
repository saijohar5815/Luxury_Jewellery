// Strict Data Framework Type Definitions
export interface BridalPackage {
  id: string;
  name: string;
  price: string;
  elements: string[];
}

export interface TimelineEvent {
  stage: string;
  tone: string;
  recommendation: string;
  aesthetic: string;
}

// Global Static Data Sets
export const BRIDAL_STYLES = [
  { id: 'royal', label: '👑 Royal Heritage', subtitle: 'Heavy uncut polki diamonds, emerald drops, and centuries of dynastic grace.', colorTheme: '#5A1F1F' },
  { id: 'traditional', label: '🌸 Traditional Romance', subtitle: 'Time-honored classics, rich crimson pairings, and flawless warm symmetry.', colorTheme: '#D8B4A0' },
  { id: 'modern', label: '✨ Modern Avant-Garde', subtitle: 'Asymmetrical architectural cuts, clean white geometric layouts, and structural flare.', colorTheme: '#111111' },
  { id: 'minimal', label: '🤍 Refined Minimalist', subtitle: 'Delicate solitaire bands, structural collar settings, and weightless brilliance.', colorTheme: '#F8F4EF' }
];

export const PACKAGES_BY_STYLE: Record<string, BridalPackage> = {
  royal: { id: 'p1', name: 'The Sovereign Maharani Suite', price: '₹14,50,000', elements: ['Grand Choker Collar', 'Layered Haar Girdle', 'Jhumka Chandbalis', 'Mathapatti Headpiece'] },
  traditional: { id: 'p2', name: 'The Eternal Vivah Ensemble', price: '₹8,80,000', elements: ['Classic Solitaire Choker', 'Bridal Kangan Set', 'Classic Drop Earrings', 'Maang Tikka Silhouette'] },
  modern: { id: 'p3', name: 'The Luminary Horizon Set', price: '₹6,20,000', elements: ['Asymmetric Diamond Neckpiece', 'Tapered Ear Climbers', 'Geometric Stackable Rings'] },
  minimal: { id: 'p4', name: 'The Pure Alabaster Collection', price: '₹3,90,000', elements: ['Floating Cushion Pendant', 'Minimal Wire Band Earrings', 'Tennis Line Bracelet'] }
};

export const TIMELINE_DATA: TimelineEvent[] = [
  { stage: 'The Proposal', tone: 'Intimate Brilliance', recommendation: 'Solitaire Ring with Hidden Halo Matrix', aesthetic: 'Platinum or Rose Gold' },
  { stage: 'The Mehendi', tone: 'Playful Shimmer', recommendation: 'Lightweight Floral Diamond Choker & Ear Cuffs', aesthetic: 'Uncut Pastel Diamonds' },
  { stage: 'The Muhurtham', tone: 'Sacred Heritage', recommendation: 'Heavy Antique Polki Cascade or Traditional Guttapusalu', aesthetic: '22k Sovereign Gold' },
  { stage: 'The Reception', tone: 'Cinematic Glamour', recommendation: 'High-Dispersive Emerald-Cut Diamond Drop Collar Suite', aesthetic: 'Modernist High Contrast' }
];