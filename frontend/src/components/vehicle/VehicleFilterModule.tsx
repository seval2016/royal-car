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
  const [showCarsCount, setShowCarsCount] = useState(6);

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

  const displayedCars = filteredCars.slice(0, showCarsCount);

  return (
    <section className={`bg-white py-8 sm:py-12 lg:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 bg-white rounded-lg">
          {/* Left - Title */}
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-bold text-brand-dark">Car Categories</h2>
          </div>

          {/* Middle - Search Results Count */}
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold text-brand-dark">{displayedCars.length}</span> of <span className="font-semibold text-brand-dark">{filteredCars.length}</span> Search Results
            </p>
          </div>

          {/* Right - Display Options */}
          <div className="flex items-center gap-4">
            {/* Show Cars Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Show Cars:</span>
              <select 
                className="border border-gray-300 rounded px-2 py-1 text-sm bg-white"
                value={showCarsCount}
                onChange={(e) => setShowCarsCount(Number(e.target.value))}
              >
                <option value={6}>6 Cars</option>
                <option value={12}>12 Cars</option>
                <option value={24}>24 Cars</option>
              </select>
            </div>

            {/* View Toggle Buttons */}
            <div className="flex items-center gap-2">
              <button className="p-2 bg-brand-yellow rounded hover:bg-yellow-500 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
                </svg>
              </button>
              <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h18v-2H3v2zm0 6h18v-2H3v2zM3 5v2h18V5H3z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

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
                      <button className="w-full flex items-center px-3 py-4 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
                        <span className="text-yellow-400 mr-2">★</span>
                        Popular Cars
                      </button>
                    </li>
                    <li className="border-b border-gray-600">
                      <button className="w-full flex items-center px-3 py-4 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
                        <span className="text-yellow-400 mr-2">★</span>
                        Special Offers
                      </button>
                    </li>
                    <li>
                      <button className="w-full flex items-center px-3 py-4 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
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
                          className={`w-full flex items-center px-3 py-4 transition-all duration-200 font-medium relative text-sm rounded-none ${
                            selectedManufacturer === manufacturer
                              ? "bg-white text-gray-800 shadow-sm"
                              : "text-white hover:bg-yellow-500"
                          } h-14`}
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
              {displayedCars.map((car) => (
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
