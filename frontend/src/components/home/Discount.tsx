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
       style={{
         backgroundImage: "url(/images/discount-bg.jpg)",
         backgroundSize: "cover",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
       }}
     >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(51, 51, 51, 0.8)" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <Title
            subtitle="NEW MEMBER DISCOUNT"
            title="for Audi & Mercedes Only."
            titleHighlight="Reserved Now & Get 50% Off"
            align="left"
            subtitleClassName="text-white mb-4"
            titleClassName="text-[#ffcd00] font-normal"
            showBorder={true}
            borderColor="#ffcd00"
          />
        </div>

        {/* Discount Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {discountCars.map((car) => (
            <div
              key={car.id}
              className="rounded-lg p-3 md:p-4 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-3">
                {/* Car Image */}
                <div className="flex-shrink-0">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-[120px] h-[120px] object-cover"
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
                  <h4 className="text-xl font-semibold text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                    {car.name}
                  </h4>

                  {/* Pricing */}
                  <div className="mb-2 hover:text-yellow-400 transition-colors duration-200">
                    <div className="r-price-discount">
                      <span
                        className="r-cut-price text-[13px]"
                        style={{
                          textDecoration: "line-through",
                          color: "#777777",
                        }}
                      >
                        ${car.oldPrice.toFixed(2)}
                      </span>{" "}
                      <b className=" text-white">
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
                          className="inline-flex items-center gap-1 bg-[#444444] text-[#999] px-1.5 py-1 hover:text-white hover:bg-yellow-400 transition-colors duration-200 cursor-pointer"
                        >
                          <IconComponent className="w-3 h-3" />
                          <span style={{ fontSize: "0.6875rem" }}>
                            {spec.text}
                          </span>
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
