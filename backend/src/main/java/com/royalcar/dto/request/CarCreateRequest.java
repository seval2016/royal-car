package com.royalcar.dto.request;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CarCreateRequest {

    @NotBlank(message = "Üretici boş olamaz")
    @Size(min = 2, max = 100, message = "Üretici 2-100 karakter arasında olmalıdır")
    private String manufacturer;

    @NotBlank(message = "Model boş olamaz")
    @Size(min = 1, max = 100, message = "Model 1-100 karakter arasında olmalıdır")
    private String model;

    @NotNull(message = "Yıl boş olamaz")
    @Min(value = 1900, message = "Yıl 1900'den küçük olamaz")
    @Max(value = 2030, message = "Yıl 2030'dan büyük olamaz")
    private Integer year;

    @NotBlank(message = "Yakıt tipi boş olamaz")
    @Size(max = 50, message = "Yakıt tipi 50 karakterden uzun olamaz")
    private String fuelType;

    @NotNull(message = "Fiyat boş olamaz")
    @DecimalMin(value = "0.0", inclusive = false, message = "Fiyat 0'dan büyük olmalıdır")
    @Digits(integer = 10, fraction = 2, message = "Fiyat maksimum 10 basamak ve 2 ondalık basamak olmalıdır")
    private BigDecimal price;

    @Size(max = 20, message = "Renk 20 karakterden uzun olamaz")
    private String color;

    @Size(max = 20, message = "Vites tipi 20 karakterden uzun olamaz")
    private String transmission;

    @Size(max = 20, message = "Motor tipi 20 karakterden uzun olamaz")
    private String engineType;

    @Min(value = 1, message = "Motor hacmi 1'den küçük olamaz")
    private Integer engineSize;

    @Min(value = 1, message = "Beygir gücü 1'den küçük olamaz")
    private Integer horsepower;

    @Size(max = 20, message = "Yakıt tüketimi 20 karakterden uzun olamaz")
    private String fuelConsumption;

    @Size(max = 500, message = "Açıklama 500 karakterden uzun olamaz")
    private String description;

    @Size(max = 500, message = "Özellikler 500 karakterden uzun olamaz")
    private String features;

    @Builder.Default
    private Boolean isAvailable = true;
}
