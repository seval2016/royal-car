package com.royalcar.car.service;

import com.royalcar.car.dto.CarDto;
import com.royalcar.car.entity.Car;
import com.royalcar.car.mapper.CarMapper;
import com.royalcar.car.repository.CarRepository;
import com.royalcar.common.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class CarService {
    
    private final CarRepository carRepository;
    private final CarMapper carMapper;
    
    public Page<CarDto> getAllCars(Pageable pageable) {
        log.info("Fetching all cars with pagination: {}", pageable);
        Page<Car> cars = carRepository.findAll(pageable);
        return cars.map(carMapper::toDto);
    }
    
    public CarDto getCarById(Long id) {
        log.info("Fetching car with id: {}", id);
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Car", "id", id));
        return carMapper.toDto(car);
    }
    
    public CarDto createCar(CarDto carDto) {
        log.info("Creating new car: {}", carDto);
        Car car = carMapper.toEntity(carDto);
        Car savedCar = carRepository.save(car);
        return carMapper.toDto(savedCar);
    }
    
    public CarDto updateCar(Long id, CarDto carDto) {
        log.info("Updating car with id: {}", id);
        Car existingCar = carRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Car", "id", id));
        
        carMapper.updateEntity(existingCar, carDto);
        Car updatedCar = carRepository.save(existingCar);
        return carMapper.toDto(updatedCar);
    }
    
    public void deleteCar(Long id) {
        log.info("Deleting car with id: {}", id);
        if (!carRepository.existsById(id)) {
            throw new ResourceNotFoundException("Car", "id", id);
        }
        carRepository.deleteById(id);
    }
    
    public Page<CarDto> searchCarsByBrand(String brand, Pageable pageable) {
        log.info("Searching cars by brand: {}", brand);
        Page<Car> cars = carRepository.findByBrandContainingIgnoreCase(brand, pageable);
        return cars.map(carMapper::toDto);
    }
    
    public Page<CarDto> searchCarsByModel(String model, Pageable pageable) {
        log.info("Searching cars by model: {}", model);
        Page<Car> cars = carRepository.findByModelContainingIgnoreCase(model, pageable);
        return cars.map(carMapper::toDto);
    }
    
    public Page<CarDto> getCarsByYear(Integer year, Pageable pageable) {
        log.info("Fetching cars by year: {}", year);
        Page<Car> cars = carRepository.findByYear(year, pageable);
        return cars.map(carMapper::toDto);
    }
    
    public Page<CarDto> getCarsByFuelType(String fuelType, Pageable pageable) {
        log.info("Fetching cars by fuel type: {}", fuelType);
        Page<Car> cars = carRepository.findByFuelType(fuelType, pageable);
        return cars.map(carMapper::toDto);
    }
    
    public Page<CarDto> getCarsByTransmission(String transmission, Pageable pageable) {
        log.info("Fetching cars by transmission: {}", transmission);
        Page<Car> cars = carRepository.findByTransmission(transmission, pageable);
        return cars.map(carMapper::toDto);
    }
    
    public Page<CarDto> getAvailableCars(Pageable pageable) {
        log.info("Fetching available cars");
        Page<Car> cars = carRepository.findByIsAvailable(true, pageable);
        return cars.map(carMapper::toDto);
    }
    
    public Page<CarDto> getCarsByPriceRange(BigDecimal minPrice, BigDecimal maxPrice, Pageable pageable) {
        log.info("Fetching cars by price range: {} - {}", minPrice, maxPrice);
        Page<Car> cars = carRepository.findByPriceBetween(minPrice, maxPrice, pageable);
        return cars.map(carMapper::toDto);
    }
    
    public Page<CarDto> getCarsByMaxMileage(Integer maxMileage, Pageable pageable) {
        log.info("Fetching cars by max mileage: {}", maxMileage);
        Page<Car> cars = carRepository.findByMileageLessThanEqual(maxMileage, pageable);
        return cars.map(carMapper::toDto);
    }
    
    public List<String> getAllBrands() {
        log.info("Fetching all car brands");
        return carRepository.findAllBrands();
    }
    
    public List<String> getAllFuelTypes() {
        log.info("Fetching all fuel types");
        return carRepository.findAllFuelTypes();
    }
    
    public List<String> getAllTransmissions() {
        log.info("Fetching all transmission types");
        return carRepository.findAllTransmissions();
    }
}
