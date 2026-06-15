export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  routePath: string; // Active routing path
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-01",
    title: "Visit Our Store",
    subtitle: "Experience the physical brilliance firsthand.",
    imageSrc: "https://cdn.orra.co.in/media/wysiwyg/mobileNew768x890px1162026.jpg", 
    routePath: "/boutique/locations"
  },
  {
    id: "srv-02",
    title: "Book An Appointment",
    subtitle: "Reserve an exclusive digital or physical parlor suite.",
    imageSrc: "https://www.giva.co/cdn/shop/products/R0260_2.jpg?v=1642778263&width=1946",
    routePath: "/concierge/reserve"
  },
  {
    id: "srv-03",
    title: "Talk To An Expert",
    subtitle: "One-on-one consultation with our Master Gemologists.",
    imageSrc: "https://manubhai.in/wp-content/uploads/2026/04/DHBD07783-300x300.jpg",
    routePath: "/concierge/consult"
  },
  {
    id: "srv-04",
    title: "Digi Gold",
    subtitle: "Secure 24K institutional gold micro-investing.",
    imageSrc: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
    routePath: "/vault/digigold"
  },
  {
    id: "srv-05",
    title: "Atelier Blogs",
    subtitle: "The design journal: minimal luxury apparel & premium cuts.",
    // Premium structural minimal t-shirt apparel rack image to correct the content mismatch
    imageSrc: "https://wallpaperaccess.com/full/685283.jpg",
    routePath: "/journal/t-shirts-and-cuts"
  },
  {
    id: "srv-06",
    title: "Jewellery Guide",
    subtitle: "The definitive dictionary on clarity, cuts, and metals.",
    imageSrc: "https://www.ornatejewels.com/cdn/shop/articles/Best_Birthstone_Jewellery_Gifts_for_Every_Month_2026_Guide_c54c689e-327a-450d-a3e4-44fc6da8fda8.jpg?v=1777983621",
    routePath: "/education/guide"
  }
];