package com.royalcar.service;

import com.royalcar.entity.Car;

import java.util.List;
import java.util.Optional;

public interface CarService {
    
    // Basic CRUD operations
    List<Car> getAllCars();
    Optional<Car> getCarById(Long id);
    Car createCar(Car car);
    Car updateCar(Long id, Car car);
    void deleteCar(Long id);
    
    // Search and filtering
    List<Car> searchCars(String manufacturer, String model, Integer minYear, 
                         Integer maxYear, String fuelType, Boolean isAvailable);
    List<Car> getCarsByManufacturer(String manufacturer);
    List<Car> getCarsByFuelType(String fuelType);
    List<Car> getAvailableCars();
    List<Car> getCarsByYearRange(Integer minYear, Integer maxYear);
    
    // Business logic
    boolean isCarAvailable(Long carId);
    void updateCarAvailability(Long carId, boolean isAvailable);
    List<Car> getCarsByPriceRange(String minPrice, String maxPrice);
    
    // Statistics
    long getTotalCarCount();
    long getAvailableCarCount();
    List<String> getAllManufacturers();
    List<String> getAllFuelTypes();
}
