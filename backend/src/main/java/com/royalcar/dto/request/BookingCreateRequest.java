package com.royalcar.dto.request;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingCreateRequest {

    @NotNull(message = "Kullanıcı ID boş olamaz")
    @Min(value = 1, message = "Geçerli bir kullanıcı ID giriniz")
    private Long userId;

    @NotNull(message = "Araba ID boş olamaz")
    @Min(value = 1, message = "Geçerli bir araba ID giriniz")
    private Long carId;

    @NotNull(message = "Alış tarihi boş olamaz")
    @Future(message = "Alış tarihi gelecekte olmalıdır")
    private LocalDateTime pickupDate;

    @NotNull(message = "Dönüş tarihi boş olamaz")
    @Future(message = "Dönüş tarihi gelecekte olmalıdır")
    private LocalDateTime returnDate;

    private Long driverId;

    @Builder.Default
    private Boolean driverRequired = false;

    @Size(max = 500, message = "Notlar 500 karakterden uzun olamaz")
    private String notes;

    @Size(max = 100, message = "Alış yeri 100 karakterden uzun olamaz")
    private String pickupLocation;

    @Size(max = 100, message = "Dönüş yeri 100 karakterden uzun olamaz")
    private String returnLocation;
}
