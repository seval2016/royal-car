import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, Star } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import Advantages from '@/components/home/Advantages';
import About from '@/components/home/About';
import Discount from '@/components/home/Discount';
import TestimonialSection from '@/components/home/TestimonialSection';
import GallerySection from '@/components/home/Gallery';
import Blog from '@/components/home/BlogSection';

const HomePage = () => {
  return (
    <div>
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

                   {/* Blog Section */}
             <Blog />

      {/* Gallery Section */}
      <GallerySection />

    </div>
  );
};

export default HomePage;
