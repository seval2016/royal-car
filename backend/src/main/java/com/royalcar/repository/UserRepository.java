package com.royalcar.repository;

import com.royalcar.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Email ile kullanıcı bulma
    Optional<User> findByEmail(String email);
    
    // Email ile kullanıcı var mı kontrol etme
    boolean existsByEmail(String email);
    
    // Kullanıcı adı ile kullanıcı bulma
    Optional<User> findByUsername(String username);
    
    // Kullanıcı adı ile kullanıcı var mı kontrol etme
    boolean existsByUsername(String username);
    
    // Telefon numarası ile kullanıcı bulma
    Optional<User> findByPhoneNumber(String phoneNumber);
    
    // Telefon numarası ile kullanıcı var mı kontrol etme
    boolean existsByPhoneNumber(String phoneNumber);
    
    // Role göre kullanıcıları bulma
    List<User> findByRole(User.UserRole role);
    
    // Aktif kullanıcıları bulma
    List<User> findByIsActiveTrue();
    
    // Pasif kullanıcıları bulma
    List<User> findByIsActiveFalse();
    
    // Ad veya soyada göre kullanıcı arama
    @Query("SELECT u FROM User u WHERE LOWER(u.firstName) LIKE LOWER(CONCAT('%', :searchTerm, '%')) " +
           "OR LOWER(u.lastName) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<User> findByFirstNameOrLastNameContainingIgnoreCase(@Param("searchTerm") String searchTerm);
    
    // Email ile kullanıcı var mı kontrol etme (ID hariç)
    @Query("SELECT COUNT(u) > 0 FROM User u WHERE u.email = :email AND u.id != :userId")
    boolean existsByEmailAndIdNot(@Param("email") String email, @Param("userId") Long userId);
    
    // Kullanıcı adı ile kullanıcı var mı kontrol etme (ID hariç)
    @Query("SELECT COUNT(u) > 0 FROM User u WHERE u.username = :username AND u.id != :userId")
    boolean existsByUsernameAndIdNot(@Param("username") String username, @Param("userId") Long userId);
    
    // Telefon numarası ile kullanıcı var mı kontrol etme (ID hariç)
    @Query("SELECT COUNT(u) > 0 FROM User u WHERE u.phoneNumber = :phoneNumber AND u.id != :userId")
    boolean existsByPhoneNumberAndIdNot(@Param("phoneNumber") String phoneNumber, @Param("userId") Long userId);
    
    // Son kayıt tarihine göre kullanıcıları bulma
    List<User> findByCreatedAtBetween(java.time.LocalDateTime startDate, java.time.LocalDateTime endDate);
    
    // Şehre göre kullanıcıları bulma
    List<User> findByCityIgnoreCase(String city);
    
    // Ülkeye göre kullanıcıları bulma
    List<User> findByCountryIgnoreCase(String country);
}
