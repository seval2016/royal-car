import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero } from "../components/common";

const ContactPage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "CONTACT US", path: "/contact", isActive: true }
  ];

  return (
    <Layout>
      <PageHero
        subtitle="GET IN TOUCH"
        title="Contact"
        titleHighlight="Us"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">İletişim</h1>
        <p className="text-gray-600">İletişim sayfası burada görüntülenecek.</p>
      </div>
    </Layout>
  );
};

export default ContactPage;
