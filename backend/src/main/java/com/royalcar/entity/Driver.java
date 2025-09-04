package com.royalcar.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "drivers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Driver extends BaseEntity {
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String surname;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String image;
    
    @Column(nullable = false)
    private String experience;
    
    @Column(nullable = false)
    private String facebook;
    
    @Column(nullable = false)
    private String twitter;
    
    @Column(nullable = false)
    private String instagram;
    
    @Column(nullable = false)
    private String linkedin;
    
    @Column(nullable = false)
    private Boolean isActive = true;
}
