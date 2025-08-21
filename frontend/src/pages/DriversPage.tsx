import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero } from "../components/common";

const DriversPage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "DRIVERS", path: "/drivers", isActive: true }
  ];

  return (
    <Layout>
      <PageHero
        subtitle="PROFESSIONAL DRIVERS"
        title="Our"
        titleHighlight="Drivers"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Şoförler</h1>
        <p className="text-gray-600">Şoför hizmetleri burada görüntülenecek.</p>
      </div>
    </Layout>
  );
};

export default DriversPage;
