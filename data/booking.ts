export interface AppointmentTier {
  id: string;
  title: string;
  duration: string;
  description: string;
  accentTitle: string;
  icon: string;
}

export const BOOKING_TIERS: AppointmentTier[] = [
  {
    id: "tier-digital",
    title: "Virtual Video Consultation",
    duration: "45 Minutes",
    description: "Meet our jewelry experts via a private video call. We will show you our pieces live from our showroom vault so you can see every detail from the comfort of your home.",
    accentTitle: "Online Consultation",
    icon: "✨"
  },
  {
    id: "tier-parlor",
    title: "In-Store Private Visit",
    duration: "90 Minutes",
    description: "Book an exclusive, private room at our physical flagship store. Enjoy a personalized styling session with a dedicated assistant over refreshments.",
    accentTitle: "Boutique Experience",
    icon: "🏛️"
  }
];

export const AVAILABLE_SLOTS = [
  { time: "10:30 AM", status: "Available" },
  { time: "01:00 PM", status: "Available" },
  { time: "03:30 PM", status: "Last Slot" },
  { time: "05:00 PM", status: "Available" }
];