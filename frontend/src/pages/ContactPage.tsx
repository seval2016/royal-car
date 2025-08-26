import React from "react";
import Layout from "../components/layout/Layout";
import { PageHero, Title } from "../components/common";
import { ContactHero } from "../components/contact";

const ContactPage = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "CONTACT", path: "/contact", isActive: true },
  ];

  return (
    <Layout>
      <PageHero
        subtitle="GET IN TOUCH"
        title="Contact"
        titleHighlight="Us"
        breadcrumbItems={breadcrumbItems}
      />

      <div className="container mx-auto pt-32">
        <Title
          subtitle="OUR OFFICE"
          title="Royal Cars"
          titleHighlight="Contact"
          className="mb-8"
          align="left"
        />
        <p className="text-lg text-gray-600 max-w-2xl">for More Information</p>
      </div>

      <ContactHero />
    </Layout>
  );
};

export default ContactPage;
