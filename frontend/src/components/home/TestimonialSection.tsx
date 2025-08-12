import React, { useState, useEffect } from "react";
import { COLORS, SPACING, TRANSITIONS } from "../../constants/design";
import Title from "../common/Title";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  profession: string;
  image: string;
}

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "This was our first time renting from Royal Cars and we were very pleased with the whole experience. Your price was lower than other companies. Our rental experience was good from start to finish, so we'll be back in the future lorem ipsum diamet.",
      name: "Robertho Garcia",
      profession: "Graphic Designer",
      image: "/images/user-01.png",
    },
    {
      id: 2,
      text: "Excellent service and very professional team. The car was in perfect condition and the rental process was smooth. Highly recommended for anyone looking for quality car rental services.",
      name: "Sarah Johnson",
      profession: "Marketing Manager",
      image: "/images/user-02.jpg",
    },
    {
      id: 3,
      text: "I've been using Royal Cars for my business trips for over a year now. Their fleet is always well-maintained and their customer service is outstanding. They truly understand customer needs.",
      name: "Michael Chen",
      profession: "Business Analyst",
      image: "/images/user-03.jpg",
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className={`${SPACING.SECTION_PADDING.MOBILE} ${SPACING.SECTION_PADDING.SMALL} ${SPACING.SECTION_PADDING.MEDIUM} ${SPACING.SECTION_PADDING.LARGE} bg-gray-50`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <Title
            subtitle="Latest Testimonial"
            titleHighlight="What"
            title=" They Say About Us."
            align="center"
            className="mb-16 md:mb-20"
          />
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Content */}
          <div className="relative h-64 md:h-48 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center">
                  <p className="text-md md:text-xl lg:text-2xl font-medium max-w-5xl mx-auto text-gray-600">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Images */}
          <div className="flex justify-center items-center relative">
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
                      ? "z-10 transform scale-75 opacity-40 -mx-4"
                      : "z-0 transform scale-50 opacity-20 -mx-8"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  {/* Profile Image */}
                  <div className="relative mb-4 transition-all duration-500 ease-in-out">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`rounded-full object-cover transition-all duration-500 ${
                        position === 0
                          ? "w-16 h-16 md:w-20 md:h-20"
                          : position === 1 ||
                            position === testimonials.length - 1
                          ? "w-12 h-12 md:w-16 md:h-16"
                          : "w-8 h-8 md:w-12 md:h-12"
                      }`}
                    />
                  </div>

                                     {/* Name and Profession */}
                   <div className={`text-center transition-all duration-500 ${
                     position === 0 ? "opacity-100" : "opacity-0"
                   }`}>
                     <h4 className="font-medium text-sm text-gray-600">
                       {testimonial.name}
                     </h4>
                     <p className="text-xs mt-1 text-gray-400">
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
