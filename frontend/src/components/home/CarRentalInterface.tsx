import { useState } from "react";
import { Car, Settings, Fuel, Gauge } from "lucide-react";
import Title from "../common/Title";
import FAQ from "./FAQ";

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

const VehicleFilterModule = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState("Honda");

  const manufacturers = [
    "Honda",
    "Mercedes Benz",
    "Toyota",
    "Volkswagen",
    "Audi",
    "Ferrari",
  ];

  const cars: Car[] = [
    {
      id: "1",
      manufacturer: "Honda",
      model: "Civic",
      modelCode: "H5",
      year: "2016",
      price: 45,
      engine: "1.8K CC",
      transmission: "Manual",
      fuelType: "Petrol",
      mileage: "30K KM",
      image: "/images/cars/honda-civic.jpg",
    },
    {
      id: "2",
      manufacturer: "Honda",
      model: "Accord",
      modelCode: "A7",
      year: "2017",
      price: 55,
      engine: "2.0K CC",
      transmission: "Automatic",
      fuelType: "Petrol",
      mileage: "25K KM",
      image: "/images/cars/honda-accord.jpg",
    },
    {
      id: "3",
      manufacturer: "Mercedes Benz",
      model: "C-Class",
      modelCode: "R3",
      year: "2016",
      price: 80,
      engine: "2.3K CC",
      transmission: "Manual",
      fuelType: "Petrol",
      mileage: "25K KM",
      image: "/images/cars/mercedes-c-class.jpg",
    },
    {
      id: "4",
      manufacturer: "Mercedes Benz",
      model: "E-Class",
      modelCode: "E5",
      year: "2018",
      price: 95,
      engine: "2.5K CC",
      transmission: "Automatic",
      fuelType: "Diesel",
      mileage: "20K KM",
      image: "/images/cars/mercedes-e-class.jpg",
    },
    {
      id: "5",
      manufacturer: "Toyota",
      model: "Camry",
      modelCode: "C8",
      year: "2017",
      price: 50,
      engine: "2.0K CC",
      transmission: "Automatic",
      fuelType: "Petrol",
      mileage: "28K KM",
      image: "/images/cars/toyota-camry.jpg",
    },
    {
      id: "6",
      manufacturer: "Toyota",
      model: "Corolla",
      modelCode: "R9",
      year: "2016",
      price: 40,
      engine: "1.6K CC",
      transmission: "Manual",
      fuelType: "Petrol",
      mileage: "35K KM",
      image: "/images/cars/toyota-corolla.jpg",
    },
    {
      id: "7",
      manufacturer: "Volkswagen",
      model: "Golf",
      modelCode: "G7",
      year: "2017",
      price: 45,
      engine: "1.8K CC",
      transmission: "Manual",
      fuelType: "Petrol",
      mileage: "32K KM",
      image: "/images/cars/vw-golf.jpg",
    },
    {
      id: "8",
      manufacturer: "Audi",
      model: "A4",
      modelCode: "A4",
      year: "2018",
      price: 75,
      engine: "2.0K CC",
      transmission: "Automatic",
      fuelType: "Petrol",
      mileage: "22K KM",
      image: "/images/cars/audi-a4.jpg",
    },
    {
      id: "9",
      manufacturer: "Ferrari",
      model: "488",
      modelCode: "F8",
      year: "2019",
      price: 250,
      engine: "3.9K CC",
      transmission: "Automatic",
      fuelType: "Petrol",
      mileage: "15K KM",
      image: "/images/cars/ferrari-488.jpg",
    },
  ];

  const filteredCars = cars.filter(
    (car) => car.manufacturer === selectedManufacturer
  );

  return (
    <div className="flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg min-h-screen">
        <div className="p-6">
          <Title
            title="All Manufacturer"
            titleClassName="text-2xl font-bold text-gray-800 mb-6"
            align="left"
          />

          <div className="space-y-2">
            {manufacturers.map((manufacturer) => (
              <button
                key={manufacturer}
                onClick={() => setSelectedManufacturer(manufacturer)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-semibold ${
                  selectedManufacturer === manufacturer
                    ? "bg-white text-gray-800 border-l-4 border-orange-500 shadow-sm"
                    : "bg-brand-yellow text-white hover:bg-yellow-500"
                }`}
              >
                {manufacturer}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <Title
            title={`${selectedManufacturer} Vehicles`}
            subtitle={`Available cars from ${selectedManufacturer}`}
            titleClassName="text-3xl font-bold text-gray-800 mb-2"
            subtitleClassName="text-gray-600"
            align="left"
          />
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
  );
};

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Car Image */}
      <div className="h-48 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Car className="w-16 h-16 text-gray-400" />
        </div>
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs text-gray-600">
          Registered {car.year}
        </div>
      </div>

      {/* Car Info */}
      <div className="p-4">
        {/* Manufacturer and Model */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-800">
            {car.manufacturer}
          </h3>
          <p className="text-brand-yellow font-semibold">
            {car.model} {car.modelCode}
          </p>
        </div>

        {/* Price and Engine */}
        <div className="flex justify-between items-center mb-4">
          <div className="bg-brand-yellow text-white px-3 py-1 rounded-lg font-semibold">
            ${car.price}/Day
          </div>
          <div className="text-gray-600 font-medium">{car.engine}</div>
        </div>

        {/* Car Details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Settings className="w-4 h-4 mr-2 text-gray-400" />
            <span className="font-medium">Transmission:</span>
            <span className="ml-1">{car.transmission}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Fuel className="w-4 h-4 mr-2 text-gray-400" />
            <span className="font-medium">Fuel:</span>
            <span className="ml-1">{car.fuelType}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Gauge className="w-4 h-4 mr-2 text-gray-400" />
            <span className="font-medium">Mileage:</span>
            <span className="ml-1">{car.mileage}</span>
          </div>
        </div>

        {/* Rent Button */}
        <button className="w-full mt-4 bg-brand-yellow text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default VehicleFilterModule;
