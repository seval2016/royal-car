import React from 'react';
import { Check } from 'lucide-react';
import { Title } from '../common';

const About = () => {
  const features = [
    'We working since 1980 with 4.000 customers',
    'All brand & type cars in our garage',
    '1.000+ picking locations around the world'
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/images/about-img-01.png"
                alt="About Royal Cars"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg "
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center">
            {/* Title */}
                         <div className="mb-8">
               <Title
                 title=" Royal Cars"
                  titleHighlight="Who"
                 subtitle="KNOW MORE ABOUT US"
                 align="left"
                 className="mb-6"
                 showBorder={true}
                 borderColor="#ffcd00"
               />
             </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-[#777] text-sm md:text-base leading-relaxed">
                We know the difference is in the details and that's why our car rental services, 
                in the tourism and business industry, stand out for their quality and good taste.
              </p>
            </div>

            {/* Features List */}
            <div className="mb-8 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-4 h-4 bg-[#ffcd00] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold text-xs md:text-base leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature Section */}
            <div className="flex items-end space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/about-sign.png"
                  alt="Royal Cars Owner Signature"
                  className="w-40 md:w-40 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
