export interface ExpertProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  avatar: string;
  availability: string;
}

export const EXPERT_PROFILES: ExpertProfile[] = [
  {
    id: "exp-marcus",
    name: "Marcus Vance",
    role: "Master Diamond Gemologist",
    specialty: "Rare Crystals & Cut Valuation",
    bio: "With over 14 years of sourcing experience across Antwerp and Tel Aviv, Marcus helps clients understand diamond classifications and investment grades.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    availability: "Available Today"
  },
  {
    id: "exp-elena",
    name: "Elena Rostova",
    role: "Bespoke Jewelry Architect",
    specialty: "Custom Remodeling & Fine Silk Cuts",
    bio: "Elena specializes in redesigning heirloom pieces into modern minimalist configurations. She works directly on capturing raw structural silhouettes.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    availability: "2 Slots Left"
  }
];