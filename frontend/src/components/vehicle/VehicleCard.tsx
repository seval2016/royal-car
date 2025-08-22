import React from "react";
import { Settings, Fuel, Gauge, Zap } from "lucide-react";

interface Car {
  id: string;
  manufacturer: string;
  model: string;
  modelCode: string;
  year: string;
  price: number;
  engine: string;
  transmission: string;
  fuelType: string;
  mileage: string;
  image: string;
}

interface VehicleCardProps {
  car: Car;
}

const VehicleCard = ({ car }: VehicleCardProps) => {
  return (
    <div className="bg-white transition-all duration-300 overflow-hidden group p-4 max-w-2xl mx-auto relative pb-10">
      {/* Car Image */}
      <div className="h-40 sm:h-56 bg-gray-200 relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.manufacturer} ${car.model}`}
          className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-brand-yellow rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Car Info */}
      <div className="p-5 sm:p-7">
        {/* Manufacturer and Model */}
        <div className="mb-4">
          <p className="font-bold text-brand-dark text-lg sm:text-xl flex items-center justify-center gap-2">
            {car.model}
            <span className="text-brand-yellow font-normal">{car.modelCode}</span>
          </p>
        </div>

        {/* Price */}
        <div className="mb-6 text-center">
          <p className="text-base text-gray-600">
            Start at <span className="font-bold text-brand-dark">${car.price}.00 USD</span> per day
          </p>
        </div>

        {/* Car Details */}
        <div className="flex justify-between items-center text-base-custom text-brand-lightGray pt-3">
          <div className="flex items-center">
            <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="hidden sm:inline">{car.transmission}</span>
            <span className="sm:hidden">Auto</span>
          </div>

          <div className="flex items-center">
            <Fuel className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="hidden sm:inline">{car.fuelType}</span>
            <span className="sm:hidden">Petrol</span>
          </div>

          <div className="flex items-center">
            <Gauge className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="hidden sm:inline">{car.mileage}</span>
            <span className="sm:hidden">50K</span>
          </div>

          <div className="flex items-center">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="hidden sm:inline">{car.engine}</span>
            <span className="sm:hidden">{car.engine}</span>
          </div>
        </div>
      </div>

      {/* Hover Button */}
      <div className="absolute -bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <button className="w-full bg-brand-yellow text-white font-bold py-6 px-4 uppercase tracking-wide hover:bg-yellow-500 transition-colors duration-200">
          Rent This Car
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
