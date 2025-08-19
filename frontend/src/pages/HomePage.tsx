import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, Star } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import Advantages from '@/components/home/Advantages';
import About from '@/components/home/About';
import Discount from '@/components/home/Discount';
import TestimonialSection from '@/components/home/TestimonialSection';
import GallerySection from '@/components/home/Gallery';
import Blog from '@/components/home/Blog';
import Statistics from '@/components/home/Statistics';
import FAQ from '@/components/home/FAQ';
import VehicleFilterModule from '@/components/home/VehicleFilterModule';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Advantages Section */}
      <Advantages />

      {/* About Section */}
      <About />

      {/* Discount Section */}
      <Discount />

      {/* Testimonial Section */}
      <TestimonialSection />

  {/* Vehicle Filter Section */}
  <VehicleFilterModule />
  
      {/* FAQ Section */}
      <FAQ />

      {/* Statistics Section */}
      <Statistics />

      {/* Blog Section */}
      <Blog />

      {/* Gallery Section */}
      <GallerySection />

    </>
  );
};

export default HomePage;
