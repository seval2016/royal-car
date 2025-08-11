import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SearchForm from "../SearchForm";

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
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Slider Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex justify-end">
              <div className="r-slider-top-content text-right flex flex-col items-center md:items-end">
                <h1 className="text-[60px] md:text-[80px] lg:text-[120px] text-white font-semibold animate-fade-in leading-tight">
                  {slides[currentSlide].title} 
                </h1>
                <h4 className="text-white font-light text-[16px] md:text-[20px] lg:text-[23px] tracking-[0.27em] uppercase mb-[20px] md:mb-[30px] animate-fade-in-delay text-center md:text-right">
                  FOR RENT <strong className="text-[#ffcd00] font-semibold">${slides[currentSlide].subtitle.split('$')[1].split(' ')[0]}</strong> PER DAY
                </h4>
                <a href="#" className="inline-block px-[30px] md:px-[40px] lg:px-[50px] py-[15px] md:py-[18px] lg:py-[20px] bg-transparent text-white text-base md:text-lg font-semibold text-center uppercase border border-white rounded-none transition-all duration-200 ease-linear hover:bg-[#ffcd00] hover:text-white hover:border-[#ffcd00] animate-fade-in-delay-2">
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search Form Component */}
        <SearchForm />

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
                  className="absolute bottom-0 left-1/4 right-1/4 h-0.5"
                  style={{ backgroundColor: "#ffcd00" }}
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
