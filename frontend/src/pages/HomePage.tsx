import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, Star } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import Advantages from '@/components/home/Advantages';
import About from '@/components/home/About';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Advantages Section */}
      <Advantages />

      {/* About Section */}
      <About />


    </div>
  );
};

export default HomePage;
