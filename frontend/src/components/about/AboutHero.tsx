import React from "react";
import { PageHero } from "../common";

const AboutHero = () => {
  const breadcrumbItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about", isActive: true }
  ];

  return (
    <PageHero
      title="Royal Cars"
      titleHighlight="About"
      breadcrumbItems={breadcrumbItems}
    />
  );
};

export default AboutHero;
