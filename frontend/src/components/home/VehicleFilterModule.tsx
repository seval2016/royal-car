import React, { useState } from "react";
import { Car } from "lucide-react";
import Title from "../common/Title";
import CarCard from "../common/CarCard";
import carsData from "../../data/cars.json";

const VehicleFilterModule = () => {
  const [selectedManufacturer, setSelectedManufacturer] =
    useState("All Manufacturer");

  const manufacturers = [
    "All Manufacturer",
    "Honda",
    "Mercedes Benz",
    "Toyota",
    "Volkswagen",
    "Audi",
    "Ferrari",
  ];

  const cars: any[] = carsData;

  const filteredCars =
    selectedManufacturer === "All Manufacturer"
      ? cars
      : cars.filter((car) => car.manufacturer === selectedManufacturer);

  return (
    <section className="bg-brand-cream py-16">
      <div className="container mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <Title
            subtitle="OUR VEHICLES BRANDS & TYPE"
            title="Best Vehicles."
            titleHighlight="Find Your"
            align="center"
            className="mb-6"
            subtitleClassName="text-brand-dark"
            titleClassName="text-[28px] sm:text-[32px] lg:text-[40px]"
          />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 min-h-screen">
            <div className="py-6">
              <ul>
                {manufacturers.map((manufacturer) => (
                  <li key={manufacturer}>
                    <button
                      onClick={() => setSelectedManufacturer(manufacturer)}
                      className={`w-full flex items-center px-4 py-3 transition-all duration-200 font-medium relative text-13 ${
                        selectedManufacturer === manufacturer
                          ? "bg-white text-gray-800 shadow-sm"
                          : "bg-brand-yellow text-white hover:bg-yellow-500"
                      }`}
                    >
                      {selectedManufacturer === manufacturer && (
                        <div className="absolute -left-1 top-0 bottom-0 w-1 bg-brand-yellow rounded-r-sm"></div>
                      )}
                      {manufacturer}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            {/* Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  No vehicles found for {selectedManufacturer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleFilterModule;
