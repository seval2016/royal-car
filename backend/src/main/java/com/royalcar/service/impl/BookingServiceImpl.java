package com.royalcar.service.impl;

import com.royalcar.entity.Booking;
import com.royalcar.entity.Car;
import com.royalcar.entity.Driver;
import com.royalcar.repository.BookingRepository;
import com.royalcar.service.BookingService;
import com.royalcar.service.CarService;
import com.royalcar.service.DriverService;
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

    private final BookingRepository bookingRepository;
    private final CarService carService;
    private final DriverService driverService;

    @Override
    public List<Booking> getAllBookings() {
        log.info("Fetching all bookings");
        return bookingRepository.findAll();
    }

    @Override
    public Optional<Booking> getBookingById(Long id) {
        log.info("Fetching booking with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid booking ID");
        }
        return bookingRepository.findById(id);
    }

    @Override
    public Booking createBooking(Booking booking) {
        log.info("Creating new booking for car: {}", booking.getCar().getId());
        if (booking == null) {
            throw new IllegalArgumentException("Booking cannot be null");
        }
        validateBookingData(booking);
        
        // Fetch full entities from database
        Car car = carService.getCarById(booking.getCar().getId())
                .orElseThrow(() -> new RuntimeException("Car not found with id: " + booking.getCar().getId()));
        booking.setCar(car);
        
        if (booking.getDriver() != null) {
            Driver driver = driverService.getDriverById(booking.getDriver().getId())
                    .orElseThrow(() -> new RuntimeException("Driver not found with id: " + booking.getDriver().getId()));
            booking.setDriver(driver);
        }
        
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
        
        return bookingRepository.save(booking);
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
        
        // Update fields
        if (booking.getPickupDate() != null) {
            existingBooking.setPickupDate(booking.getPickupDate());
        }
        if (booking.getReturnDate() != null) {
            existingBooking.setReturnDate(booking.getReturnDate());
        }
        if (booking.getDriverRequired() != null) {
            existingBooking.setDriverRequired(booking.getDriverRequired());
        }
        if (booking.getStatus() != null) {
            existingBooking.setStatus(booking.getStatus());
        }
        if (booking.getPickupLocation() != null) {
            existingBooking.setPickupLocation(booking.getPickupLocation());
        }
        if (booking.getReturnLocation() != null) {
            existingBooking.setReturnLocation(booking.getReturnLocation());
        }
        if (booking.getNotes() != null) {
            existingBooking.setNotes(booking.getNotes());
        }
        
        // Recalculate total price
        double totalPrice = calculateTotalPrice(existingBooking.getCar().getId(),
                existingBooking.getPickupDate(), existingBooking.getReturnDate(), 
                existingBooking.getDriverRequired());
        existingBooking.setTotalPrice(java.math.BigDecimal.valueOf(totalPrice));
        
        return bookingRepository.save(existingBooking);
    }

    @Override
    public void deleteBooking(Long id) {
        log.info("Deleting booking with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid booking ID");
        }
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        bookingRepository.delete(booking);
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
        bookingRepository.save(booking);
        return booking;
    }

    @Override
    public Booking cancelBooking(Long id) {
        log.info("Cancelling booking with id: {}", id);
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(com.royalcar.entity.Booking.BookingStatus.CANCELLED);
        bookingRepository.save(booking);
        return booking;
    }

    @Override
    public Booking completeBooking(Long id) {
        log.info("Completing booking with id: {}", id);
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(com.royalcar.entity.Booking.BookingStatus.COMPLETED);
        bookingRepository.save(booking);
        return booking;
    }

    @Override
    public void updateBookingStatus(Long id, String status) {
        log.info("Updating booking {} status to: {}", id, status);
        Booking booking = getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(com.royalcar.entity.Booking.BookingStatus.valueOf(status.toUpperCase()));
        bookingRepository.save(booking);
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
        
        // Check if car has any conflicting bookings during this period
        List<Booking> carBookings = getCarBookings(carId);
        return carBookings.stream()
                .filter(booking -> booking.getStatus() == com.royalcar.entity.Booking.BookingStatus.CONFIRMED ||
                                 booking.getStatus() == com.royalcar.entity.Booking.BookingStatus.ACTIVE)
                .noneMatch(booking -> !booking.getReturnDate().isBefore(pickupDate) && 
                                    !booking.getPickupDate().isAfter(returnDate));
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
        
        // Check if driver has any conflicting bookings during this period
        List<Booking> allBookings = getAllBookings();
        return allBookings.stream()
                .filter(booking -> booking.getDriver() != null && 
                                 booking.getDriver().getId().equals(driverId))
                .filter(booking -> booking.getStatus() == com.royalcar.entity.Booking.BookingStatus.CONFIRMED ||
                                 booking.getStatus() == com.royalcar.entity.Booking.BookingStatus.ACTIVE)
                .noneMatch(booking -> !booking.getReturnDate().isBefore(pickupDate) && 
                                    !booking.getPickupDate().isAfter(returnDate));
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
        
        // Get car price from car service
        var car = carService.getCarById(carId).orElseThrow(() -> new RuntimeException("Car not found"));
        double carPricePerDay = car.getPrice().doubleValue();
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
