package com.royalcar.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "cars")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Car extends BaseEntity {
    
    @Column(nullable = false)
    private String manufacturer;
    
    @Column(nullable = false)
    private String model;
    
    @Column(nullable = false)
    private String modelCode;
    
    @Column(nullable = false)
    private Integer year;
    
    @Column(nullable = false)
    private BigDecimal price;
    
    @Column(nullable = false)
    private String engine;
    
    @Column(nullable = false)
    private String transmission;
    
    @Column(nullable = false)
    private String fuelType;
    
    @Column(nullable = false)
    private String mileage;
    
    @Column(nullable = false)
    private String image;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false)
    private Boolean isAvailable = true;
}
