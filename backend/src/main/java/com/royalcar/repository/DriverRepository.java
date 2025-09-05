package com.royalcar.repository;

import com.royalcar.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {

    // Ad ile sürücü bulma
    Optional<Driver> findByNameIgnoreCase(String name);
    
    // Soyad ile sürücü bulma
    Optional<Driver> findBySurnameIgnoreCase(String surname);
    
    // Ad ve soyad ile sürücü bulma
    Optional<Driver> findByNameIgnoreCaseAndSurnameIgnoreCase(String name, String surname);
    
    // Email ile sürücü bulma
    Optional<Driver> findByEmail(String email);
    
    // Email ile sürücü var mı kontrol etme
    boolean existsByEmail(String email);
    
    // Aktif sürücüleri bulma
    List<Driver> findByIsActiveTrue();
    
    // Pasif sürücüleri bulma
    List<Driver> findByIsActiveFalse();
    
    // Deneyim ile sürücüleri bulma
    List<Driver> findByExperienceIgnoreCase(String experience);
    
    // Ad veya soyada göre sürücü arama
    @Query("SELECT d FROM Driver d WHERE LOWER(d.name) LIKE LOWER(CONCAT('%', :searchTerm, '%')) " +
           "OR LOWER(d.surname) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Driver> findByNameOrSurnameContainingIgnoreCase(@Param("searchTerm") String searchTerm);
    
    // Aktif sürücü sayısını bulma
    long countByIsActiveTrue();
    
    // Toplam sürücü sayısını bulma
    long countBy();
}
