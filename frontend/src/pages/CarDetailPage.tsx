import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero } from "../components/common";

const CarDetailPage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "VEHICLES", path: "/cars" },
    { name: "CAR DETAIL", path: "/cars/1", isActive: true }
  ];

  return (
    <Layout>
      <PageHero
        subtitle="VEHICLE DETAILS"
        title="Car"
        titleHighlight="Details"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Araç Detayı</h1>
        <p className="text-gray-600">Araç detayları burada görüntülenecek.</p>
      </div>
    </Layout>
  );
};

export default CarDetailPage;
