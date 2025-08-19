import React from "react";
import { Settings, Fuel, Gauge } from "lucide-react";

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

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden w-64 p-2">
      {/* Car Image */}
      <div className="h-32 bg-gray-200 relative">
        <img
          src={car.image}
          alt={`${car.manufacturer} ${car.model}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Car Info */}
      <div className="p-4">
        {/* Registered Year */}
        <div className="mb-2">
          <a
            href="#"
            className="text-[16px] text-brand-gray hover:text-brand-yellow transition-colors"
          >
            Registered {car.year}
          </a>
        </div>

        {/* Manufacturer and Model */}
        <div className="mb-3 text-[18px] flex items-center gap-2">
          <p className="font-bold text-brand-dark">{car.model}</p>
          <span className="text-brand-yellow font-base">{car.modelCode}</span>
        </div>

        {/* Price and Engine */}
        <div className="flex justify-between items-center mb-4">
          <div className="bg-brand-yellow text-white px-3 py-1 font-semibold text-md-custom">
            ${car.price}/Day
          </div>
          <div className="text-md-custom text-[#bbb] font-medium flex items-center">
            <img
              src="/images/cars/meter-icon.png"
              alt="meter"
              className="mr-2"
            />
            {car.engine}
          </div>
        </div>

        {/* Car Details */}
        <div className="flex justify-between items-center text-base-custom text-brand-lightGray pt-3 border-t border-gray-200">
          <div className="flex items-center">
            <Settings className="w-3 h-3 mr-1" />
            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center">
            <Fuel className="w-3 h-3 mr-1" />
            <span>{car.fuelType}</span>
          </div>

          <div className="flex items-center">
            <Gauge className="w-3 h-3 mr-1" />
            <span>{car.mileage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
