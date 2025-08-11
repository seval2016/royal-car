package com.royalcar.car.controller;

import com.royalcar.car.dto.CarDto;
import com.royalcar.car.service.CarService;
import com.royalcar.common.dto.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/cars")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Tag(name = "Car Management", description = "Araç yönetimi API endpoint'leri")
public class CarController {
    
    private final CarService carService;
    
    @GetMapping
    public ResponseEntity<ApiResponse<Page<CarDto>>> getAllCars(
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars - Fetching all cars with pagination");
        Page<CarDto> cars = carService.getAllCars(pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<CarDto>> getCarById(@PathVariable Long id) {
        log.info("GET /cars/{} - Fetching car by id", id);
        CarDto car = carService.getCarById(id);
        return ResponseEntity.ok(ApiResponse.success(car));
    }
    
    @PostMapping
    public ResponseEntity<ApiResponse<CarDto>> createCar(@Valid @RequestBody CarDto carDto) {
        log.info("POST /cars - Creating new car");
        CarDto createdCar = carService.createCar(carDto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Car created successfully", createdCar));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<CarDto>> updateCar(
            @PathVariable Long id, 
            @Valid @RequestBody CarDto carDto) {
        log.info("PUT /cars/{} - Updating car", id);
        CarDto updatedCar = carService.updateCar(id, carDto);
        return ResponseEntity.ok(ApiResponse.success("Car updated successfully", updatedCar));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteCar(@PathVariable Long id) {
        log.info("DELETE /cars/{} - Deleting car", id);
        carService.deleteCar(id);
        return ResponseEntity.ok(ApiResponse.success("Car deleted successfully", null));
    }
    
    @GetMapping("/search/brand")
    public ResponseEntity<ApiResponse<Page<CarDto>>> searchCarsByBrand(
            @RequestParam String brand,
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars/search/brand?brand={} - Searching cars by brand", brand);
        Page<CarDto> cars = carService.searchCarsByBrand(brand, pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/search/model")
    public ResponseEntity<ApiResponse<Page<CarDto>>> searchCarsByModel(
            @RequestParam String model,
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars/search/model?model={} - Searching cars by model", model);
        Page<CarDto> cars = carService.searchCarsByModel(model, pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/filter/year/{year}")
    public ResponseEntity<ApiResponse<Page<CarDto>>> getCarsByYear(
            @PathVariable Integer year,
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars/filter/year/{} - Filtering cars by year", year);
        Page<CarDto> cars = carService.getCarsByYear(year, pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/filter/fuel-type/{fuelType}")
    public ResponseEntity<ApiResponse<Page<CarDto>>> getCarsByFuelType(
            @PathVariable String fuelType,
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars/filter/fuel-type/{} - Filtering cars by fuel type", fuelType);
        Page<CarDto> cars = carService.getCarsByFuelType(fuelType, pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/filter/transmission/{transmission}")
    public ResponseEntity<ApiResponse<Page<CarDto>>> getCarsByTransmission(
            @PathVariable String transmission,
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars/filter/transmission/{} - Filtering cars by transmission", transmission);
        Page<CarDto> cars = carService.getCarsByTransmission(transmission, pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/available")
    public ResponseEntity<ApiResponse<Page<CarDto>>> getAvailableCars(
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars/available - Fetching available cars");
        Page<CarDto> cars = carService.getAvailableCars(pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/filter/price-range")
    public ResponseEntity<ApiResponse<Page<CarDto>>> getCarsByPriceRange(
            @RequestParam BigDecimal minPrice,
            @RequestParam BigDecimal maxPrice,
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars/filter/price-range?minPrice={}&maxPrice={} - Filtering cars by price range", 
                minPrice, maxPrice);
        Page<CarDto> cars = carService.getCarsByPriceRange(minPrice, maxPrice, pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/filter/max-mileage/{maxMileage}")
    public ResponseEntity<ApiResponse<Page<CarDto>>> getCarsByMaxMileage(
            @PathVariable Integer maxMileage,
            @PageableDefault(size = 10, sort = "id") Pageable pageable) {
        log.info("GET /cars/filter/max-mileage/{} - Filtering cars by max mileage", maxMileage);
        Page<CarDto> cars = carService.getCarsByMaxMileage(maxMileage, pageable);
        return ResponseEntity.ok(ApiResponse.success(cars));
    }
    
    @GetMapping("/brands")
    public ResponseEntity<ApiResponse<List<String>>> getAllBrands() {
        log.info("GET /cars/brands - Fetching all car brands");
        List<String> brands = carService.getAllBrands();
        return ResponseEntity.ok(ApiResponse.success(brands));
    }
    
    @GetMapping("/fuel-types")
    public ResponseEntity<ApiResponse<List<String>>> getAllFuelTypes() {
        log.info("GET /cars/fuel-types - Fetching all fuel types");
        List<String> fuelTypes = carService.getAllFuelTypes();
        return ResponseEntity.ok(ApiResponse.success(fuelTypes));
    }
    
    @GetMapping("/transmissions")
    public ResponseEntity<ApiResponse<List<String>>> getAllTransmissions() {
        log.info("GET /cars/transmissions - Fetching all transmission types");
        List<String> transmissions = carService.getAllTransmissions();
        return ResponseEntity.ok(ApiResponse.success(transmissions));
    }
}
