package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.Car;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
@Tag(name = "Car Management", description = "Car CRUD operations and search")
public class CarController {

    // TODO: Service injection will be added later
    
    @GetMapping
    @Operation(summary = "Get all cars", description = "Retrieve all available cars with optional filtering")
    public ResponseEntity<ApiResponse<List<Car>>> getAllCars(
            @RequestParam(required = false) String manufacturer,
            @RequestParam(required = false) String fuelType,
            @RequestParam(required = false) Boolean isAvailable) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Cars retrieved successfully", null));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get car by ID", description = "Retrieve a specific car by its ID")
    public ResponseEntity<ApiResponse<Car>> getCarById(@PathVariable Long id) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Car retrieved successfully", null));
    }
    
    @PostMapping
    @Operation(summary = "Create new car", description = "Create a new car entry")
    public ResponseEntity<ApiResponse<Car>> createCar(@Valid @RequestBody CarCreateRequest request) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Car created successfully", null));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update car", description = "Update an existing car")
    public ResponseEntity<ApiResponse<Car>> updateCar(@PathVariable Long id, @Valid @RequestBody CarUpdateRequest request) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Car updated successfully", null));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete car", description = "Delete a car by ID")
    public ResponseEntity<ApiResponse<Void>> deleteCar(@PathVariable Long id) {
        // TODO: Implementation will be added with service layer
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
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Search completed successfully", null));
    }
    
    // TODO: DTO classes will be created later
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
        
        // Getters and setters will be added
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
        
        // Getters and setters will be added
    }
}
