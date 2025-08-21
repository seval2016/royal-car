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
  className = ""
}) => {
  return (
    <section className={`relative py-24 sm:py-32 lg:py-40 bg-black/80 ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/inner-header.jpg)" }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
                     <Title
             subtitle={subtitle}
             title={title}
             titleHighlight={titleHighlight}
             align="center"
             subtitleClassName="text-brand-yellow mb-4"
             titleClassName="text-brand-yellow font-normal"
             titleHighlightClassName="font-bold"
             showBorder={true}
             borderColor="#ffcd00"
           />
          
          {/* Breadcrumb */}
          <div className="flex justify-center mt-6">
            <Breadcrumb 
              items={breadcrumbItems} 
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
