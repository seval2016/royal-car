package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.Booking;
import com.royalcar.entity.Car;
import com.royalcar.entity.Driver;
import com.royalcar.entity.User;
import com.royalcar.service.BookingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
@Tag(name = "Booking Management", description = "Car rental booking operations")
public class BookingController {

    private final BookingService bookingService;
    
    @GetMapping
    @Operation(summary = "Get all bookings", description = "Retrieve all bookings with optional filtering")
    public ResponseEntity<ApiResponse<List<Booking>>> getAllBookings(
            @RequestParam(required = false) Long userId,
            @RequestParam(required = false) Long carId,
            @RequestParam(required = false) String status) {
        List<Booking> bookings;
        if (userId != null) {
            bookings = bookingService.getUserBookings(userId);
        } else if (carId != null) {
            bookings = bookingService.getCarBookings(carId);
        } else if (status != null) {
            bookings = bookingService.getBookingsByStatus(status);
        } else {
            bookings = bookingService.getAllBookings();
        }
        return ResponseEntity.ok(ApiResponse.success("Bookings retrieved successfully", bookings));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get booking by ID", description = "Retrieve a specific booking by its ID")
    public ResponseEntity<ApiResponse<Booking>> getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        return ResponseEntity.ok(ApiResponse.success("Booking retrieved successfully", booking));
    }
    
    @PostMapping
    @Operation(summary = "Create new booking", description = "Create a new car rental booking")
    public ResponseEntity<ApiResponse<Booking>> createBooking(@Valid @RequestBody BookingCreateRequest request) {
        Booking booking = convertToBooking(request);
        
        // Set relationships - let the service layer handle entity fetching
        if (request.getCarId() != null) {
            Car car = new Car();
            car.setId(request.getCarId());
            booking.setCar(car);
        }
        
        if (request.getDriverId() != null) {
            Driver driver = new Driver();
            driver.setId(request.getDriverId());
            booking.setDriver(driver);
        }
        
        // For now, we'll use a default user ID (you might want to get this from authentication)
        User user = new User();
        user.setId(1L); // Default user ID
        booking.setUser(user);
        
        Booking createdBooking = bookingService.createBooking(booking);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Booking created successfully", createdBooking));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update booking", description = "Update an existing booking")
    public ResponseEntity<ApiResponse<Booking>> updateBooking(@PathVariable Long id, @Valid @RequestBody BookingUpdateRequest request) {
        try {
            Booking booking = convertToBooking(request);
            Booking updatedBooking = bookingService.updateBooking(id, booking);
            return ResponseEntity.ok(ApiResponse.success("Booking updated successfully", updatedBooking));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Update failed: " + e.getMessage()));
        }
    }
    
