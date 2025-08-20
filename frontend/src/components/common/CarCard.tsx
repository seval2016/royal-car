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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group p-2">
      {/* Car Image */}
      <div className="h-28 sm:h-32 bg-gray-200 relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.manufacturer} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Car Info */}
      <div className="p-3 sm:p-4">
        {/* Registered Year */}
        <div className="mb-2">
          <a
            href="#"
            className="text-sm sm:text-base text-brand-gray hover:text-brand-yellow transition-colors"
          >
            Registered {car.year}
          </a>
        </div>

        {/* Manufacturer and Model */}
        <div className="mb-3">
          <p className="font-bold text-brand-dark text-base sm:text-lg flex items-center gap-2">
            {car.model}
            <span className="text-brand-yellow font-normal">{car.modelCode}</span>
          </p>
        </div>

        {/* Price and Engine */}
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <div className="bg-brand-yellow text-md-custom text-white px-2 sm:px-3 py-1 font-semibold">
            ${car.price} / Day
          </div>
          <div className="text-base-custom text-brand-lightGray flex items-center">
            <img
              src="/images/cars/meter-icon.png"
              alt="meter"
              className=" mr-1 sm:mr-2"
            />
            {car.engine}
          </div>
        </div>

        {/* Car Details */}
        <div className="flex justify-between items-center text-base-custom text-brand-lightGray pt-3 border-t border-gray-200">
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
        </div>
      </div>
    </div>
  );
};

export default CarCard;
