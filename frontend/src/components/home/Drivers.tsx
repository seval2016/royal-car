import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import Title from "../common/Title";
import Button from "../common/Button";
import DriverCard from "../common/DriverCard";
import driversData from "../../data/drivers.json";
import { useNavigate } from "react-router-dom";

const Drivers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const navigate = useNavigate();

  const drivers: any[] = driversData;

  // Ana sayfada sadece ilk 3 driver'ı göster
  const homePageDrivers = drivers.slice(0, 3);

  const filteredDrivers =
    selectedCategory === "All Categories"
      ? homePageDrivers
      : homePageDrivers.filter((driver) => driver.category === selectedCategory);
  return (
    <>
      <section
        className="py-16 md:py-24 relative"
        style={{ backgroundImage: "url(/images/drivers/driver-bg-dark.jpg)" }} /* Static görsel */
      >
        {/* Top Drivers Banner - Absolute positioned within section */}
        <div className="absolute -top-24 left-0 right-0 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left part - Black Friday */}
              <div className="bg-brand-dark overflow-hidden shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <img
                      src="/images/drivers/sub-banner-01.png"
                      alt="Black Audi Car"
                      className="h-auto object-contain"
                    />
                  </div>
                  <div className="flex-1 text-right px-6 sm:px-8 lg:px-10">
                    <p className="text-white text-md-custom tracking-widest mb-2">
                      BLACK CARS DISCOUNT 50%
                    </p>
                    <h4 className="text-brand-yellow text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">
                      Special Offers For
                    </h4>
                    <p className="text-brand-yellow text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                      Black Friday.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right part - Monthly Offer */}
              <div className="bg-brand-yellow overflow-hidden shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1 px-6 sm:px-8 lg:px-10">
                    <p className="text-white text-md-custom tracking-widest mb-2">
                      MONTHLY SPECIAL OFFER
                    </p>
                    <h4 className="text-brand-dark text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">
                      Rent 3 Days & Get
                    </h4>
                    <p className="text-brand-dark text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                      Free Insurance.
                    </p>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <img
                      src="/images/drivers/sub-banner-02.png"
                      alt="Yellow Hatchback Car"
                      className=" h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-18 sm:pt-20 lg:pt-24">
          {/* Section Header */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <Title
                subtitle="OUR PROFESSIONAL STAFF"
                title="Drivers."
                titleHighlight="Royal Cars"
                align="center"
                className="mb-4 sm:mb-6"
                subtitleClassName="text-white"
                titleClassName="text-[24px] sm:text-[28px] lg:text-[40px] text-brand-yellow"
              />
            </div>
          </div>

          {/*Main Content*/}
          <div className="flex-1 py-8 sm:py-10 lg:py-12">
            {/*Drivers Grid*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredDrivers.map((drivers) => (
                <DriverCard key={drivers.id} driver={drivers} />
              ))}
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-8">
            <Button
              variant="primary"
              className="flex items-center justify-center gap-2 mx-auto w-full sm:w-80 lg:w-96"
              onClick={() => navigate("/drivers")}
            >
              VIEW ALL DRIVERS
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Drivers;