    @PutMapping("/{id}/status")
    @Operation(summary = "Update booking status", description = "Update booking status (confirm, cancel, etc.)")
    public ResponseEntity<ApiResponse<Booking>> updateBookingStatus(
            @PathVariable Long id, 
            @RequestParam String status) {
        bookingService.updateBookingStatus(id, status);
        Booking booking = bookingService.getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        return ResponseEntity.ok(ApiResponse.success("Booking status updated successfully", booking));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Cancel booking", description = "Cancel a booking by ID")
    public ResponseEntity<ApiResponse<Void>> cancelBooking(@PathVariable Long id) {
        bookingService.cancelBooking(id);
        return ResponseEntity.ok(ApiResponse.success("Booking cancelled successfully", null));
    }
    
    @GetMapping("/user/{userId}")
    @Operation(summary = "Get user bookings", description = "Retrieve all bookings for a specific user")
    public ResponseEntity<ApiResponse<List<Booking>>> getUserBookings(@PathVariable Long userId) {
        List<Booking> bookings = bookingService.getUserBookings(userId);
        return ResponseEntity.ok(ApiResponse.success("User bookings retrieved successfully", bookings));
    }
    
    private Booking convertToBooking(BookingCreateRequest request) {
        Booking booking = new Booking();
        
        // Set required fields with flexible date parsing
        try {
            if (request.getPickupDate().contains("T")) {
                booking.setPickupDate(java.time.LocalDateTime.parse(request.getPickupDate()));
            } else {
                booking.setPickupDate(java.time.LocalDate.parse(request.getPickupDate()).atStartOfDay());
            }
        } catch (Exception e) {
            throw new RuntimeException("Invalid pickup date format. Use YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss");
        }
        
        try {
            if (request.getReturnDate().contains("T")) {
                booking.setReturnDate(java.time.LocalDateTime.parse(request.getReturnDate()));
            } else {
                booking.setReturnDate(java.time.LocalDate.parse(request.getReturnDate()).atStartOfDay());
            }
        } catch (Exception e) {
            throw new RuntimeException("Invalid return date format. Use YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss");
        }
        
        booking.setPickupLocation(request.getPickupLocation());
        booking.setReturnLocation(request.getReturnLocation());
        booking.setTotalPrice(new java.math.BigDecimal(request.getTotalPrice()));
        booking.setNotes(request.getNotes());
        booking.setDriverRequired(request.getDriverRequired());
        
        return booking;
    }
    
    private Booking convertToBooking(BookingUpdateRequest request) {
        Booking booking = new Booking();
        
        // Set required fields with flexible date parsing
        try {
            if (request.getPickupDate().contains("T")) {
                booking.setPickupDate(java.time.LocalDateTime.parse(request.getPickupDate()));
            } else {
                booking.setPickupDate(java.time.LocalDate.parse(request.getPickupDate()).atStartOfDay());
            }
        } catch (Exception e) {
            throw new RuntimeException("Invalid pickup date format. Use YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss");
        }
        
        try {
            if (request.getReturnDate().contains("T")) {
                booking.setReturnDate(java.time.LocalDateTime.parse(request.getReturnDate()));
            } else {
                booking.setReturnDate(java.time.LocalDate.parse(request.getReturnDate()).atStartOfDay());
            }
        } catch (Exception e) {
            throw new RuntimeException("Invalid return date format. Use YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss");
        }
        
        booking.setPickupLocation(request.getPickupLocation());
        booking.setReturnLocation(request.getReturnLocation());
        booking.setTotalPrice(new java.math.BigDecimal(request.getTotalPrice()));
        booking.setNotes(request.getNotes());
        booking.setDriverRequired(request.getDriverRequired());
        
        // Set status if provided
        if (request.getStatus() != null) {
            booking.setStatus(com.royalcar.entity.Booking.BookingStatus.valueOf(request.getStatus().toUpperCase()));
        }
        
        return booking;
    }
    
    // DTO classes
    public static class BookingCreateRequest {
        private Long carId;
        private String pickupDate;
        private String returnDate;
        private String pickupLocation;
        private String returnLocation;
        private String totalPrice;
        private String notes;
        private Boolean driverRequired;
        private Long driverId;
        
        // Getters and setters
        public Long getCarId() { return carId; }
        public void setCarId(Long carId) { this.carId = carId; }
        public String getPickupDate() { return pickupDate; }
        public void setPickupDate(String pickupDate) { this.pickupDate = pickupDate; }
        public String getReturnDate() { return returnDate; }
        public void setReturnDate(String returnDate) { this.returnDate = returnDate; }
        public String getPickupLocation() { return pickupLocation; }
        public void setPickupLocation(String pickupLocation) { this.pickupLocation = pickupLocation; }
        public String getReturnLocation() { return returnLocation; }
        public void setReturnLocation(String returnLocation) { this.returnLocation = returnLocation; }
        public String getTotalPrice() { return totalPrice; }
        public void setTotalPrice(String totalPrice) { this.totalPrice = totalPrice; }
        public String getNotes() { return notes; }
        public void setNotes(String notes) { this.notes = notes; }
        public Boolean getDriverRequired() { return driverRequired; }
        public void setDriverRequired(Boolean driverRequired) { this.driverRequired = driverRequired; }
        public Long getDriverId() { return driverId; }
        public void setDriverId(Long driverId) { this.driverId = driverId; }
    }
    
    public static class BookingUpdateRequest {
        private String pickupDate;
        private String returnDate;
        private String pickupLocation;
        private String returnLocation;
        private String totalPrice;
        private String notes;
        private Boolean driverRequired;
        private Long driverId;
        private String status;
        
        // Getters and setters
        public String getPickupDate() { return pickupDate; }
        public void setPickupDate(String pickupDate) { this.pickupDate = pickupDate; }
        public String getReturnDate() { return returnDate; }
        public void setReturnDate(String returnDate) { this.returnDate = returnDate; }
        public String getPickupLocation() { return pickupLocation; }
        public void setPickupLocation(String pickupLocation) { this.pickupLocation = pickupLocation; }
        public String getReturnLocation() { return returnLocation; }
        public void setReturnLocation(String returnLocation) { this.returnLocation = returnLocation; }
        public String getTotalPrice() { return totalPrice; }
        public void setTotalPrice(String totalPrice) { this.totalPrice = totalPrice; }
        public String getNotes() { return notes; }
        public void setNotes(String notes) { this.notes = notes; }
        public Boolean getDriverRequired() { return driverRequired; }
        public void setDriverRequired(Boolean driverRequired) { this.driverRequired = driverRequired; }
        public Long getDriverId() { return driverId; }
        public void setDriverId(Long driverId) { this.driverId = driverId; }
        public String getStatus() { return status; }
        public void setStatus(String status) { this.status = status; }
    }
}
