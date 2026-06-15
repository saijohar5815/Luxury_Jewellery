export interface BoutiqueStore {
  id: string;
  city: string;
  quarter: string;
  address: string;
  hours: string;
  phone: string;
  imageSrc: string;
  coordinates: string;
}

export const BOUTIQUE_STORES: BoutiqueStore[] = [
  {
    id: "store-01",
    city: "London",
    quarter: "Mayfair Sanctuary",
    address: "14 Bond Street, London W1S 3SX",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    phone: "+44 20 7946 0958",
    imageSrc: "https://thumbs.dreamstime.com/b/tiffany-company-retail-store-exterior-beverly-hills-ca-usa-january-s-american-multinational-luxury-jewelry-specialty-48563811.jpg",
    coordinates: "51.5098° N, 0.1432° W"
  },
  {
    id: "store-02",
    city: "New York",
    quarter: "Manhattan Atelier",
    address: "740 Madison Avenue, New York, NY 10021",
    hours: "Mon - Sat: 11:00 AM - 6:00 PM",
    phone: "+1 212 555 0192",
    imageSrc: "https://www.shutterstock.com/image-photo/jewelry-store-front-street-view-260nw-2738307895.jpg",
    coordinates: "40.7713° N, 73.9654° W"
  },
  {
    id: "store-03",
    city: "Paris",
    quarter: "Place Vendôme Salon",
    address: "22 Place Vendôme, 75001 Paris",
    hours: "Mon - Sat: 10:30 AM - 7:30 PM",
    phone: "+33 1 42 27 78 90",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPyVoRn6x_QwTj3rusJhIn4xdt7jV1dGHwcg&s",
    coordinates: "48.8675° N, 2.3294° E"
  }
];