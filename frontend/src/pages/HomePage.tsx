import React from 'react';
import Layout from '../components/layout/Layout';
import {
  HeroSection,
  About,
  Advantages,
  VehicleFilterModule,
  Discount,
  TestimonialSection,
  Blog,
  FAQ,
  Drivers,
  Gallery
} from '../components/home';
import { Statistics } from '../components/common';

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
