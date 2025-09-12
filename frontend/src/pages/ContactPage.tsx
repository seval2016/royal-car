import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero, Title, ContactForm } from "../components/common";
import { ContactHero } from "../components/contact";

const ContactPage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "CONTACT", path: "/contact", isActive: true },
  ];

  return (
    <Layout>
      <PageHero
        subtitle="GET IN TOUCH"
        title="Contact"
        titleHighlight="Us"
        breadcrumbItems={breadcrumbItems}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">  
          <Title
            subtitle="OUR OFFICE"
            title="Royal Cars"
            titleHighlight="Contact"
            className="text-brand-gray-dark"
            align="left"
          />

        <ContactHero />
      </div>
      
      {/* Contact Form Section with Background Image */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contact-form-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
