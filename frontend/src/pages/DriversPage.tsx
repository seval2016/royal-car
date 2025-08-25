import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero, DriverSlider } from "../components/common";
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
    </Layout>
  );
};

export default DriversPage;
