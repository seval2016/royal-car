import React from "react";
import { Star, Settings, Fuel, Gauge } from "lucide-react";
import { Title } from "../common";
import { 
  COLORS, 
  SPACING, 
  IMAGE_SIZES, 
  TYPOGRAPHY, 
  LAYOUT, 
  TRANSITIONS, 
  HOVER_EFFECTS 
} from "../../constants/design";

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
      className={`${SPACING.SECTION_PADDING.MOBILE} ${SPACING.SECTION_PADDING.SMALL} ${SPACING.SECTION_PADDING.MEDIUM} ${SPACING.SECTION_PADDING.LARGE} relative`}
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
        style={{ backgroundColor: `rgba(51, 51, 51, 0.8)` }}
      ></div>

      <div className={`container mx-auto ${SPACING.CONTAINER_PADDING.MOBILE} ${SPACING.CONTAINER_PADDING.SMALL} ${SPACING.CONTAINER_PADDING.LARGE} relative z-10`}>
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
            borderColor={COLORS.BRAND_YELLOW}
          />
        </div>

        {/* Discount Cars Grid */}
        <div className={`grid ${LAYOUT.GRID_COLUMNS.MOBILE} ${LAYOUT.GRID_COLUMNS.SMALL} ${LAYOUT.GRID_COLUMNS.LARGE} ${SPACING.GRID_GAP.MOBILE} ${SPACING.GRID_GAP.SMALL} ${SPACING.GRID_GAP.MEDIUM} ${SPACING.GRID_GAP.LARGE} justify-items-center`}>
          {discountCars.map((car) => (
            <div
              key={car.id}
              className={`rounded-lg ${SPACING.CARD_PADDING.MOBILE} ${SPACING.CARD_PADDING.SMALL} ${SPACING.CARD_PADDING.MEDIUM} ${SPACING.CARD_PADDING.LARGE} ${TRANSITIONS.ALL}`}
            >
              <div className={`flex ${LAYOUT.FLEX_DIRECTION.ROW} gap-3 sm:gap-4`}>
                {/* Car Image */}
                <div className="flex-shrink-0">
                  <img
                    src={car.image}
                    alt={car.name}
                    className={`${IMAGE_SIZES.CAR_IMAGE.MOBILE} ${IMAGE_SIZES.CAR_IMAGE.SMALL} ${IMAGE_SIZES.CAR_IMAGE.MEDIUM} object-cover`}
                  />
                </div>

                {/* Car Details */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Rating */}
                  <div className={`flex items-center mb-1 ${HOVER_EFFECTS.YELLOW_TEXT} ${TRANSITIONS.COLORS}`}>
                    {[...Array(car.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-3 h-3 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Car Name */}
                  <h4 className={`${TYPOGRAPHY.CAR_NAME.MOBILE} ${TYPOGRAPHY.CAR_NAME.SMALL} font-semibold text-white ${HOVER_EFFECTS.YELLOW_TEXT} ${TRANSITIONS.COLORS} cursor-pointer`}>
                    {car.name}
                  </h4>

                  {/* Pricing */}
                  <div className={`mb-2 ${HOVER_EFFECTS.YELLOW_TEXT} ${TRANSITIONS.COLORS}`}>
                    <div className="r-price-discount">
                      <span
                        className="r-cut-price text-base-custom"
                        style={{
                          textDecoration: "line-through",
                          color: COLORS.GRAY_LIGHT,
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
                          className={`inline-flex items-center gap-1 bg-brand-gray-dark text-brand-gray-medium px-1 py-0.5 ${HOVER_EFFECTS.YELLOW_BG} ${TRANSITIONS.COLORS} cursor-pointer`}
                        >
                          <IconComponent className="w-2.5 h-2.5" />
                          <span style={{ fontSize: '0.625rem' }}>
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
