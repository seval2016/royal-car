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
  Drivers
} from '../components/home';
import { Statistics, Gallery } from '../components/common';

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
      <Gallery gridType="flex" maxItems={5} showHeader={false} />
    </Layout>
  );
};

export default HomePage;
