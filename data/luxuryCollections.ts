export interface Collection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  year: string;
  link: string;
  highlights: string[];
}

export const COLLECTIONS: Collection[] = [
  {
    id: 'heritage',
    name: 'The Heritage Collection',
    tagline: 'Generations of Brilliance',
    description: 'Timeless masterpieces reimagined for the modern collector, highlighting rare-cut diamonds and south-sea pearls secured in liquid platinum matrices.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    year: 'Est. 2026',
    link: '/collections/heritage',
    highlights: ['Hand-selected Grade AAA Pearls', 'Flawless Micro-Pavé Elements', 'Certified Heritage Hallmark']
  },
  {
    id: 'luminary',
    name: 'The Luminary Series',
    tagline: 'Celestial Architecture',
    description: 'Inspired by astrological alignments, featuring flawless raw emeralds surrounded by cosmic radial fields of stellar gold dust.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=1200',
    year: 'New Release',
    link: '/collections/luminary',
    highlights: ['Deep Colombian Emerald Bases', '18K Cosmic Yellow Gold', 'Numbered Studio Editions']
  }
];