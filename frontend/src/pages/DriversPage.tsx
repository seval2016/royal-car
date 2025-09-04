import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero, DriverSlider, ContactForm } from "../components/common";
import { DriverDetails } from "../components/driver";
import driversData from "../data/drivers.json";

const DriversPage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "DRIVERS", path: "/drivers", isActive: true }
  ];

  const drivers: any[] = driversData;

  return (
    <Layout>
      <PageHero
        subtitle="PROFESSIONAL DRIVERS"
        title="Our"
        titleHighlight="Drivers"
        breadcrumbItems={breadcrumbItems}
      />
      
      <div 
        className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 lg:py-32 flex flex-col justify-between"
        style={{
          backgroundImage: "url(/images/drivers/driver-pic.png)",
          backgroundSize: "contain",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh"
        }}
      >
        <DriverDetails />

        {/* Lower Section - Slider */}
        <div className="mt-auto">
          <DriverSlider drivers={drivers} />
        </div>
      </div>
      
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

export default DriversPage;
