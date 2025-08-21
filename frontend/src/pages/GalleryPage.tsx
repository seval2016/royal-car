import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero } from "../components/common";

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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Galeri</h1>
        <p className="text-gray-600">Araç galerisi burada görüntülenecek.</p>
      </div>
    </Layout>
  );
};

export default GalleryPage;
