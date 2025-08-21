import React from "react";
import { Title } from "../common";

const AboutContent = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Title
              title="About"
              titleHighlight="Royal Cars"
              align="left"
              subtitleClassName="text-brand-yellow mb-4"
              titleClassName="text-brand-dark font-normal"
              showBorder={true}
              borderColor="#ffcd00"
            />    
            {/* Key Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Premium Fleet</h4>
                  <p className="text-sm text-brand-text-light">Carefully selected luxury vehicles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">24/7 Support</h4>
                  <p className="text-sm text-brand-text-light">Round-the-clock customer service</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Flexible Terms</h4>
                  <p className="text-sm text-brand-text-light">Customizable rental options</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Competitive Pricing</h4>
                  <p className="text-sm text-brand-text-light">Best value for luxury experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img
              src="/images/about-img-01.png"
              alt="About Royal Cars"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-yellow p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-dark">15+</div>
                <div className="text-sm text-brand-dark font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default AboutContent;
