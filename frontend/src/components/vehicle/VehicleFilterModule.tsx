import React, { useState } from "react";
import { Car, Filter } from "lucide-react";
import Title from "../common/Title";
import VehicleCard from "./VehicleCard";
import carsData from "../../data/cars.json";

interface VehicleFilterModuleProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  showTitle?: boolean;
}

const VehicleFilterModule: React.FC<VehicleFilterModuleProps> = ({
  title = "Best Vehicles.",
  titleHighlight = "Find Your",
  subtitle = "OUR VEHICLES BRANDS & TYPE",
  align = "center",
  className = "",
  showTitle = true,
}) => {
  const [selectedManufacturer, setSelectedManufacturer] =
    useState("All Manufacturer");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <section className={`bg-white py-8 sm:py-12 lg:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        {showTitle && (
          <div className="mb-6 sm:mb-8">
            <Title
              subtitle={subtitle}
              title={title}
              titleHighlight={titleHighlight}
              align={align}
              className="mb-4 sm:mb-6"
              subtitleClassName="text-brand-dark"
              titleClassName="text-[24px] sm:text-[28px] lg:text-[40px]"
            />
          </div>
        )}

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center gap-2 bg-brand-yellow text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            <Filter className="w-5 h-5" />
            Filter by Manufacturer
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div
            className={`lg:w-72 ${isSidebarOpen ? "block" : "hidden lg:block"} mb-4 lg:mb-0`}
          >
            <div className="bg-white rounded-lg shadow-sm lg:shadow-none lg:bg-transparent">
              <div className="p-3 lg:py-4">
                <h3 className="text-base font-semibold text-gray-800 mb-3 lg:hidden">
                  Manufacturers
                </h3>
                
                {/* Top Section - Dark Grey Background */}
                <div className="bg-gray-800">
                  <ul className="space-y-0">
                    <li className="border-b border-gray-600">
                      <button className="w-full flex items-center px-3 py-3 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
                        <span className="text-yellow-400 mr-2">★</span>
                        Popular Cars
                      </button>
                    </li>
                    <li className="border-b border-gray-600">
                      <button className="w-full flex items-center px-3 py-3 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
                        <span className="text-yellow-400 mr-2">★</span>
                        Special Offers
                      </button>
                    </li>
                    <li>
                      <button className="w-full flex items-center px-3 py-3 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
                        <span className="text-yellow-400 mr-2">★</span>
                        Limited Editions
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Bottom Section - Yellow Background */}
                <div className="bg-brand-yellow">
                  <ul className="space-y-0">
                    {manufacturers.map((manufacturer) => (
                      <li key={manufacturer} className="mb-0">
                        <button
                          onClick={() => {
                            setSelectedManufacturer(manufacturer);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full flex items-center px-3 py-3 transition-all duration-200 font-medium relative text-sm rounded-none ${
                            selectedManufacturer === manufacturer
                              ? "bg-white text-gray-800 shadow-sm"
                              : "text-white hover:bg-yellow-500"
                          } h-12`}
                        >
                          {selectedManufacturer === manufacturer && (
                            <div className="absolute -left-1 top-0 bottom-0 w-1 bg-brand-yellow rounded-r-sm hidden lg:block"></div>
                          )}
                          {manufacturer}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 lg:p-4">
            {/* Cars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              {filteredCars.map((car) => (
                <VehicleCard key={car.id} car={car} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-6 sm:py-8">
                <Car className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" />
                <p className="text-gray-500 text-sm sm:text-base">
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
