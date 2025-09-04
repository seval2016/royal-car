package com.royalcar.repository;

import com.royalcar.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    // Kullanıcıya göre rezervasyonları bulma
    List<Booking> findByUserId(Long userId);
    
    // Arabaya göre rezervasyonları bulma
    List<Booking> findByCarId(Long carId);
    
    // Sürücüye göre rezervasyonları bulma
    List<Booking> findByDriverId(Long driverId);
    
    // Duruma göre rezervasyonları bulma
    List<Booking> findByStatus(Booking.BookingStatus status);
    
    // Durum listesine göre rezervasyonları bulma
    List<Booking> findByStatusIn(List<Booking.BookingStatus> statuses);
    
    // Alış tarihine göre rezervasyonları bulma
    List<Booking> findByPickupDate(LocalDateTime pickupDate);
    
    // Dönüş tarihine göre rezervasyonları bulma
    List<Booking> findByReturnDate(LocalDateTime returnDate);
    
    // Alış tarihi aralığına göre rezervasyonları bulma
    List<Booking> findByPickupDateBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    // Dönüş tarihi aralığına göre rezervasyonları bulma
    List<Booking> findByReturnDateBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    // Alış tarihinden sonraki rezervasyonları bulma
    List<Booking> findByPickupDateAfter(LocalDateTime date);
    
    // Dönüş tarihinden önceki rezervasyonları bulma
    List<Booking> findByReturnDateBefore(LocalDateTime date);
    
    // Sürücü gereksinimine göre rezervasyonları bulma
    List<Booking> findByDriverRequired(Boolean driverRequired);
    
    // Kullanıcı ve duruma göre rezervasyonları bulma
    List<Booking> findByUserIdAndStatus(Long userId, Booking.BookingStatus status);
    
    // Araba ve duruma göre rezervasyonları bulma
    List<Booking> findByCarIdAndStatus(Long carId, Booking.BookingStatus status);
    
    // Sürücü ve duruma göre rezervasyonları bulma
    List<Booking> findByDriverIdAndStatus(Long driverId, Booking.BookingStatus status);
    
    // Kullanıcı ve tarih aralığına göre rezervasyonları bulma
    @Query("SELECT b FROM Booking b WHERE b.user.id = :userId AND " +
           "((b.pickupDate BETWEEN :startDate AND :endDate) OR " +
           "(b.returnDate BETWEEN :startDate AND :endDate) OR " +
           "(b.pickupDate <= :startDate AND b.returnDate >= :endDate))")
    List<Booking> findByUserIdAndDateRange(@Param("userId") Long userId,
                                          @Param("startDate") LocalDateTime startDate,
                                          @Param("endDate") LocalDateTime endDate);
    
    // Araba ve tarih aralığına göre rezervasyonları bulma
    @Query("SELECT b FROM Booking b WHERE b.car.id = :carId AND " +
           "((b.pickupDate BETWEEN :startDate AND :endDate) OR " +
           "(b.returnDate BETWEEN :startDate AND :endDate) OR " +
           "(b.pickupDate <= :startDate AND b.returnDate >= :endDate))")
    List<Booking> findByCarIdAndDateRange(@Param("carId") Long carId,
                                         @Param("startDate") LocalDateTime startDate,
                                         @Param("endDate") LocalDateTime endDate);
    
    // Sürücü ve tarih aralığına göre rezervasyonları bulma
    @Query("SELECT b FROM Booking b WHERE b.driver.id = :driverId AND " +
           "((b.pickupDate BETWEEN :startDate AND :endDate) OR " +
           "(b.returnDate BETWEEN :startDate AND :endDate) OR " +
           "(b.pickupDate <= :startDate AND b.returnDate >= :endDate))")
    List<Booking> findByDriverIdAndDateRange(@Param("driverId") Long driverId,
                                            @Param("startDate") LocalDateTime startDate,
                                            @Param("endDate") LocalDateTime endDate);
    
    // Çakışan rezervasyonları bulma (araba için)
    @Query("SELECT b FROM Booking b WHERE b.car.id = :carId AND b.status IN ('CONFIRMED', 'ACTIVE') AND " +
           "((b.pickupDate BETWEEN :pickupDate AND :returnDate) OR " +
           "(b.returnDate BETWEEN :pickupDate AND :returnDate) OR " +
           "(b.pickupDate <= :pickupDate AND b.returnDate >= :returnDate))")
    List<Booking> findConflictingBookingsForCar(@Param("carId") Long carId,
                                                @Param("pickupDate") LocalDateTime pickupDate,
                                                @Param("returnDate") LocalDateTime returnDate);
    
    // Çakışan rezervasyonları bulma (sürücü için)
    @Query("SELECT b FROM Booking b WHERE b.driver.id = :driverId AND b.status IN ('CONFIRMED', 'ACTIVE') AND " +
           "((b.pickupDate BETWEEN :pickupDate AND :returnDate) OR " +
           "(b.returnDate BETWEEN :pickupDate AND :returnDate) OR " +
           "(b.pickupDate <= :pickupDate AND b.returnDate >= :returnDate))")
    List<Booking> findConflictingBookingsForDriver(@Param("driverId") Long driverId,
                                                   @Param("pickupDate") LocalDateTime pickupDate,
                                                   @Param("returnDate") LocalDateTime returnDate);
    
    // Aktif rezervasyonları bulma
    @Query("SELECT b FROM Booking b WHERE b.status IN ('CONFIRMED', 'ACTIVE')")
    List<Booking> findActiveBookings();
    
    // Gelecek rezervasyonları bulma
    @Query("SELECT b FROM Booking b WHERE b.pickupDate > :currentDate")
    List<Booking> findUpcomingBookings(@Param("currentDate") LocalDateTime currentDate);
    
    // Geçmiş rezervasyonları bulma
    @Query("SELECT b FROM Booking b WHERE b.returnDate < :currentDate")
    List<Booking> findPastBookings(@Param("currentDate") LocalDateTime currentDate);
    
    // Toplam fiyat aralığına göre rezervasyonları bulma
    @Query("SELECT b FROM Booking b WHERE b.totalPrice BETWEEN :minPrice AND :maxPrice")
    List<Booking> findByTotalPriceBetween(@Param("minPrice") java.math.BigDecimal minPrice,
                                         @Param("maxPrice") java.math.BigDecimal maxPrice);
    
    // Duruma göre rezervasyon sayısını bulma
    long countByStatus(Booking.BookingStatus status);
    
    // Kullanıcıya göre rezervasyon sayısını bulma
    long countByUserId(Long userId);
    
    // Arabaya göre rezervasyon sayısını bulma
    long countByCarId(Long carId);
    
    // Sürücüye göre rezervasyon sayısını bulma
    long countByDriverId(Long driverId);
    
    // Sürücü gereksinimine göre rezervasyon sayısını bulma
    long countByDriverRequired(Boolean driverRequired);
}
