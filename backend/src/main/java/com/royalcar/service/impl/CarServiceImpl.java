package com.royalcar.service.impl;

import com.royalcar.entity.Car;
import com.royalcar.repository.CarRepository;
import com.royalcar.service.CarService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    @Override
    public List<Car> getAllCars() {
        log.info("Fetching all cars");
        return carRepository.findAll();
    }

    @Override
    public Optional<Car> getCarById(Long id) {
        log.info("Fetching car with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid car ID");
        }
        return carRepository.findById(id);
    }

    @Override
    public Car createCar(Car car) {
        log.info("Creating new car: {} {}", car.getManufacturer(), car.getModel());
        if (car == null) {
            throw new IllegalArgumentException("Car cannot be null");
        }
        validateCarData(car);
        return carRepository.save(car);
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
        
        // Update fields
        existingCar.setManufacturer(car.getManufacturer());
        existingCar.setModel(car.getModel());
        existingCar.setModelCode(car.getModelCode());
        existingCar.setYear(car.getYear());
        existingCar.setPrice(car.getPrice());
        existingCar.setEngine(car.getEngine());
        existingCar.setTransmission(car.getTransmission());
        existingCar.setFuelType(car.getFuelType());
        existingCar.setMileage(car.getMileage());
        existingCar.setImage(car.getImage());
        existingCar.setDescription(car.getDescription());
        existingCar.setIsAvailable(car.getIsAvailable());
        
        return carRepository.save(existingCar);
    }

    @Override
    public void deleteCar(Long id) {
        log.info("Deleting car with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid car ID");
        }
        Car car = getCarById(id)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        carRepository.delete(car);
    }

    @Override
    public List<Car> searchCars(String manufacturer, String model, Integer minYear, 
                                Integer maxYear, String fuelType, Boolean isAvailable) {
        log.info("Searching cars with criteria: manufacturer={}, model={}, year={}-{}, fuelType={}, available={}", 
                manufacturer, model, minYear, maxYear, fuelType, isAvailable);
        
        return carRepository.findCarsByCriteria(manufacturer, model, minYear, maxYear, fuelType, isAvailable);
    }

    @Override
    public List<Car> getCarsByManufacturer(String manufacturer) {
        log.info("Fetching cars by manufacturer: {}", manufacturer);
        if (manufacturer == null || manufacturer.trim().isEmpty()) {
            throw new IllegalArgumentException("Manufacturer cannot be null or empty");
        }
        return carRepository.findByManufacturerIgnoreCase(manufacturer);
    }

    @Override
    public List<Car> getCarsByFuelType(String fuelType) {
        log.info("Fetching cars by fuel type: {}", fuelType);
        if (fuelType == null || fuelType.trim().isEmpty()) {
            throw new IllegalArgumentException("Fuel type cannot be null or empty");
        }
        return carRepository.findByFuelTypeIgnoreCase(fuelType);
    }

    @Override
    public List<Car> getAvailableCars() {
        log.info("Fetching available cars");
        return carRepository.findByIsAvailableTrue();
    }

    @Override
    public List<Car> getCarsByYearRange(Integer minYear, Integer maxYear) {
        log.info("Fetching cars by year range: {}-{}", minYear, maxYear);
        if (minYear != null && maxYear != null && minYear > maxYear) {
            throw new IllegalArgumentException("Min year cannot be greater than max year");
        }
        if (minYear != null && maxYear != null) {
            return carRepository.findByYearBetween(minYear, maxYear);
        } else if (minYear != null) {
            return carRepository.findByYearGreaterThanEqual(minYear);
        } else if (maxYear != null) {
            return carRepository.findByYearLessThanEqual(maxYear);
        }
        return getAllCars();
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
        carRepository.save(car);
    }

    @Override
    public List<Car> getCarsByPriceRange(String minPrice, String maxPrice) {
        log.info("Fetching cars by price range: {}-{}", minPrice, maxPrice);
        if (minPrice == null && maxPrice == null) {
            return getAllCars();
        }
        
        BigDecimal min = minPrice != null ? new BigDecimal(minPrice) : null;
        BigDecimal max = maxPrice != null ? new BigDecimal(maxPrice) : null;
        
        if (min != null && max != null) {
            return carRepository.findByPriceBetween(min, max);
        } else if (min != null) {
            return carRepository.findByPriceGreaterThanEqual(min);
        } else if (max != null) {
            return carRepository.findByPriceLessThanEqual(max);
        }
        
        return List.of();
    }

    @Override
    public long getTotalCarCount() {
        log.info("Getting total car count");
        return carRepository.count();
    }

    @Override
    public long getAvailableCarCount() {
        log.info("Getting available car count");
        return carRepository.countByIsAvailableTrue();
    }

    @Override
    public List<String> getAllManufacturers() {
        log.info("Getting all manufacturers");
        return carRepository.findAllManufacturers();
    }

    @Override
    public List<String> getAllFuelTypes() {
        log.info("Getting all fuel types");
        return carRepository.findAllFuelTypes();
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
