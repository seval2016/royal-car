package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.Driver;
import com.royalcar.service.DriverService;
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

    private final DriverService driverService;
    
    @GetMapping
    @Operation(summary = "Get all drivers", description = "Retrieve all available drivers")
    public ResponseEntity<ApiResponse<List<Driver>>> getAllDrivers(
            @RequestParam(required = false) Boolean isActive) {
        List<Driver> drivers = isActive != null ? 
                (isActive ? driverService.getAvailableDrivers() : driverService.getAllDrivers()) :
                driverService.getAllDrivers();
        return ResponseEntity.ok(ApiResponse.success("Drivers retrieved successfully", drivers));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get driver by ID", description = "Retrieve a specific driver by ID")
    public ResponseEntity<ApiResponse<Driver>> getDriverById(@PathVariable Long id) {
        Driver driver = driverService.getDriverById(id)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        return ResponseEntity.ok(ApiResponse.success("Driver retrieved successfully", driver));
    }
    
    @PostMapping
    @Operation(summary = "Create new driver", description = "Create a new driver entry")
    public ResponseEntity<ApiResponse<Driver>> createDriver(@Valid @RequestBody DriverCreateRequest request) {
        Driver driver = convertToDriver(request);
        Driver createdDriver = driverService.createDriver(driver);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Driver created successfully", createdDriver));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update driver", description = "Update an existing driver")
    public ResponseEntity<ApiResponse<Driver>> updateDriver(@PathVariable Long id, @Valid @RequestBody DriverUpdateRequest request) {
        Driver driver = convertToDriver(request);
        Driver updatedDriver = driverService.updateDriver(id, driver);
        return ResponseEntity.ok(ApiResponse.success("Driver updated successfully", updatedDriver));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete driver", description = "Delete a driver by ID")
    public ResponseEntity<ApiResponse<Void>> deleteDriver(@PathVariable Long id) {
        driverService.deleteDriver(id);
        return ResponseEntity.ok(ApiResponse.success("Driver deleted successfully", null));
    }
    
    @GetMapping("/available")
    @Operation(summary = "Get available drivers", description = "Get all available drivers for booking")
    public ResponseEntity<ApiResponse<List<Driver>>> getAvailableDrivers() {
        List<Driver> drivers = driverService.getAvailableDrivers();
        return ResponseEntity.ok(ApiResponse.success("Available drivers retrieved successfully", drivers));
    }
    
    private Driver convertToDriver(DriverCreateRequest request) {
        Driver driver = new Driver();
        driver.setName(request.getName());
        driver.setSurname(request.getSurname());
        driver.setEmail(request.getEmail());
        driver.setImage(request.getImage());
        driver.setExperience(request.getExperience());
        driver.setFacebook(request.getFacebook());
        driver.setTwitter(request.getTwitter());
        driver.setInstagram(request.getInstagram());
        driver.setLinkedin(request.getLinkedin());
        return driver;
    }
    
    private Driver convertToDriver(DriverUpdateRequest request) {
        Driver driver = new Driver();
        driver.setName(request.getName());
        driver.setSurname(request.getSurname());
        driver.setEmail(request.getEmail());
        driver.setImage(request.getImage());
        driver.setExperience(request.getExperience());
        driver.setFacebook(request.getFacebook());
        driver.setTwitter(request.getTwitter());
        driver.setInstagram(request.getInstagram());
        driver.setLinkedin(request.getLinkedin());
        driver.setIsActive(request.getIsActive());
        return driver;
    }
    
    // DTO classes
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
        
        // Getters and setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getSurname() { return surname; }
        public void setSurname(String surname) { this.surname = surname; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getImage() { return image; }
        public void setImage(String image) { this.image = image; }
        public String getExperience() { return experience; }
        public void setExperience(String experience) { this.experience = experience; }
        public String getFacebook() { return facebook; }
        public void setFacebook(String facebook) { this.facebook = facebook; }
        public String getTwitter() { return twitter; }
        public void setTwitter(String twitter) { this.twitter = twitter; }
        public String getInstagram() { return instagram; }
        public void setInstagram(String instagram) { this.instagram = instagram; }
        public String getLinkedin() { return linkedin; }
        public void setLinkedin(String linkedin) { this.linkedin = linkedin; }
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
        
        // Getters and setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getSurname() { return surname; }
        public void setSurname(String surname) { this.surname = surname; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getImage() { return image; }
        public void setImage(String image) { this.image = image; }
        public String getExperience() { return experience; }
        public void setExperience(String experience) { this.experience = experience; }
        public String getFacebook() { return facebook; }
        public void setFacebook(String facebook) { this.facebook = facebook; }
        public String getTwitter() { return twitter; }
        public void setTwitter(String twitter) { this.twitter = twitter; }
        public String getInstagram() { return instagram; }
        public void setInstagram(String instagram) { this.instagram = instagram; }
        public String getLinkedin() { return linkedin; }
        public void setLinkedin(String linkedin) { this.linkedin = linkedin; }
        public Boolean getIsActive() { return isActive; }
        public void setIsActive(Boolean isActive) { this.isActive = isActive; }
    }
}
