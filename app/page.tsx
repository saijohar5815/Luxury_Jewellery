
import Craftsmanship from '@/sections/Craftsmanship/Craftsmanship';
import Hero from "@/sections/Hero";
import {LuxuryCollections} from '@/sections/LuxuryCollections';
import FeaturedCategories from '@/sections/FeaturedCategories/FeaturedCategories';
import NewArrivals from '@/sections/NewArrivals';
import { OccasionCurator } from '@/sections/OccasionCurator';
import { Testimonials } from '@/sections/Testimonials';
import { InstagramGallery } from '@/sections/InstagramGallery';
import { ServiceGate } from '@/sections/ServiceGate';
import LuxuryFooter from '@/sections/LuxuryFooter';
import NavBar from '@/sections/LuxuryNavbar';
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Craftsmanship />
      <LuxuryCollections />
      <FeaturedCategories />
      <NewArrivals />
      <OccasionCurator />
      <Testimonials />
      <InstagramGallery />
      <ServiceGate />
      <LuxuryFooter />
    </>
  );
}