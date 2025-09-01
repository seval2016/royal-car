import React from "react";
import type { Car } from "@/types/car";
import BaseCarInfo from "./BaseCarInfo";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group p-2">
      {/* Car Image */}
      <div className="h-28 sm:h-32 bg-gray-200 relative overflow-hidden">
        <img
          src={car.image || `/images/cars/best-01.jpg`}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Car Info */}
      <div className="p-3 sm:p-4">
        <BaseCarInfo car={car} />
      </div>
    </div>
  );
};

export default CarCard;
