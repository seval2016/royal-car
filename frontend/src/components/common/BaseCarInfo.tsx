import React from "react";
import { Settings, Fuel, Gauge } from "lucide-react";
import type { Car } from "@/types/car";

interface BaseCarInfoProps {
  car: Car;
  showYear?: boolean;
  showModelCode?: boolean;
  showEngine?: boolean;
  showMileage?: boolean;
  showTransmission?: boolean;
  showFuelType?: boolean;
  showPrice?: boolean;
  className?: string;
}

const BaseCarInfo: React.FC<BaseCarInfoProps> = ({
  car,
  showYear = true,
  showModelCode = true,
  showEngine = true,
  showMileage = true,
  showTransmission = true,
  showFuelType = true,
  showPrice = true,
  className = ""
}) => {
  return (
    <div className={className}>
      {/* Registered Year */}
      {showYear && (
        <div className="mb-2">
          <a
            href="#"
            className="text-sm sm:text-base text-brand-gray hover:text-brand-yellow transition-colors"
          >
            Registered {car.year}
          </a>
        </div>
      )}

      {/* Manufacturer and Model */}
      <div className="mb-3">
        <p className="font-bold text-brand-dark text-base sm:text-lg flex items-center gap-2">
          {car.model}
          {showModelCode && (
            <span className="text-brand-yellow font-normal">{car.modelCode || car.model}</span>
          )}
        </p>
      </div>

      {/* Price and Engine */}
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        {showPrice && (
          <div className="bg-brand-yellow text-md-custom text-white px-2 sm:px-3 py-1 font-semibold">
            ${car.price} / Day
          </div>
        )}
        {showEngine && (
          <div className="text-base-custom text-brand-lightGray flex items-center">
            <img
              src="/images/cars/meter-icon.png"
              alt="meter"
              className=" mr-1 sm:mr-2"
            />
            {car.engine || `${car.mileage}km`}
          </div>
        )}
      </div>

      {/* Car Details */}
      {(showTransmission || showFuelType || showMileage) && (
        <div className="flex justify-between items-center text-base-custom text-brand-lightGray pt-3 border-t border-gray-200">
          {showTransmission && (
            <div className="flex items-center">
              <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="hidden sm:inline">{car.transmission}</span>
              <span className="sm:hidden">Auto</span>
            </div>
          )}

          {showFuelType && (
            <div className="flex items-center">
              <Fuel className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="hidden sm:inline">{car.fuelType}</span>
              <span className="sm:hidden">Petrol</span>
            </div>
          )}

          {showMileage && (
            <div className="flex items-center">
              <Gauge className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="hidden sm:inline">{car.mileage}km</span>
              <span className="sm:hidden">50K</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BaseCarInfo;
