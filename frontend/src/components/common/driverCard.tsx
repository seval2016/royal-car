import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

interface Driver {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  experience: string;
}

interface DriverCardProps {
  driver: Driver;
}

const DriverCard = ({ driver }: DriverCardProps) => {
  return (
    <div className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="flex relative overflow-hidden">
        {/* Driver Info */}
        <div className="p-3 sm:p-6">
          {/* Driver Name */}
          <div className="mb-3">
            <h6 className=" text-brand-dark text-base sm:text-lg flex items-center gap-2 mb-2">
              {driver.name} <br></br>
              {driver.surname}
            </h6>
            <p className="text-brand-gray-medium text-base-custom">
              {driver.experience} Years Experience
            </p>
          </div>
          {/* Social Media */}
          <div className="flex items-center gap-2 py-5">
            <a href={driver.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4 text-base-custom text-brand-gray-medium" />
            </a>
            <a href={driver.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4 text-brand-gray-medium" />
            </a>
            <a
              href={driver.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 text-brand-gray-medium" />
            </a>
          </div>
        </div>
        {/* Driver Image */}
        <div className="relative overflow-hidden">
          <img
            src={driver.image}
            alt={driver.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
