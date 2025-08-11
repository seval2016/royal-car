package com.royalcar.car.repository;

import com.royalcar.car.entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    
    Page<Car> findByBrandContainingIgnoreCase(String brand, Pageable pageable);
    
    Page<Car> findByModelContainingIgnoreCase(String model, Pageable pageable);
    
    Page<Car> findByYear(Integer year, Pageable pageable);
    
    Page<Car> findByFuelType(String fuelType, Pageable pageable);
    
    Page<Car> findByTransmission(String transmission, Pageable pageable);
    
    Page<Car> findByIsAvailable(Boolean isAvailable, Pageable pageable);
    
    @Query("SELECT c FROM Car c WHERE c.price BETWEEN :minPrice AND :maxPrice")
    Page<Car> findByPriceBetween(@Param("minPrice") BigDecimal minPrice, 
                                 @Param("maxPrice") BigDecimal maxPrice, 
                                 Pageable pageable);
    
    @Query("SELECT c FROM Car c WHERE c.mileage <= :maxMileage")
    Page<Car> findByMileageLessThanEqual(@Param("maxMileage") Integer maxMileage, 
                                        Pageable pageable);
    
    @Query("SELECT DISTINCT c.brand FROM Car c ORDER BY c.brand")
    List<String> findAllBrands();
    
    @Query("SELECT DISTINCT c.fuelType FROM Car c ORDER BY c.fuelType")
    List<String> findAllFuelTypes();
    
    @Query("SELECT DISTINCT c.transmission FROM Car c ORDER BY c.transmission")
    List<String> findAllTransmissions();
}
