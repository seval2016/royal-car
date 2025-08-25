import React, { useState } from "react";
import DriverCard from "./DriverCard";

interface Driver {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  experience: string;
}

interface DriverSliderProps {
  drivers: Driver[];
}

const DriverSlider = ({ drivers }: DriverSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Her slide'da 3 kart göster
  const slidesPerView = 3;
  const totalSlides = Math.ceil(drivers.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Her slide için 3'lü gruplar oluştur
  const groupedDrivers = [];
  for (let i = 0; i < drivers.length; i += slidesPerView) {
    groupedDrivers.push(drivers.slice(i, i + slidesPerView));
  }

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {groupedDrivers.map((group, groupIndex) => (
            <div key={groupIndex} className="w-full flex-shrink-0 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {group.map((driver) => (
                  <DriverCard key={driver.id} driver={driver} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

             {/* Navigation Dots */}
       <div className="flex justify-center mt-8 space-x-2">
         {Array.from({ length: totalSlides }, (_, index) => (
           <button
             key={index}
             onClick={() => goToSlide(index)}
             className={`w-3 h-3 rounded-full transition-colors duration-300 ${
               index === currentSlide 
                 ? "bg-brand-yellow" 
                 : "bg-gray-300 hover:bg-gray-400"
             }`}
             aria-label={`Go to slide ${index + 1}`}
           />
         ))}
       </div>
    </div>
  );
};

export default DriverSlider;
