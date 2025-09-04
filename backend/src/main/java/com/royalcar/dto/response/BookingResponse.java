package com.royalcar.dto.response;

import com.royalcar.entity.Booking;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {

    private Long id;
    private Long userId;
    private String userFirstName;
    private String userLastName;
    private String userEmail;
    private Long carId;
    private String carManufacturer;
    private String carModel;
    private String carYear;
    private Long driverId;
    private String driverFirstName;
    private String driverLastName;
    private LocalDateTime pickupDate;
    private LocalDateTime returnDate;
    private Boolean driverRequired;
    private String notes;
    private String pickupLocation;
    private String returnLocation;
    private Booking.BookingStatus status;
    private BigDecimal totalPrice;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
