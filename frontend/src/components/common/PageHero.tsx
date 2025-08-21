import React from "react";
import { Title, Breadcrumb } from "./index";

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbItems: Array<{
    name: string;
    path: string;
    isActive?: boolean;
  }>;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  titleHighlight,
  subtitle,
  breadcrumbItems,
  className = "",
}) => {
  return (
    <section
      className={`relative py-32 sm:py-40 lg:py-48 ${className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/inner-header.jpg)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
                     <Title
             subtitle={subtitle}
             title={title}
             titleHighlight={titleHighlight}
             align="center"
             titleClassName="text-brand-yellow "
             titleHighlightClassName=""
           />

          {/* Breadcrumb */}
          <div className="flex justify-center mt-6">
            <Breadcrumb items={breadcrumbItems} className="font-medium" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
