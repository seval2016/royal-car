package com.royalcar.car.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDto {
    
    private Long id;
    
    @NotBlank(message = "Brand is required")
    @Size(min = 2, max = 50, message = "Brand must be between 2 and 50 characters")
    private String brand;
    
    @NotBlank(message = "Model is required")
    @Size(min = 1, max = 50, message = "Model must be between 1 and 50 characters")
    private String model;
    
    @NotNull(message = "Year is required")
    @Min(value = 1900, message = "Year must be at least 1900")
    @Max(value = 2030, message = "Year cannot be in the future")
    private Integer year;
    
    @NotBlank(message = "Color is required")
    @Size(min = 2, max = 30, message = "Color must be between 2 and 30 characters")
    private String color;
    
    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")
    private BigDecimal price;
    
    @NotBlank(message = "Fuel type is required")
    private String fuelType;
    
    @NotBlank(message = "Transmission is required")
    private String transmission;
    
    @NotNull(message = "Mileage is required")
    @Min(value = 0, message = "Mileage cannot be negative")
    private Integer mileage;
    
    @Size(max = 1000, message = "Description cannot exceed 1000 characters")
    private String description;
    
    private Boolean isAvailable;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
