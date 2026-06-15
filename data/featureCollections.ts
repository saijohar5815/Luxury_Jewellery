export interface Category {
  id: string;
  title: string;
  count: string;
  image: string;
  link: string;
}

// 👑 Added "export" right here
export const CATEGORIES: Category[] = [
  {
    id: 'rings',
    title: 'Diamond Rings',
    count: '42 Pieces',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    link: '/categories/rings'
  },
  {
    id: 'necklaces',
    title: 'High Necklaces',
    count: '28 Pieces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    link: '/categories/necklaces'
  },
  {
    id: 'earrings',
    title: 'Statement Earrings',
    count: '35 Pieces',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
    link: '/categories/earrings'
  },
  {
    id: 'bracelets',
    title: 'Luxury Bracelets',
    count: '19 Pieces',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    link: '/categories/bracelets'
  }
];