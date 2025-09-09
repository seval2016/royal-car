package com.royalcar.repository;

import com.royalcar.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    // Üreticiye göre arabaları bulma
    List<Car> findByManufacturerIgnoreCase(String manufacturer);
    
    // Modele göre arabaları bulma
    List<Car> findByModelIgnoreCase(String model);
    
    // Yakıt tipine göre arabaları bulma
    List<Car> findByFuelTypeIgnoreCase(String fuelType);
    
    // Yıla göre arabaları bulma
    List<Car> findByYear(Integer year);
    
    // Yıl aralığına göre arabaları bulma
    List<Car> findByYearBetween(Integer minYear, Integer maxYear);
    
    // Minimum yıldan büyük arabaları bulma
    List<Car> findByYearGreaterThanEqual(Integer minYear);
    
    // Maksimum yıldan küçük arabaları bulma
    List<Car> findByYearLessThanEqual(Integer maxYear);
    
    // Müsait arabaları bulma
    List<Car> findByIsAvailableTrue();
    
    // Müsait olmayan arabaları bulma
    List<Car> findByIsAvailableFalse();
    
    // Fiyat aralığına göre arabaları bulma
    @Query("SELECT c FROM Car c WHERE c.price BETWEEN :minPrice AND :maxPrice")
    List<Car> findByPriceBetween(@Param("minPrice") BigDecimal minPrice, @Param("maxPrice") BigDecimal maxPrice);
    
    // Minimum fiyattan büyük arabaları bulma
    List<Car> findByPriceGreaterThanEqual(BigDecimal minPrice);
    
    // Maksimum fiyattan küçük arabaları bulma
    List<Car> findByPriceLessThanEqual(BigDecimal maxPrice);
    
    // Üretici ve modele göre arabaları bulma
    List<Car> findByManufacturerIgnoreCaseAndModelIgnoreCase(String manufacturer, String model);
    
    // Üretici ve yakıt tipine göre arabaları bulma
    List<Car> findByManufacturerIgnoreCaseAndFuelTypeIgnoreCase(String manufacturer, String fuelType);
    
    // Üretici ve müsaitlik durumuna göre arabaları bulma
    List<Car> findByManufacturerIgnoreCaseAndIsAvailable(String manufacturer, Boolean isAvailable);
    
    // Yıl ve müsaitlik durumuna göre arabaları bulma
    List<Car> findByYearAndIsAvailable(Integer year, Boolean isAvailable);
    
    // Yakıt tipi ve müsaitlik durumuna göre arabaları bulma
    List<Car> findByFuelTypeIgnoreCaseAndIsAvailable(String fuelType, Boolean isAvailable);
    
    // Gelişmiş arama sorgusu
    @Query("SELECT c FROM Car c WHERE " +
           "(:manufacturer IS NULL OR LOWER(c.manufacturer) LIKE LOWER('%' || :manufacturer || '%')) AND " +
           "(:model IS NULL OR LOWER(c.model) LIKE LOWER('%' || :model || '%')) AND " +
           "(:minYear IS NULL OR c.year >= :minYear) AND " +
           "(:maxYear IS NULL OR c.year <= :maxYear) AND " +
           "(:fuelType IS NULL OR LOWER(c.fuelType) LIKE LOWER('%' || :fuelType || '%')) AND " +
           "(:isAvailable IS NULL OR c.isAvailable = :isAvailable)")
    List<Car> findCarsByCriteria(@Param("manufacturer") String manufacturer,
                                 @Param("model") String model,
                                 @Param("minYear") Integer minYear,
                                 @Param("maxYear") Integer maxYear,
                                 @Param("fuelType") String fuelType,
                                 @Param("isAvailable") Boolean isAvailable);
    
    // Tüm üreticileri bulma
    @Query("SELECT DISTINCT c.manufacturer FROM Car c ORDER BY c.manufacturer")
    List<String> findAllManufacturers();
    
    // Tüm yakıt tiplerini bulma
    @Query("SELECT DISTINCT c.fuelType FROM Car c ORDER BY c.fuelType")
    List<String> findAllFuelTypes();
    
    // Tüm yılları bulma
    @Query("SELECT DISTINCT c.year FROM Car c ORDER BY c.year DESC")
    List<Integer> findAllYears();
    
    // Müsait araba sayısını bulma
    long countByIsAvailableTrue();
    
    // Toplam araba sayısını bulma
    long countBy();
    
    // Üreticiye göre araba sayısını bulma
    long countByManufacturerIgnoreCase(String manufacturer);
    
    // Yakıt tipine göre araba sayısını bulma
    long countByFuelTypeIgnoreCase(String fuelType);
    
    // Yıla göre araba sayısını bulma
    long countByYear(Integer year);
}
