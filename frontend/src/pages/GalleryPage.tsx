import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero, Gallery } from "../components/common";

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
    </Layout>
  );
};

export default GalleryPage;
