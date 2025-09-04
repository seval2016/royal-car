package com.royalcar.dto.response;

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
public class CarResponse {

    private Long id;
    private String manufacturer;
    private String model;
    private Integer year;
    private String fuelType;
    private BigDecimal price;
    private String color;
    private String transmission;
    private String engineType;
    private Integer engineSize;
    private Integer horsepower;
    private String fuelConsumption;
    private String description;
    private String features;
    private Boolean isAvailable;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
