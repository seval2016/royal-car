package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.Driver;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drivers")
@RequiredArgsConstructor
@Tag(name = "Driver Management", description = "Driver CRUD operations and availability")
public class DriverController {

    // TODO: Service injection will be added later
    
    @GetMapping
    @Operation(summary = "Get all drivers", description = "Retrieve all available drivers")
    public ResponseEntity<ApiResponse<List<Driver>>> getAllDrivers(
            @RequestParam(required = false) Boolean isActive) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Drivers retrieved successfully", null));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get driver by ID", description = "Retrieve a specific driver by ID")
    public ResponseEntity<ApiResponse<Driver>> getDriverById(@PathVariable Long id) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Driver retrieved successfully", null));
    }
    
    @PostMapping
    @Operation(summary = "Create new driver", description = "Create a new driver entry")
    public ResponseEntity<ApiResponse<Driver>> createDriver(@Valid @RequestBody DriverCreateRequest request) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Driver created successfully", null));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update driver", description = "Update an existing driver")
    public ResponseEntity<ApiResponse<Driver>> updateDriver(@PathVariable Long id, @Valid @RequestBody DriverUpdateRequest request) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Driver updated successfully", null));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete driver", description = "Delete a driver by ID")
    public ResponseEntity<ApiResponse<Void>> deleteDriver(@PathVariable Long id) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Driver deleted successfully", null));
    }
    
    @GetMapping("/available")
    @Operation(summary = "Get available drivers", description = "Get all available drivers for booking")
    public ResponseEntity<ApiResponse<List<Driver>>> getAvailableDrivers() {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Available drivers retrieved successfully", null));
    }
    
    // TODO: DTO classes will be created later
    public static class DriverCreateRequest {
        private String name;
        private String surname;
        private String email;
        private String image;
        private String experience;
        private String facebook;
        private String twitter;
        private String instagram;
        private String linkedin;
        
        // Getters and setters will be added
    }
    
    public static class DriverUpdateRequest {
        private String name;
        private String surname;
        private String email;
        private String image;
        private String experience;
        private String facebook;
        private String twitter;
        private String instagram;
        private String linkedin;
        private Boolean isActive;
        
        // Getters and setters will be added
    }
}
