package com.royalcar.service.impl;

import com.royalcar.entity.Driver;
import com.royalcar.service.DriverService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class DriverServiceImpl implements DriverService {

    // TODO: Repository injection will be added later
    // private final DriverRepository driverRepository;

    @Override
    public List<Driver> getAllDrivers() {
        log.info("Fetching all drivers");
        // TODO: Implementation will be added with repository layer
        return List.of();
    }

    @Override
    public Optional<Driver> getDriverById(Long id) {
        log.info("Fetching driver with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid driver ID");
        }
        // TODO: Implementation will be added with repository layer
        return Optional.empty();
    }

    @Override
    public Driver createDriver(Driver driver) {
        log.info("Creating new driver: {} {}", driver.getName(), driver.getSurname());
        if (driver == null) {
            throw new IllegalArgumentException("Driver cannot be null");
        }
        validateDriverData(driver);
        // TODO: Implementation will be added with repository layer
        return driver;
    }

    @Override
    public Driver updateDriver(Long id, Driver driver) {
        log.info("Updating driver with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid driver ID");
        }
        if (driver == null) {
            throw new IllegalArgumentException("Driver cannot be null");
        }
        Driver existingDriver = getDriverById(id)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        validateDriverData(driver);
        // TODO: Implementation will be added with repository layer
        return existingDriver;
    }

    @Override
    public void deleteDriver(Long id) {
        log.info("Deleting driver with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid driver ID");
        }
        Driver driver = getDriverById(id)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        // TODO: Implementation will be added with repository layer
    }

    @Override
    public List<Driver> getAvailableDrivers() {
        log.info("Fetching available drivers");
        return getAllDrivers().stream()
                .filter(Driver::getIsActive)
                .collect(Collectors.toList());
    }

    @Override
    public List<Driver> getActiveDrivers() {
        log.info("Fetching active drivers");
        return getAllDrivers().stream()
                .filter(Driver::getIsActive)
                .collect(Collectors.toList());
    }

    @Override
    public boolean isDriverAvailable(Long driverId) {
        log.info("Checking availability for driver: {}", driverId);
        Driver driver = getDriverById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        return driver.getIsActive();
    }

    @Override
    public boolean isDriverAvailableForPeriod(Long driverId, LocalDateTime startDate, LocalDateTime endDate) {
        log.info("Checking driver availability for period: {} to {}", startDate, endDate);
        if (startDate == null || endDate == null) {
            throw new IllegalArgumentException("Start and end dates cannot be null");
        }
        if (startDate.isAfter(endDate)) {
            throw new IllegalArgumentException("Start date cannot be after end date");
        }
        
        // TODO: Check booking conflicts
        return isDriverAvailable(driverId);
    }

    @Override
    public void activateDriver(Long id) {
        log.info("Activating driver: {}", id);
        Driver driver = getDriverById(id)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        driver.setIsActive(true);
        // TODO: Save to repository
    }

    @Override
    public void deactivateDriver(Long id) {
        log.info("Deactivating driver: {}", id);
        Driver driver = getDriverById(id)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        driver.setIsActive(false);
        // TODO: Save to repository
    }

    @Override
    public boolean isDriverActive(Long id) {
        log.info("Checking if driver is active: {}", id);
        Driver driver = getDriverById(id)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        return driver.getIsActive();
    }

    @Override
    public List<Driver> getDriversByExperience(String experience) {
        log.info("Fetching drivers by experience: {}", experience);
        if (experience == null || experience.trim().isEmpty()) {
            throw new IllegalArgumentException("Experience cannot be null or empty");
        }
        return getAllDrivers().stream()
                .filter(driver -> experience.equalsIgnoreCase(driver.getExperience()))
                .collect(Collectors.toList());
    }

    @Override
    public List<Driver> getDriversByLocation(String location) {
        log.info("Fetching drivers by location: {}", location);
        // TODO: Implementation will be added when location field is added
        return List.of();
    }

    @Override
    public long getTotalDriverCount() {
        log.info("Getting total driver count");
        return getAllDrivers().size();
    }

    @Override
    public long getActiveDriverCount() {
        log.info("Getting active driver count");
        return getActiveDrivers().size();
    }

    @Override
    public long getAvailableDriverCount() {
        log.info("Getting available driver count");
        return getAvailableDrivers().size();
    }

    private void validateDriverData(Driver driver) {
        if (driver.getName() == null || driver.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }
        if (driver.getSurname() == null || driver.getSurname().trim().isEmpty()) {
            throw new IllegalArgumentException("Surname cannot be null or empty");
        }
        if (driver.getEmail() == null || driver.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        if (driver.getExperience() == null || driver.getExperience().trim().isEmpty()) {
            throw new IllegalArgumentException("Experience cannot be null or empty");
        }
    }
}
