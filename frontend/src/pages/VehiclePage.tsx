import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero } from "../components/common";
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
    
    </Layout>
  );
};

export default VehiclePage;
