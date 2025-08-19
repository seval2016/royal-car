import React, { useState } from "react";
import Title from "../common/Title";
import DriverCard from "../common/driverCard";
import driversData from "../../data/drivers.json";
import Button from "../common/Button";

const Drivers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const drivers: any[] = driversData;

  const filteredDrivers =
    selectedCategory === "All Categories"
      ? drivers
      : drivers.filter((driver) => driver.category === selectedCategory);
  return (
    <>
      {/* Top Drivers Banner */}
      <section
        className="bg-cover bg-center bg-no-repeat py-8 sm:py-12 lg:py-16 relative"
        style={{ backgroundImage: "url(/images/drivers/driver-bg-dark.jpg)" }}
      >
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
                <div className="flex-1 text-right p-10">
                  <p className="text-white text-sm sm:text-base font-medium mb-2">
                    BLACK CARS DISCOUNT 50%
                  </p>
                  <p className="text-brand-yellow text-lg sm:text-xl font-medium mb-1">
                    Special Offers For
                  </p>
                  <p className="text-brand-yellow text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Black Friday.
                  </p>
                </div>
              </div>
            </div>

            {/* Right part - Monthly Offer */}
            <div className="bg-brand-yellow overflow-hidden shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex-1 px-10">
                  <p className="text-white text-sm sm:text-base font-medium mb-2">
                    MONTHLY SPECIAL OFFER
                  </p>
                  <p className="text-brand-dark text-lg sm:text-xl font-medium mb-1">
                    Rent 3 Days & Get
                  </p>
                  <p className="text-brand-dark text-2xl sm:text-3xl lg:text-4xl font-bold">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="flex-1 py-8 lg:py-12 ">
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
              onClick={() => console.log("View all drivers clicked")}
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
