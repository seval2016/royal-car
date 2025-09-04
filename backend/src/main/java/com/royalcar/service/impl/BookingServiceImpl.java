package com.royalcar.service.impl;

import com.royalcar.entity.Booking;
import com.royalcar.service.BookingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class BookingServiceImpl implements BookingService {

    // TODO: Repository injection will be added later
    // private final BookingRepository bookingRepository;
    // private final CarService carService;
    // private final DriverService driverService;

    @Override
    public List<Booking> getAllBookings() {
        log.info("Fetching all bookings");
        // TODO: Implementation will be added with repository layer
        return List.of();
    }

    @Override
    public Optional<Booking> getBookingById(Long id) {
        log.info("Fetching booking with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid booking ID");
        }
        // TODO: Implementation will be added with repository layer
        return Optional.empty();
    }

    @Override
    public Booking createBooking(Booking booking) {
        log.info("Creating new booking for car: {}", booking.getCar().getId());
        if (booking == null) {
            throw new IllegalArgumentException("Booking cannot be null");
        }
        validateBookingData(booking);
        
        // Check car availability
        if (!isCarAvailableForPeriod(booking.getCar().getId(), 
                booking.getPickupDate(), booking.getReturnDate())) {
            throw new RuntimeException("Car is not available for the selected period");
        }
        
        // Check driver availability if driver is required
        if (booking.getDriverRequired() && booking.getDriver() != null) {
            if (!isDriverAvailableForPeriod(booking.getDriver().getId(),
                    booking.getPickupDate(), booking.getReturnDate())) {
                throw new RuntimeException("Driver is not available for the selected period");
            }
        }
        
        // Calculate total price
        double totalPrice = calculateTotalPrice(booking.getCar().getId(),
                booking.getPickupDate(), booking.getReturnDate(), booking.getDriverRequired());
        booking.setTotalPrice(java.math.BigDecimal.valueOf(totalPrice));
        
        // TODO: Implementation will be added with repository layer
        return booking;
    }

    @Override
    public Booking updateBooking(Long id, Booking booking) {
        log.info("Updating booking with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid booking ID");
        }
        if (booking == null) {
            throw new IllegalArgumentException("Booking cannot be null");
        }
        
        Booking existingBooking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        
        validateBookingData(booking);
        // TODO: Implementation will be added with repository layer
        return existingBooking;
    }

    @Override
    public void deleteBooking(Long id) {
        log.info("Deleting booking with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid booking ID");
        }
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        // TODO: Implementation will be added with repository layer
    }

    @Override
    public List<Booking> getUserBookings(Long userId) {
        log.info("Fetching bookings for user: {}", userId);
        if (userId == null || userId <= 0) {
            throw new IllegalArgumentException("Invalid user ID");
        }
        return getAllBookings().stream()
                .filter(booking -> booking.getUser().getId().equals(userId))
                .collect(Collectors.toList());
    }

    @Override
    public List<Booking> getCarBookings(Long carId) {
        log.info("Fetching bookings for car: {}", carId);
        if (carId == null || carId <= 0) {
            throw new IllegalArgumentException("Invalid car ID");
        }
        return getAllBookings().stream()
                .filter(booking -> booking.getCar().getId().equals(carId))
                .collect(Collectors.toList());
    }

    @Override
    public Booking confirmBooking(Long id) {
        log.info("Confirming booking with id: {}", id);
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(com.royalcar.entity.Booking.BookingStatus.CONFIRMED);
        // TODO: Save to repository
        return booking;
    }

    @Override
    public Booking cancelBooking(Long id) {
        log.info("Cancelling booking with id: {}", id);
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(com.royalcar.entity.Booking.BookingStatus.CANCELLED);
        // TODO: Save to repository
        return booking;
    }

    @Override
    public Booking completeBooking(Long id) {
        log.info("Completing booking with id: {}", id);
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(com.royalcar.entity.Booking.BookingStatus.COMPLETED);
        // TODO: Save to repository
        return booking;
    }

    @Override
    public void updateBookingStatus(Long id, String status) {
        log.info("Updating booking {} status to: {}", id, status);
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(com.royalcar.entity.Booking.BookingStatus.valueOf(status.toUpperCase()));
        // TODO: Save to repository
    }

    @Override
    public boolean isCarAvailableForPeriod(Long carId, LocalDateTime pickupDate, LocalDateTime returnDate) {
        log.info("Checking car availability for period: {} to {}", pickupDate, returnDate);
        if (pickupDate == null || returnDate == null) {
            throw new IllegalArgumentException("Pickup and return dates cannot be null");
        }
        if (pickupDate.isAfter(returnDate)) {
            throw new IllegalArgumentException("Pickup date cannot be after return date");
        }
        
        // TODO: Implementation will be added with repository layer
        return true;
    }

    @Override
    public boolean isDriverAvailableForPeriod(Long driverId, LocalDateTime pickupDate, LocalDateTime returnDate) {
        log.info("Checking driver availability for period: {} to {}", pickupDate, returnDate);
        if (pickupDate == null || returnDate == null) {
            throw new IllegalArgumentException("Pickup and return dates cannot be null");
        }
        if (pickupDate.isAfter(returnDate)) {
            throw new IllegalArgumentException("Pickup date cannot be after return date");
        }
        
        // TODO: Implementation will be added with repository layer
        return true;
    }

    @Override
    public double calculateTotalPrice(Long carId, LocalDateTime pickupDate, LocalDateTime returnDate, boolean driverRequired) {
        log.info("Calculating total price for car: {}, driver required: {}", carId, driverRequired);
        if (pickupDate == null || returnDate == null) {
            throw new IllegalArgumentException("Pickup and return dates cannot be null");
        }
        
        // Calculate days
        long days = ChronoUnit.DAYS.between(pickupDate, returnDate);
        if (days <= 0) days = 1; // Minimum 1 day
        
        // TODO: Get car price from car service
        double carPricePerDay = 100.0; // Default price
        double driverPricePerDay = driverRequired ? 50.0 : 0.0;
        
        return (carPricePerDay + driverPricePerDay) * days;
    }

    @Override
    public List<Booking> getBookingsByStatus(String status) {
        log.info("Fetching bookings by status: {}", status);
        if (status == null || status.trim().isEmpty()) {
            throw new IllegalArgumentException("Status cannot be null or empty");
        }
        return getAllBookings().stream()
                .filter(booking -> status.equalsIgnoreCase(booking.getStatus().name()))
                .collect(Collectors.toList());
    }

    @Override
    public List<Booking> getBookingsByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        log.info("Fetching bookings by date range: {} to {}", startDate, endDate);
        if (startDate == null || endDate == null) {
            throw new IllegalArgumentException("Start and end dates cannot be null");
        }
        return getAllBookings().stream()
                .filter(booking -> !booking.getPickupDate().isBefore(startDate) && 
                                 !booking.getReturnDate().isAfter(endDate))
                .collect(Collectors.toList());
    }

    @Override
    public List<Booking> getActiveBookings() {
        log.info("Fetching active bookings");
        return getBookingsByStatus("CONFIRMED");
    }

    @Override
    public List<Booking> getUpcomingBookings() {
        log.info("Fetching upcoming bookings");
        LocalDateTime now = LocalDateTime.now();
        return getAllBookings().stream()
                .filter(booking -> booking.getPickupDate().isAfter(now))
                .collect(Collectors.toList());
    }

    @Override
    public long getTotalBookingCount() {
        log.info("Getting total booking count");
        return getAllBookings().size();
    }

    @Override
    public long getActiveBookingCount() {
        log.info("Getting active booking count");
        return getActiveBookings().size();
    }

    @Override
    public long getCompletedBookingCount() {
        log.info("Getting completed booking count");
        return getBookingsByStatus("COMPLETED").size();
    }

    @Override
    public long getCancelledBookingCount() {
        log.info("Getting cancelled booking count");
        return getBookingsByStatus("CANCELLED").size();
    }

    private void validateBookingData(Booking booking) {
        if (booking.getUser() == null) {
            throw new IllegalArgumentException("User cannot be null");
        }
        if (booking.getCar() == null) {
            throw new IllegalArgumentException("Car cannot be null");
        }
        if (booking.getPickupDate() == null) {
            throw new IllegalArgumentException("Pickup date cannot be null");
        }
        if (booking.getReturnDate() == null) {
            throw new IllegalArgumentException("Return date cannot be null");
        }
        if (booking.getPickupDate().isAfter(booking.getReturnDate())) {
            throw new IllegalArgumentException("Pickup date cannot be after return date");
        }
        if (booking.getPickupDate().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Pickup date cannot be in the past");
        }
    }
}
