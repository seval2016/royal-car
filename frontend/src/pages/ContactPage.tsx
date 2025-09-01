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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">  
          <Title
            subtitle="OUR OFFICE"
            title="Royal Cars"
            titleHighlight="Contact"
            className="text-brand-gray-dark"
            align="left"
          />

        <ContactHero />
      </div>
    </Layout>
  );
};

export default ContactPage;
