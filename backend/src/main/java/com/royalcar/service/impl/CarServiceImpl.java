package com.royalcar.service.impl;

import com.royalcar.entity.Car;
import com.royalcar.service.CarService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class CarServiceImpl implements CarService {

    // TODO: Repository injection will be added later
    // private final CarRepository carRepository;

    @Override
    public List<Car> getAllCars() {
        log.info("Fetching all cars");
        // TODO: Implementation will be added with repository layer
        return List.of();
    }

    @Override
    public Optional<Car> getCarById(Long id) {
        log.info("Fetching car with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid car ID");
        }
        // TODO: Implementation will be added with repository layer
        return Optional.empty();
    }

    @Override
    public Car createCar(Car car) {
        log.info("Creating new car: {} {}", car.getManufacturer(), car.getModel());
        if (car == null) {
            throw new IllegalArgumentException("Car cannot be null");
        }
        validateCarData(car);
        // TODO: Implementation will be added with repository layer
        return car;
    }

    @Override
    public Car updateCar(Long id, Car car) {
        log.info("Updating car with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid car ID");
        }
        if (car == null) {
            throw new IllegalArgumentException("Car cannot be null");
        }
        Car existingCar = getCarById(id)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        validateCarData(car);
        // TODO: Implementation will be added with repository layer
        return existingCar;
    }

    @Override
    public void deleteCar(Long id) {
        log.info("Deleting car with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid car ID");
        }
        Car car = getCarById(id)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        // TODO: Implementation will be added with repository layer
    }

    @Override
    public List<Car> searchCars(String manufacturer, String model, Integer minYear, 
                                Integer maxYear, String fuelType, Boolean isAvailable) {
        log.info("Searching cars with criteria: manufacturer={}, model={}, year={}-{}, fuelType={}, available={}", 
                manufacturer, model, minYear, maxYear, fuelType, isAvailable);
        
        List<Car> allCars = getAllCars();
        
        return allCars.stream()
                .filter(car -> manufacturer == null || car.getManufacturer().equalsIgnoreCase(manufacturer))
                .filter(car -> model == null || car.getModel().equalsIgnoreCase(model))
                .filter(car -> minYear == null || car.getYear() >= minYear)
                .filter(car -> maxYear == null || car.getYear() <= maxYear)
                .filter(car -> fuelType == null || car.getFuelType().equalsIgnoreCase(fuelType))
                .filter(car -> isAvailable == null || car.getIsAvailable().equals(isAvailable))
                .collect(Collectors.toList());
    }

    @Override
    public List<Car> getCarsByManufacturer(String manufacturer) {
        log.info("Fetching cars by manufacturer: {}", manufacturer);
        if (manufacturer == null || manufacturer.trim().isEmpty()) {
            throw new IllegalArgumentException("Manufacturer cannot be null or empty");
        }
        return getAllCars().stream()
                .filter(car -> car.getManufacturer().equalsIgnoreCase(manufacturer))
                .collect(Collectors.toList());
    }

    @Override
    public List<Car> getCarsByFuelType(String fuelType) {
        log.info("Fetching cars by fuel type: {}", fuelType);
        if (fuelType == null || fuelType.trim().isEmpty()) {
            throw new IllegalArgumentException("Fuel type cannot be null or empty");
        }
        return getAllCars().stream()
                .filter(car -> car.getFuelType().equalsIgnoreCase(fuelType))
                .collect(Collectors.toList());
    }

    @Override
    public List<Car> getAvailableCars() {
        log.info("Fetching available cars");
        return getAllCars().stream()
                .filter(Car::getIsAvailable)
                .collect(Collectors.toList());
    }

    @Override
    public List<Car> getCarsByYearRange(Integer minYear, Integer maxYear) {
        log.info("Fetching cars by year range: {}-{}", minYear, maxYear);
        if (minYear != null && maxYear != null && minYear > maxYear) {
            throw new IllegalArgumentException("Min year cannot be greater than max year");
        }
        return getAllCars().stream()
                .filter(car -> minYear == null || car.getYear() >= minYear)
                .filter(car -> maxYear == null || car.getYear() <= maxYear)
                .collect(Collectors.toList());
    }

    @Override
    public boolean isCarAvailable(Long carId) {
        log.info("Checking availability for car: {}", carId);
        Car car = getCarById(carId)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        return car.getIsAvailable();
    }

    @Override
    public void updateCarAvailability(Long carId, boolean isAvailable) {
        log.info("Updating availability for car {} to: {}", carId, isAvailable);
        Car car = getCarById(carId)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        car.setIsAvailable(isAvailable);
        // TODO: Save to repository
    }

    @Override
    public List<Car> getCarsByPriceRange(String minPrice, String maxPrice) {
        log.info("Fetching cars by price range: {}-{}", minPrice, maxPrice);
        // TODO: Implementation will be added with repository layer
        return List.of();
    }

    @Override
    public long getTotalCarCount() {
        log.info("Getting total car count");
        return getAllCars().size();
    }

    @Override
    public long getAvailableCarCount() {
        log.info("Getting available car count");
        return getAvailableCars().size();
    }

    @Override
    public List<String> getAllManufacturers() {
        log.info("Getting all manufacturers");
        return getAllCars().stream()
                .map(Car::getManufacturer)
                .distinct()
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getAllFuelTypes() {
        log.info("Getting all fuel types");
        return getAllCars().stream()
                .map(Car::getFuelType)
                .distinct()
                .collect(Collectors.toList());
    }

    private void validateCarData(Car car) {
        if (car.getManufacturer() == null || car.getManufacturer().trim().isEmpty()) {
            throw new IllegalArgumentException("Manufacturer cannot be null or empty");
        }
        if (car.getModel() == null || car.getModel().trim().isEmpty()) {
            throw new IllegalArgumentException("Model cannot be null or empty");
        }
        if (car.getYear() == null || car.getYear() < 1900 || car.getYear() > 2030) {
            throw new IllegalArgumentException("Invalid year");
        }
        if (car.getPrice() == null) {
            throw new IllegalArgumentException("Price cannot be null");
        }
    }
}
