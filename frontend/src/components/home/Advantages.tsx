import React from 'react';
import { Title } from '../common';

const Advantages = () => {
  const advantages = [
    {
      icon: '/images/advantage-icon-1.png',
      title: '24/7 Customer Online Support',
      subtitle: 'Call us Anywhere Anytime'
    },
    {
      icon: '/images/advantage-icon-2.png',
      title: 'Reservation Anytime You Wants',
      subtitle: '24/7 Online Reservation'
    },
    {
      icon: '/images/advantage-icon-3.png',
      title: 'Lots of Picking Locations',
      subtitle: '250+ Locations'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <Title
            subtitle="120+ CARS TYPE & BRANDS"
            title="Advantages."
            titleHighlight="Royal Cars"
            align="center"
            subtitleClassName="text-brand-dark mb-4"
          />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-lg p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 min-h-[220px] md:min-h-[260px] flex flex-col justify-center">
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <img 
                  src={advantage.icon} 
                  alt={advantage.title}
                  className="w-8 h-8 md:w-12 md:h-12 mx-auto"
                />
              </div>
              
              {/* Title */}
              <div className="text-lg md:text-xl font-medium text-brand-dark mb-2 md:mb-3">
                {advantage.title}
              </div>
              
              {/* Subtitle */}
              <div className="text-xs md:text-base text-brand-text-gray leading-relaxed">
                {advantage.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
