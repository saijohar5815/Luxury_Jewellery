export interface NewArrivalItem {
  id: string;
  tag: string;
  name: string;
  price: string;
  series: string;
  image: string;
  hoverImage: string;
  atelierNote: string;
  caratWeight: string;
  metalPurity: string;
  origin: string;
}

export const NEW_ARRIVALS: NewArrivalItem[] = [
  {
    id: "NA-01",
    tag: "Just Unveiled",
    name: "The Cosmic Halo Solitaire",
    price: "$94,000",
    series: "Celestial Lumina Series",
    image: "https://baublelove.in/cdn/shop/files/DSC09361-_1.jpg?v=1705051849&width=2048",
    hoverImage: "https://baublelove.in/cdn/shop/files/DSC09361-_1.jpg?v=1705051849&width=2048",
    atelierNote: "Hand-set with a D-flawless center floating over a custom platinum radial gallery matrix.",
    caratWeight: "4.25 Carats Total",
    metalPurity: "Platinum 950 / 18K White Gold",
    origin: "Handcrafted in Mumbai Atelier, 2026"
  },
  {
    id: "NA-02",
    tag: "Bespoke Creation",
    name: "Mughal Blossom Jhumkas",
    price: "$61,000",
    series: "Kundan & Polki Heritage",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    atelierNote: "Features historical backing foil techniques paired with drop-cut Colombian emerald beads.",
    caratWeight: "12.80 Carats Polki",
    metalPurity: "22K Solid Fine Gold (Jadau Frame)",
    origin: "Jaipur Heritage Preservation Guild"
  },
  {
    id: "NA-03",
    tag: "Limited Masterpiece",
    name: "Ocean Cascade Pearl Choker",
    price: "$118,000",
    series: "Pearl Heritage Capsule",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800",
    atelierNote: "Five matching strands of rare deep South Sea natural white pearls with an Art Deco geometric lock.",
    caratWeight: "85 Premium South Sea Pearls",
    metalPurity: "18K White Gold Masterwork Lock",
    origin: "Bespoke Commission, London Atelier"
  }
];