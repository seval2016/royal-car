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
    Optional<Driver> findByFirstNameIgnoreCase(String firstName);
    
    // Soyad ile sürücü bulma
    Optional<Driver> findByLastNameIgnoreCase(String lastName);
    
    // Ad ve soyad ile sürücü bulma
    Optional<Driver> findByFirstNameIgnoreCaseAndLastNameIgnoreCase(String firstName, String lastName);
    
    // Telefon numarası ile sürücü bulma
    Optional<Driver> findByPhoneNumber(String phoneNumber);
    
    // Email ile sürücü bulma
    Optional<Driver> findByEmail(String email);
    
    // Ehliyet numarası ile sürücü bulma
    Optional<Driver> findByLicenseNumber(String licenseNumber);
    
    // Telefon numarası ile sürücü var mı kontrol etme
    boolean existsByPhoneNumber(String phoneNumber);
    
    // Email ile sürücü var mı kontrol etme
    boolean existsByEmail(String email);
    
    // Ehliyet numarası ile sürücü var mı kontrol etme
    boolean existsByLicenseNumber(String licenseNumber);
    
    // Aktif sürücüleri bulma
    List<Driver> findByIsActiveTrue();
    
    // Pasif sürücüleri bulma
    List<Driver> findByIsActiveFalse();
    
    // Müsait sürücüleri bulma
    List<Driver> findByIsAvailableTrue();
    
    // Müsait olmayan sürücüleri bulma
    List<Driver> findByIsAvailableFalse();
    
    // Aktif ve müsait sürücüleri bulma
    List<Driver> findByIsActiveTrueAndIsAvailableTrue();
    
    // Şehre göre sürücüleri bulma
    List<Driver> findByCityIgnoreCase(String city);
    
    // Ülkeye göre sürücüleri bulma
    List<Driver> findByCountryIgnoreCase(String country);
    
    // Şehir ve ülkeye göre sürücüleri bulma
    List<Driver> findByCityIgnoreCaseAndCountryIgnoreCase(String city, String country);
    
    // Minimum yaştan büyük sürücüleri bulma
    List<Driver> findByAgeGreaterThanEqual(Integer minAge);
    
    // Maksimum yaştan küçük sürücüleri bulma
    List<Driver> findByAgeLessThanEqual(Integer maxAge);
    
    // Yaş aralığına göre sürücüleri bulma
    List<Driver> findByAgeBetween(Integer minAge, Integer maxAge);
    
    // Minimum deneyim yılından büyük sürücüleri bulma
    List<Driver> findByExperienceYearsGreaterThanEqual(Integer minExperience);
    
    // Maksimum deneyim yılından küçük sürücüleri bulma
    List<Driver> findByExperienceYearsLessThanEqual(Integer maxExperience);
    
    // Deneyim yılı aralığına göre sürücüleri bulma
    List<Driver> findByExperienceYearsBetween(Integer minExperience, Integer maxExperience);
    
    // Ad veya soyada göre sürücü arama
    @Query("SELECT d FROM Driver d WHERE LOWER(d.firstName) LIKE LOWER(CONCAT('%', :searchTerm, '%')) " +
           "OR LOWER(d.lastName) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Driver> findByFirstNameOrLastNameContainingIgnoreCase(@Param("searchTerm") String searchTerm);
    
    // Şehir ve müsaitlik durumuna göre sürücüleri bulma
    List<Driver> findByCityIgnoreCaseAndIsAvailable(String city, Boolean isAvailable);
    
    // Ülke ve müsaitlik durumuna göre sürücüleri bulma
    List<Driver> findByCountryIgnoreCaseAndIsAvailable(String country, Boolean isAvailable);
    
    // Yaş ve müsaitlik durumuna göre sürücüleri bulma
    List<Driver> findByAgeAndIsAvailable(Integer age, Boolean isAvailable);
    
    // Deneyim yılı ve müsaitlik durumuna göre sürücüleri bulma
    List<Driver> findByExperienceYearsAndIsAvailable(Integer experienceYears, Boolean isAvailable);
    
    // Gelişmiş arama sorgusu
    @Query("SELECT d FROM Driver d WHERE " +
           "(:city IS NULL OR LOWER(d.city) LIKE LOWER(CONCAT('%', :city, '%'))) AND " +
           "(:country IS NULL OR LOWER(d.country) LIKE LOWER(CONCAT('%', :country, '%'))) AND " +
           "(:minAge IS NULL OR d.age >= :minAge) AND " +
           "(:maxAge IS NULL OR d.age <= :maxAge) AND " +
           "(:minExperience IS NULL OR d.experienceYears >= :minExperience) AND " +
           "(:maxExperience IS NULL OR d.experienceYears <= :maxExperience) AND " +
           "(:isAvailable IS NULL OR d.isAvailable = :isAvailable) AND " +
           "(:isActive IS NULL OR d.isActive = :isActive)")
    List<Driver> findDriversByCriteria(@Param("city") String city,
                                       @Param("country") String country,
                                       @Param("minAge") Integer minAge,
                                       @Param("maxAge") Integer maxAge,
                                       @Param("minExperience") Integer minExperience,
                                       @Param("maxExperience") Integer maxExperience,
                                       @Param("isAvailable") Boolean isAvailable,
                                       @Param("isActive") Boolean isActive);
    
    // Tüm şehirleri bulma
    @Query("SELECT DISTINCT d.city FROM Driver d ORDER BY d.city")
    List<String> findAllCities();
    
    // Tüm ülkeleri bulma
    @Query("SELECT DISTINCT d.country FROM Driver d ORDER BY d.country")
    List<String> findAllCountries();
    
    // Aktif sürücü sayısını bulma
    long countByIsActiveTrue();
    
    // Müsait sürücü sayısını bulma
    long countByIsAvailableTrue();
    
    // Toplam sürücü sayısını bulma
    long countBy();
    
    // Şehre göre sürücü sayısını bulma
    long countByCityIgnoreCase(String city);
    
    // Ülkeye göre sürücü sayısını bulma
    long countByCountryIgnoreCase(String country);
    
    // Yaşa göre sürücü sayısını bulma
    long countByAge(Integer age);
    
    // Deneyim yılına göre sürücü sayısını bulma
    long countByExperienceYears(Integer experienceYears);
}
