import React from "react";
import { Star, Settings, Fuel, Gauge } from "lucide-react";
import { Title } from "../common";

const Discount = () => {
  const discountCars = [
    {
      id: 1,
      image: "/images/discount-car-01.jpg",
      name: "Audi Cabriolet R8",
      rating: 5,
      oldPrice: 50.0,
      newPrice: 25.0,
      specifications: [
        { icon: Settings, text: "MANUAL" },
        { icon: Fuel, text: "PETROL" },
        { icon: Gauge, text: "2.3k CC" },
      ],
    },
    {
      id: 2,
      image: "/images/discount-car-02.jpg",
      name: "Mercedes Benz I7",
      rating: 5,
      oldPrice: 50.0,
      newPrice: 25.0,
      specifications: [
        { icon: Settings, text: "MANUAL" },
        { icon: Fuel, text: "PETROL" },
        { icon: Gauge, text: "2.3k CC" },
      ],
    },
    {
      id: 3,
      image: "/images/discount-car-03.jpg",
      name: "Audi Cabriolet R8",
      rating: 5,
      oldPrice: 50.0,
      newPrice: 25.0,
      specifications: [
        { icon: Settings, text: "MANUAL" },
        { icon: Fuel, text: "PETROL" },
        { icon: Gauge, text: "2.3k CC" },
      ],
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
      style={{ backgroundImage: "url(/images/discount-bg.jpg)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-2xl">
          <Title
            subtitle="NEW MEMBER DISCOUNT"
            title="for Audi & Mercedes Only."
            titleHighlight="Reserved Now & Get 50% Off"
            align="left"
            subtitleClassName="text-white mb-4"
            titleClassName="text-brand-yellow font-normal"
            showBorder={true}
            borderColor="#ffcd00"
          />
        </div>

        {/* Discount Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-items-center">
          {discountCars.map((car) => (
            <div
              key={car.id}
              className="rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300"
            >
              <div className="flex flex-row gap-3 sm:gap-4">
                {/* Car Image */}
                <div className="flex-shrink-0">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] object-cover"
                  />
                </div>

                {/* Car Details */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Rating */}
                  <div className="flex items-center mb-1 hover:text-yellow-400 transition-colors duration-200">
                    {[...Array(car.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-3 h-3 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Car Name */}
                  <h4 className="text-lg sm:text-xl font-semibold text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                    {car.name}
                  </h4>

                  {/* Pricing */}
                  <div className="mb-2 hover:text-yellow-400 transition-colors duration-200">
                    <div className="r-price-discount">
                      <span
                        className="r-cut-price text-base-custom"
                        style={{
                          textDecoration: "line-through",
                          color: "#777777",
                        }}
                      >
                        ${car.oldPrice.toFixed(2)}
                      </span>{" "}
                      <b className="text-white">
                        ${car.newPrice.toFixed(2)} USD
                      </b>{" "}
                      <span className="text-white font-normal">per day</span>
                    </div>
                  </div>

                  {/* Car Specifications */}
                  <div className="flex gap-1">
                    {car.specifications.map((spec, index) => {
                      const IconComponent = spec.icon;
                      return (
                        <div
                          key={index}
                          className="inline-flex items-center gap-1 bg-brand-gray-dark text-brand-gray-medium px-1 py-0.5 hover:bg-yellow-400 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          <IconComponent className="w-2.5 h-2.5" />
                          <span className="text-xs-custom">{spec.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discount;
