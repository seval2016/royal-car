import React from 'react';
import Layout from '../components/layout/Layout';
import {
  HeroSection,
  About,
  Advantages,
  VehicleFilterModule,
  Discount,
  Statistics,
  TestimonialSection,
  Blog,
  FAQ,
  Drivers,
  Gallery
} from '../components/home';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Advantages />
      <About />
      <Discount />
      <TestimonialSection />
      <Drivers />
      <VehicleFilterModule />
      <FAQ />
      <Statistics />
      <Blog />  
      <Gallery />
    </Layout>
  );
};

export default HomePage;
