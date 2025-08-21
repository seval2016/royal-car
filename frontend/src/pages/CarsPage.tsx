import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero } from "../components/common";

const CarsPage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "VEHICLES", path: "/cars", isActive: true }
  ];

  return (
    <Layout>
      <PageHero
        subtitle="OUR VEHICLES"
        title="Luxury"
        titleHighlight="Car Collection"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Arabalarımız</h1>
        <p className="text-gray-600">Araç listesi burada görüntülenecek.</p>
      </div>
    </Layout>
  );
};

export default CarsPage;
