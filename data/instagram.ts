export interface InstagramPost {
  id: string;
  imageSrc: string;
  category: string;
  likes: string;
  captionExcerpt: string;
  permalink: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "gram-01",
    category: "Haute Joaillerie",
    likes: "4.8K",
    captionExcerpt: "Mapping the geometry of light. The Sovereign Collar caught in its raw, unfiltered reflection. #BespokeLuxury",
    imageSrc: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop",
    permalink: "#"
  },
  {
    id: "gram-02",
    category: "Savoir-Faire",
    likes: "3.2K",
    captionExcerpt: "Hand-setting D-flawless micro-pave parameters inside our floating radial halo. Precision is our baseline. #Craftsmanship",
    imageSrc: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
    permalink: "#"
  },
  {
    id: "gram-03",
    category: "The Atelier",
    likes: "5.1K",
    captionExcerpt: "Where ancestral 22K solid gold frames meet contemporary champlevé artistry. A masterpiece realized. #AtelierChronicles",
    imageSrc: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    permalink: "#"
  },
  {
    id: "gram-04",
    category: "Bespoke Curation",
    likes: "6.7K",
    captionExcerpt: "Captured moments from Mayfair. Lady Genevieve’s ancestral matrix under natural afternoon exposure. #ExquisiteProvénance",
    imageSrc: "https://static.vecteezy.com/system/resources/thumbnails/046/763/626/small/pair-of-intricately-designed-gold-bracelets-arranged-on-a-smooth-satin-material-background-photo.jpg",
    permalink: "#"
  }
];