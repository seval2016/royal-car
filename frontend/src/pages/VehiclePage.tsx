import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero, ContactForm } from "../components/common";
import SearchForm from "../components/common/SearchForm";
import { VehicleFilterModule } from "../components/vehicle";
import searchFormData from "../data/searchForm.json";


const VehiclePage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "VEHICLES", path: "/vehicles", isActive: true }
  ];

  return (
    <Layout>
      <PageHero
        title="Our"
        titleHighlight="Vehicles"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="bg-[#f8f4da]">
        <SearchForm
          variant="standalone"
          fields={searchFormData.vehicleFields}
          buttonText="Search Vehicles"
          buttonClassName="bg-brand-yellow text-white"
          onSubmit={(values) => console.log('Vehicle search values:', values)}
        />
      </div>
      <VehicleFilterModule
        title="Our"
        titleHighlight="Vehicles"
        subtitle="BROWSE OUR VEHICLE COLLECTION"
        showTitle={true}
      />
      
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
            variant="default"
          />
        </div>
      </section>
    
    </Layout>
  );
};

export default VehiclePage;
