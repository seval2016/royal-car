package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.Car;
import com.royalcar.service.CarService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
@Tag(name = "Car Management", description = "Car CRUD operations and search")
public class CarController {

    private final CarService carService;
    
    @GetMapping
    @Operation(summary = "Get all cars", description = "Retrieve all available cars with optional filtering")
    public ResponseEntity<ApiResponse<List<Car>>> getAllCars(
            @RequestParam(required = false) String manufacturer,
            @RequestParam(required = false) String fuelType,
            @RequestParam(required = false) Boolean isAvailable) {
        
        List<Car> cars;
        if (manufacturer != null || fuelType != null || isAvailable != null) {
            cars = carService.searchCars(manufacturer, null, null, null, fuelType, isAvailable);
        } else {
            cars = carService.getAllCars();
        }
        
        return ResponseEntity.ok(ApiResponse.success("Cars retrieved successfully", cars));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get car by ID", description = "Retrieve a specific car by its ID")
    public ResponseEntity<ApiResponse<Car>> getCarById(@PathVariable Long id) {
        Car car = carService.getCarById(id)
                .orElseThrow(() -> new RuntimeException("Car not found with id: " + id));
        return ResponseEntity.ok(ApiResponse.success("Car retrieved successfully", car));
    }
    
    @PostMapping
    @Operation(summary = "Create new car", description = "Create a new car entry")
    public ResponseEntity<ApiResponse<Car>> createCar(@Valid @RequestBody CarCreateRequest request) {
        Car car = convertToCar(request);
        Car createdCar = carService.createCar(car);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Car created successfully", createdCar));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update car", description = "Update an existing car")
    public ResponseEntity<ApiResponse<Car>> updateCar(@PathVariable Long id, @Valid @RequestBody CarUpdateRequest request) {
        Car car = convertToCar(request);
        Car updatedCar = carService.updateCar(id, car);
        return ResponseEntity.ok(ApiResponse.success("Car updated successfully", updatedCar));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete car", description = "Delete a car by ID")
    public ResponseEntity<ApiResponse<Void>> deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
        return ResponseEntity.ok(ApiResponse.success("Car deleted successfully", null));
    }
    
    @GetMapping("/search")
    @Operation(summary = "Search cars", description = "Search cars by various criteria")
    public ResponseEntity<ApiResponse<List<Car>>> searchCars(
            @RequestParam(required = false) String manufacturer,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) Integer minYear,
            @RequestParam(required = false) Integer maxYear,
            @RequestParam(required = false) String fuelType,
            @RequestParam(required = false) Boolean isAvailable) {
        
        List<Car> cars = carService.searchCars(manufacturer, model, minYear, maxYear, fuelType, isAvailable);
        return ResponseEntity.ok(ApiResponse.success("Search completed successfully", cars));
    }
    
    // Helper method to convert DTO to Entity
    private Car convertToCar(CarCreateRequest request) {
        Car car = new Car();
        car.setManufacturer(request.getManufacturer());
        car.setModel(request.getModel());
        car.setModelCode(request.getModelCode());
        car.setYear(request.getYear());
        car.setPrice(new BigDecimal(request.getPrice()));
        car.setEngine(request.getEngine());
        car.setTransmission(request.getTransmission());
        car.setFuelType(request.getFuelType());
        car.setMileage(request.getMileage());
        car.setImage(request.getImage());
        car.setDescription(request.getDescription());
        car.setIsAvailable(true); // Default to available
        return car;
    }
    
    private Car convertToCar(CarUpdateRequest request) {
        Car car = new Car();
        car.setManufacturer(request.getManufacturer());
        car.setModel(request.getModel());
        car.setModelCode(request.getModelCode());
        car.setYear(request.getYear());
        car.setPrice(new BigDecimal(request.getPrice()));
        car.setEngine(request.getEngine());
        car.setTransmission(request.getTransmission());
        car.setFuelType(request.getFuelType());
        car.setMileage(request.getMileage());
        car.setImage(request.getImage());
        car.setDescription(request.getDescription());
        car.setIsAvailable(request.getIsAvailable());
        return car;
    }
    
    // DTO classes
    public static class CarCreateRequest {
        private String manufacturer;
        private String model;
        private String modelCode;
        private Integer year;
        private String price;
        private String engine;
        private String transmission;
        private String fuelType;
        private String mileage;
        private String image;
        private String description;
        
        // Getters and setters
        public String getManufacturer() { return manufacturer; }
        public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }
        public String getModel() { return model; }
        public void setModel(String model) { this.model = model; }
        public String getModelCode() { return modelCode; }
        public void setModelCode(String modelCode) { this.modelCode = modelCode; }
        public Integer getYear() { return year; }
        public void setYear(Integer year) { this.year = year; }
        public String getPrice() { return price; }
        public void setPrice(String price) { this.price = price; }
        public String getEngine() { return engine; }
        public void setEngine(String engine) { this.engine = engine; }
        public String getTransmission() { return transmission; }
        public void setTransmission(String transmission) { this.transmission = transmission; }
        public String getFuelType() { return fuelType; }
        public void setFuelType(String fuelType) { this.fuelType = fuelType; }
        public String getMileage() { return mileage; }
        public void setMileage(String mileage) { this.mileage = mileage; }
        public String getImage() { return image; }
        public void setImage(String image) { this.image = image; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
    }
    
    public static class CarUpdateRequest {
        private String manufacturer;
        private String model;
        private String modelCode;
        private Integer year;
        private String price;
        private String engine;
        private String transmission;
        private String fuelType;
        private String mileage;
        private String image;
        private String description;
        private Boolean isAvailable;
        
        // Getters and setters
        public String getManufacturer() { return manufacturer; }
        public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }
        public String getModel() { return model; }
        public void setModel(String model) { this.model = model; }
        public String getModelCode() { return modelCode; }
        public void setModelCode(String modelCode) { this.modelCode = modelCode; }
        public Integer getYear() { return year; }
        public void setYear(Integer year) { this.year = year; }
        public String getPrice() { return price; }
        public void setPrice(String price) { this.price = price; }
        public String getEngine() { return engine; }
        public void setEngine(String engine) { this.engine = engine; }
        public String getTransmission() { return transmission; }
        public void setTransmission(String transmission) { this.transmission = transmission; }
        public String getFuelType() { return fuelType; }
        public void setFuelType(String fuelType) { this.fuelType = fuelType; }
        public String getMileage() { return mileage; }
        public void setMileage(String mileage) { this.mileage = mileage; }
        public String getImage() { return image; }
        public void setImage(String image) { this.image = image; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
        public Boolean getIsAvailable() { return isAvailable; }
        public void setIsAvailable(Boolean isAvailable) { this.isAvailable = isAvailable; }
    }
}
