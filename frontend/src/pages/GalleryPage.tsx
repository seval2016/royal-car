import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero, Gallery, ContactForm } from "../components/common";

const GalleryPage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery", isActive: true }
  ];

  return (
    <Layout>
      <PageHero
        subtitle="OUR GALLERY"
        title="Vehicle"
        titleHighlight="Gallery"
        breadcrumbItems={breadcrumbItems}
      />
      <Gallery showHeader={false} gridType="grid" />
      
      {/* Contact Form Section */}
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

export default GalleryPage;
