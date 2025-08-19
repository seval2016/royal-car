import React, { useState, useEffect } from "react";
import { COLORS, SPACING, TRANSITIONS } from "../../constants/design";
import Title from "../common/Title";
import testimonialData from "../../data/testimonial.json";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  profession: string;
  image: string;
}

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = testimonialData;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <Title
            subtitle="Latest Testimonial"
            titleHighlight="What"
            title=" They Say About Us."
            align="center"
            className="mb-8 sm:mb-12 lg:mb-16"
          />
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-18">
          {/* Testimonial Content */}
          <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 mb-8 sm:mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center px-4 sm:px-6 lg:px-8">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium max-w-4xl mx-auto text-gray-600 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Images */}
          <div className="flex justify-center items-center relative px-4 sm:px-6 lg:px-8">
            {testimonials.map((testimonial, index) => {
              // Calculate position relative to current index
              const position =
                (index - currentIndex + testimonials.length) %
                testimonials.length;

              return (
                <div
                  key={testimonial.id}
                  className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-in-out ${
                    position === 0
                      ? "z-20 transform scale-125"
                      : position === 1 || position === testimonials.length - 1
                      ? "z-10 transform scale-75 opacity-40 -mx-2 sm:-mx-4 lg:-mx-6"
                      : "z-0 transform scale-50 opacity-20 -mx-4 sm:-mx-8 lg:-mx-12"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  {/* Profile Image */}
                  <div className="relative mb-2 sm:mb-4 transition-all duration-500 ease-in-out">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`rounded-full object-cover transition-all duration-500 ${
                        position === 0
                          ? "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                          : position === 1 ||
                            position === testimonials.length - 1
                          ? "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                          : "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                      }`}
                    />
                  </div>

                  {/* Name and Profession */}
                  <div className={`text-center transition-all duration-500 ${
                    position === 0 ? "opacity-100" : "opacity-0"
                  }`}>
                    <h4 className="font-medium text-xs sm:text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm mt-1 text-gray-400">
                      {testimonial.profession}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
