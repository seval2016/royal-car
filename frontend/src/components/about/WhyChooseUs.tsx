import React from "react";
import { Title, Button } from "../common";
import whyChooseUsData from "../../data/whyChooseUs.json";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = whyChooseUsData.whyChooseUs;

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Title
            subtitle="WHY CHOOSE US"
            title="Experience"
            titleHighlight="Premium Car Rental"
            subtitleClassName="text-brand-yellow"
            titleClassName="text-brand-dark font-bold"
            titleHighlightClassName="text-brand-yellow font-regular"
            align="center"
            
          />
          <p className="mt-6 text-mdd text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Royal Car ile premium araç kiralama deneyimini yaşayın. Güvenilir,
            konforlu ve ekonomik çözümlerimizle seyahatlerinizi unutulmaz kılın.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
                             className="group relative bg-white p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-3 sm:mb-4 group-hover:text-brand-yellow transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto hover:bg-brand-dark transition-colors duration-300 transform hover:scale-105"
            >
              View All Vehicles
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="w-full sm:w-auto hover:bg-brand-yellow transition-colors duration-300 transform hover:scale-105"
            >
              Reserved Car
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
