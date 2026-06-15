export interface TestimonialItem {
  id: string;
  collector: string;
  status: string;
  location: string;
  quoteCapsule: string;
  commissionedPiece: string;
  caratIndex: string;
  displayImage: string; // Absolute path to high-end photography assets
  archiveId: string;   // Clean editorial serial numbers
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "ledger-01",
    collector: "Lady Genevieve Vance",
    status: "Vanguard Patron",
    location: "London • Mayfair",
    quoteCapsule: "To watch the artisans map my family’s ancestral emeralds into a fluid platinum collar was like watching poetry materialize. The craftsmanship isn't merely premium; it is an act of historical preservation.",
    commissionedPiece: "The Sovereign Emerald Matrix Collar",
    caratIndex: "Totaling 14.85 cts",
    // Use crisp, elegant macro luxury images
    displayImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop", 
    archiveId: "PRV-EMR-01"
  },
  {
    id: "ledger-02",
    collector: "Aria Sterling-Kaur",
    status: "Bespoke Collector",
    location: "New York • Manhattan",
    quoteCapsule: "The Cosmic Halo ring behaves differently under natural light than any diamond piece I own. The radial floating gallery lifts the center diamond so high it feels entirely weightless, suspended by pure luxury.",
    commissionedPiece: "The Floating Radial Halo Solitaire",
    caratIndex: "4.25 Carats Center D-Flawless",
    displayImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
    archiveId: "PRV-DMD-02"
  },
  {
    id: "ledger-03",
    collector: "Dr. Julian Laurent",
    status: "Fine Art Connoisseur",
    location: "Paris • Place Vendôme",
    quoteCapsule: "The House has restored the true meaning of Haute Joaillerie. The intricate champlevé enamel work on the backside of my cuff link collection is a hidden masterpiece meant solely for the wearer's gaze.",
    commissionedPiece: "Bespoke Champlevé Heritage Cuffsets",
    caratIndex: "22K Solid Ancestral Frame",
    displayImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    archiveId: "PRV-GLD-03"
  }
];