import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SearchForm } from "../common";

interface HeroSectionProps {
  slides?: Array<{
    id: number;
    title: string;
    subtitle: string;
    image: string; /* Admin panelden gelecek */
  }>;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/main-slider-01.jpg",
      title: "Kia Rio",
      subtitle: "FOR RENT $50 PER DAY",
      description: "Luxury Sedan with Premium Features",
    },
    {
      image: "/images/main-slider-02.jpg",
      title: "BMW 3",
      subtitle: "FOR RENT $150 PER DAY",
      description: "Premium SUV for Adventure",
    },
    {
      image: "/images/main-slider-03.jpg",
      title: "Audi A4",
      subtitle: "FOR RENT $120 PER DAY",
      description: "Elegant Luxury Experience",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen">
      {/* Slider Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }} /* Dinamik background image */
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Slider Content */}
        <div className="relative z-10 h-full flex items-center pb-32 md:pb-48">
          <div className="container mx-auto px-4">
            <div className="flex justify-center md:justify-end">
              <div className="r-slider-top-content text-center md:text-right flex flex-col items-center md:items-end">
                <h1 className="text-[60px] md:text-[80px] lg:text-[120px] text-white font-semibold animate-fade-in leading-tight">
                  {slides[currentSlide].title} 
                </h1>
                <h4 className="text-white font-light text-[16px] md:text-[20px] lg:text-[23px] tracking-[0.27em] uppercase mb-[20px] md:mb-[30px] animate-fade-in-delay text-center md:text-right">
                  FOR RENT <strong className="text-brand-yellow font-semibold">${slides[currentSlide].subtitle.split('$')[1].split(' ')[0]}</strong> PER DAY
                </h4>
                <a href="#" className="inline-block px-[30px] md:px-[40px] lg:px-[50px] py-[15px] md:py-[18px] lg:py-[20px] bg-transparent text-white text-base md:text-lg font-semibold text-center uppercase border border-white rounded-none transition-all duration-200 ease-linear hover:bg-brand-yellow hover:text-white hover:border-brand-yellow animate-fade-in-delay-2">
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search Form Component */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 md:py-12">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div>
                  <label className="block font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase text-white">
                    Car Brand
                  </label>
                  <select className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm shadow-sm bg-white/90 backdrop-blur-sm">
                    <option value="">Select car brand</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                  </select>
                </div>
                <div>
                  <label className="block font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase text-white">
                    Car Type
                  </label>
                  <select className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm shadow-sm bg-white/90 backdrop-blur-sm">
                    <option value="">Select car type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Van">Van</option>
                    <option value="Sports">Sports</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>
                <div>
                  <label className="block font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase text-white">
                    Car Price
                  </label>
                  <select className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm shadow-sm bg-white/90 backdrop-blur-sm">
                    <option value="">Select price range</option>
                    <option value="$50 - $100">$50 - $100</option>
                    <option value="$100 - $150">$100 - $150</option>
                    <option value="$150 - $200">$150 - $200</option>
                    <option value="$200 - $300">$200 - $300</option>
                    <option value="$300+">$300+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-3 md:py-4 transition-colors font-normal text-base md:text-lg shadow-lg hover:shadow-xl uppercase bg-brand-yellow text-brand-dark"
                  >
                    Search Car Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Navigation Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg hover:bg-white/30 transition-all duration-300 group z-40"
        >
          <ChevronLeft className="text-white text-xl md:text-3xl font-bold group-hover:scale-110 transition-transform" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg hover:bg-white/30 transition-all duration-300 group z-40"
        >
          <ChevronRight className="text-white text-xl md:text-3xl font-bold group-hover:scale-110 transition-transform" />
        </button>

        {/* Slider Pagination */}
        <div className="absolute bottom-20 md:bottom-40 right-4 md:right-8 flex space-x-2 md:space-x-4 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 transition-all duration-300 relative ${
                index === currentSlide ? "font-bold" : "hover:text-gray-300"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
              {index === currentSlide && (
                <div
                  className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-brand-yellow" /* #ffcd00 -> CSS variable */
                ></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
