export interface Product {
  id: string;
  title: string;
  price: string;
  tag: string;
  imageMain: string;
  imageHover: string;
  link: string;
}

export const BEST_SELLERS: Product[] = [
  {
    id: 'bs-1',
    title: 'Aura Brilliant Cut Solitaire Ring',
    price: '$12,450',
    tag: 'Iconic',
    imageMain: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
    imageHover: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
    link: '/shop/aura-solitaire'
  },
  {
    id: 'bs-2',
    title: 'Serpente Diamond Tennis Bracelet',
    price: '$24,800',
    tag: 'Limited Edition',
    imageMain: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600',
    imageHover: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
    link: '/shop/serpente-bracelet'
  },
  {
    id: 'bs-3',
    title: 'Cascade Drop Emerald Earrings',
    price: '$18,900',
    tag: 'Atelier Rare',
    imageMain: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600',
    imageHover: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600',
    link: '/shop/cascade-earrings'
  },
  {
    id: 'bs-4',
    title: 'Starlight Pavé Pendant Choker',
    price: '$9,150',
    tag: 'Classic',
    imageMain: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
    imageHover: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600',
    link: '/shop/starlight-pendant'
  }
];