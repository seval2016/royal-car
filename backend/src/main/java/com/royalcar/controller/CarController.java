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
    
    // ==================== GET ENDPOINTS ====================
    
    @GetMapping
    @Operation(summary = "Get all cars", description = "Retrieve all cars with optional filtering")
    public ResponseEntity<ApiResponse<List<Car>>> getAllCars(
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) String manufacturer,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) String fuelType,
            @RequestParam(required = false) Integer minYear,
            @RequestParam(required = false) Integer maxYear,
            @RequestParam(required = false) Boolean isAvailable) {
        
        List<Car> cars;
        if (manufacturer != null || model != null || minYear != null || maxYear != null || fuelType != null || isAvailable != null) {
            cars = carService.searchCars(manufacturer, model, minYear, maxYear, fuelType, isAvailable);
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
    
    @GetMapping("/search")
    @Operation(summary = "Search cars", description = "Advanced search for cars by various criteria")
    public ResponseEntity<ApiResponse<List<Car>>> searchCars(
            @RequestParam(required = false) String manufacturer,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) Integer minYear,
            @RequestParam(required = false) Integer maxYear,
            @RequestParam(required = false) String fuelType,
            @RequestParam(required = false) Boolean isAvailable,
            @RequestParam(required = false) String brand) {
        
        List<Car> cars = carService.searchCars(manufacturer, model, minYear, maxYear, fuelType, isAvailable);
        return ResponseEntity.ok(ApiResponse.success("Search completed successfully", cars));
    }
    
    @GetMapping("/available")
    @Operation(summary = "Get available cars", description = "Retrieve all available cars")
    public ResponseEntity<ApiResponse<List<Car>>> getAvailableCars() {
        List<Car> cars = carService.getAvailableCars();
        return ResponseEntity.ok(ApiResponse.success("Available cars retrieved successfully", cars));
    }
    
    @GetMapping("/manufacturer/{manufacturer}")
    @Operation(summary = "Get cars by manufacturer", description = "Retrieve cars by specific manufacturer")
    public ResponseEntity<ApiResponse<List<Car>>> getCarsByManufacturer(@PathVariable String manufacturer) {
        List<Car> cars = carService.getCarsByManufacturer(manufacturer);
        return ResponseEntity.ok(ApiResponse.success("Cars by manufacturer retrieved successfully", cars));
    }
    
    @GetMapping("/fuel-type/{fuelType}")
    @Operation(summary = "Get cars by fuel type", description = "Retrieve cars by specific fuel type")
    public ResponseEntity<ApiResponse<List<Car>>> getCarsByFuelType(@PathVariable String fuelType) {
        List<Car> cars = carService.getCarsByFuelType(fuelType);
        return ResponseEntity.ok(ApiResponse.success("Cars by fuel type retrieved successfully", cars));
    }
    
    // ==================== POST ENDPOINTS ====================
    
    @PostMapping
    @Operation(summary = "Create new car", description = "Create a new car entry")
    public ResponseEntity<ApiResponse<Car>> createCar(@Valid @RequestBody CarCreateRequest request) {
        Car car = convertToCar(request);
        Car createdCar = carService.createCar(car);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Car created successfully", createdCar));
    }
    
    // ==================== PUT ENDPOINTS ====================
    
    @PutMapping("/{id}")
    @Operation(summary = "Update car", description = "Update an existing car")
    public ResponseEntity<ApiResponse<Car>> updateCar(@PathVariable Long id, @Valid @RequestBody CarUpdateRequest request) {
        Car existingCar = carService.getCarById(id)
                .orElseThrow(() -> new RuntimeException("Car not found with id: " + id));
        
        // Update only non-null fields
        if (request.getBrand() != null) existingCar.setBrand(request.getBrand());
        if (request.getManufacturer() != null) existingCar.setManufacturer(request.getManufacturer());
        if (request.getModel() != null) existingCar.setModel(request.getModel());
        if (request.getModelCode() != null) existingCar.setModelCode(request.getModelCode());
        if (request.getYear() != null) existingCar.setYear(request.getYear());
        if (request.getPrice() != null) existingCar.setPrice(new BigDecimal(request.getPrice()));
        if (request.getEngine() != null) existingCar.setEngine(request.getEngine());
        if (request.getTransmission() != null) existingCar.setTransmission(request.getTransmission());
        if (request.getFuelType() != null) existingCar.setFuelType(request.getFuelType());
        if (request.getMileage() != null) existingCar.setMileage(request.getMileage());
        if (request.getImage() != null) existingCar.setImage(request.getImage());
        if (request.getDescription() != null) existingCar.setDescription(request.getDescription());
        if (request.getIsAvailable() != null) existingCar.setIsAvailable(request.getIsAvailable());
        
        Car updatedCar = carService.updateCar(id, existingCar);
        return ResponseEntity.ok(ApiResponse.success("Car updated successfully", updatedCar));
    }
    
    @PutMapping("/{id}/availability")
    @Operation(summary = "Update car availability", description = "Update car availability status")
    public ResponseEntity<ApiResponse<Car>> updateCarAvailability(@PathVariable Long id, @RequestParam Boolean isAvailable) {
        carService.updateCarAvailability(id, isAvailable);
        Car updatedCar = carService.getCarById(id)
                .orElseThrow(() -> new RuntimeException("Car not found with id: " + id));
        return ResponseEntity.ok(ApiResponse.success("Car availability updated successfully", updatedCar));
    }
    
    // ==================== DELETE ENDPOINTS ====================
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete car", description = "Delete a car by ID")
    public ResponseEntity<ApiResponse<Void>> deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
        return ResponseEntity.ok(ApiResponse.success("Car deleted successfully", null));
    }
    
    // ==================== STATISTICS ENDPOINTS ====================
    
    @GetMapping("/stats/count")
    @Operation(summary = "Get car count", description = "Get total number of cars")
    public ResponseEntity<ApiResponse<Long>> getTotalCarCount() {
        Long count = carService.getTotalCarCount();
        return ResponseEntity.ok(ApiResponse.success("Total car count retrieved successfully", count));
    }
    
    @GetMapping("/stats/available-count")
    @Operation(summary = "Get available car count", description = "Get number of available cars")
    public ResponseEntity<ApiResponse<Long>> getAvailableCarCount() {
        Long count = carService.getAvailableCarCount();
        return ResponseEntity.ok(ApiResponse.success("Available car count retrieved successfully", count));
    }
    
    @GetMapping("/stats/manufacturers")
    @Operation(summary = "Get all manufacturers", description = "Get list of all car manufacturers")
    public ResponseEntity<ApiResponse<List<String>>> getAllManufacturers() {
        List<String> manufacturers = carService.getAllManufacturers();
        return ResponseEntity.ok(ApiResponse.success("Manufacturers retrieved successfully", manufacturers));
    }
    
    @GetMapping("/stats/fuel-types")
    @Operation(summary = "Get all fuel types", description = "Get list of all fuel types")
    public ResponseEntity<ApiResponse<List<String>>> getAllFuelTypes() {
        List<String> fuelTypes = carService.getAllFuelTypes();
        return ResponseEntity.ok(ApiResponse.success("Fuel types retrieved successfully", fuelTypes));
    }
    
    // ==================== HELPER METHODS ====================
    
    private Car convertToCar(CarCreateRequest request) {
        Car car = new Car();
        car.setBrand(request.getBrand());
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
        car.setIsAvailable(request.getIsAvailable() != null ? request.getIsAvailable() : true);
        return car;
    }
    
    private Car convertToCar(CarUpdateRequest request) {
        Car car = new Car();
        car.setBrand(request.getBrand());
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
    
    // ==================== DTO CLASSES ====================
    
    public static class CarCreateRequest {
        private String brand;
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
        public String getBrand() { return brand; }
        public void setBrand(String brand) { this.brand = brand; }
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
    
    public static class CarUpdateRequest {
        private String brand;
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
        public String getBrand() { return brand; }
        public void setBrand(String brand) { this.brand = brand; }
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