import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Search, ChevronLeft, ChevronRight } from "lucide-react";
import SearchForm from "./SearchForm";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "VEHICLES", href: "/cars" },
    { name: "GALLERY", href: "/gallery" },
    { name: "DRIVERS", href: "/drivers" },
    { name: "CONTACT US", href: "/contact" },
  ];

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

  const isActive = (path: string) => location.pathname === path;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen">
      {/* Header - Fixed on top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "bg-[#2d2d2d]" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src="/images/logo.png"
                  alt="Royal Cars Logo"
                  className="h-12"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-white border-b-2 border-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Utility Icons */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="flex items-center space-x-2 group cursor-pointer">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <User className="w-5 h-5 text-white group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      LOGIN
                    </span>
                    <span className="text-xs text-white/70">Account</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Search className="w-5 h-5 text-white group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      SEARCH
                    </span>
                    <span className="text-xs text-white/70">Find Cars</span>
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2 rounded-md text-white hover:text-white hover:bg-white/20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-white/20">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

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
                  FOR RENT{" "}
                  <strong className="text-[#ffcd00] font-semibold">
                    ${slides[currentSlide].subtitle.split("$")[1].split(" ")[0]}
                  </strong>{" "}
                  PER DAY
                </h4>
                <a
                  href="#"
                  className="inline-block px-[30px] md:px-[40px] lg:px-[50px] py-[15px] md:py-[18px] lg:py-[20px] bg-transparent text-white text-base md:text-lg font-semibold text-center uppercase border border-white rounded-none transition-all duration-200 ease-linear hover:bg-[#ffcd00] hover:text-white hover:border-[#ffcd00] animate-fade-in-delay-2"
                >
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
