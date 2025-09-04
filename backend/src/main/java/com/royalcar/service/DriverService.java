package com.royalcar.service;

import com.royalcar.entity.Driver;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface DriverService {
    
    // Basic CRUD operations
    List<Driver> getAllDrivers();
    Optional<Driver> getDriverById(Long id);
    Driver createDriver(Driver driver);
    Driver updateDriver(Long id, Driver driver);
    void deleteDriver(Long id);
    
    // Availability operations
    List<Driver> getAvailableDrivers();
    List<Driver> getActiveDrivers();
    boolean isDriverAvailable(Long driverId);
    boolean isDriverAvailableForPeriod(Long driverId, LocalDateTime startDate, LocalDateTime endDate);
    
    // Business logic
    void activateDriver(Long id);
    void deactivateDriver(Long id);
    boolean isDriverActive(Long id);
    
    // Search and filtering
    List<Driver> getDriversByExperience(String experience);
    List<Driver> getDriversByLocation(String location);
    
    // Statistics
    long getTotalDriverCount();
    long getActiveDriverCount();
    long getAvailableDriverCount();
}
