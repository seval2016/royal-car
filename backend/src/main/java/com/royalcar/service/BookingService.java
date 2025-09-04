package com.royalcar.service;

import com.royalcar.entity.Booking;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface BookingService {
    
    // Basic CRUD operations
    List<Booking> getAllBookings();
    Optional<Booking> getBookingById(Long id);
    Booking createBooking(Booking booking);
    Booking updateBooking(Long id, Booking booking);
    void deleteBooking(Long id);
    
    // User-specific operations
    List<Booking> getUserBookings(Long userId);
    List<Booking> getCarBookings(Long carId);
    
    // Status operations
    Booking confirmBooking(Long id);
    Booking cancelBooking(Long id);
    Booking completeBooking(Long id);
    void updateBookingStatus(Long id, String status);
    
    // Validation and business logic
    boolean isCarAvailableForPeriod(Long carId, LocalDateTime pickupDate, LocalDateTime returnDate);
    boolean isDriverAvailableForPeriod(Long driverId, LocalDateTime pickupDate, LocalDateTime returnDate);
    double calculateTotalPrice(Long carId, LocalDateTime pickupDate, LocalDateTime returnDate, boolean driverRequired);
    
    // Search and filtering
    List<Booking> getBookingsByStatus(String status);
    List<Booking> getBookingsByDateRange(LocalDateTime startDate, LocalDateTime endDate);
    List<Booking> getActiveBookings();
    List<Booking> getUpcomingBookings();
    
    // Statistics
    long getTotalBookingCount();
    long getActiveBookingCount();
    long getCompletedBookingCount();
    long getCancelledBookingCount();
}
