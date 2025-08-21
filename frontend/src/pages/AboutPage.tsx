import React from "react";
import Layout from "../components/layout/Layout";
import { AboutHero, AboutContent, WhyChooseUs } from "../components/about";
import { ContactForm, Statistics } from "../components/common";

const AboutPage = () => {
  return (
    <Layout>
      <AboutHero />
      <AboutContent />
      <WhyChooseUs />
      <Statistics variant="about" />
      
      {/* Contact Form Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/contact-form-bg.jpg)" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ContactForm 
            title="Contact Us"
            subtitle="Get in touch with our team for any questions or inquiries"
            variant="default"
          />
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
