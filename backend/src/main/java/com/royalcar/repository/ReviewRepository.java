package com.royalcar.repository;

import com.royalcar.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    // Arabaya göre değerlendirmeleri bulma
    List<Review> findByCarId(Long carId);
    
    // Kullanıcıya göre değerlendirmeleri bulma
    List<Review> findByUserId(Long userId);
    
    // Arabaya ve kullanıcıya göre değerlendirmeleri bulma
    List<Review> findByCarIdAndUserId(Long carId, Long userId);
    
    // Puana göre değerlendirmeleri bulma
    List<Review> findByRating(Integer rating);
    
    // Puan aralığına göre değerlendirmeleri bulma
    List<Review> findByRatingBetween(Integer minRating, Integer maxRating);
    
    // Minimum puandan büyük değerlendirmeleri bulma
    List<Review> findByRatingGreaterThanEqual(Integer minRating);
    
    // Maksimum puandan küçük değerlendirmeleri bulma
    List<Review> findByRatingLessThanEqual(Integer maxRating);
    
    // Tarih aralığına göre değerlendirmeleri bulma
    List<Review> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    // Belirli tarihten sonraki değerlendirmeleri bulma
    List<Review> findByCreatedAtAfter(LocalDateTime date);
    
    // Belirli tarihten önceki değerlendirmeleri bulma
    List<Review> findByCreatedAtBefore(LocalDateTime date);
    
    // Arabaya ve puana göre değerlendirmeleri bulma
    List<Review> findByCarIdAndRating(Long carId, Integer rating);
    
    // Kullanıcıya ve puana göre değerlendirmeleri bulma
    List<Review> findByUserIdAndRating(Long userId, Integer rating);
    
    // Arabaya ve tarih aralığına göre değerlendirmeleri bulma
    List<Review> findByCarIdAndCreatedAtBetween(Long carId, LocalDateTime startDate, LocalDateTime endDate);
    
    // Kullanıcıya ve tarih aralığına göre değerlendirmeleri bulma
    List<Review> findByUserIdAndCreatedAtBetween(Long userId, LocalDateTime startDate, LocalDateTime endDate);
    
    // Puana ve tarih aralığına göre değerlendirmeleri bulma
    List<Review> findByRatingAndCreatedAtBetween(Integer rating, LocalDateTime startDate, LocalDateTime endDate);
    
    // Yorum içeriğinde arama yapma
    @Query("SELECT r FROM Review r WHERE LOWER(r.comment) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Review> findByCommentContainingIgnoreCase(@Param("searchTerm") String searchTerm);
    
    // Ad, soyad veya yorumda arama yapma
    @Query("SELECT r FROM Review r WHERE " +
           "LOWER(r.user.firstName) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(r.user.lastName) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(r.comment) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Review> findBySearchTerm(@Param("searchTerm") String searchTerm);
    
    // Arabaya göre en son değerlendirmeleri bulma
    @Query("SELECT r FROM Review r WHERE r.car.id = :carId ORDER BY r.createdAt DESC")
    List<Review> findTopByCarIdOrderByCreatedAtDesc(@Param("carId") Long carId);
    
    // Kullanıcıya göre en son değerlendirmeleri bulma
    @Query("SELECT r FROM Review r WHERE r.user.id = :userId ORDER BY r.createdAt DESC")
    List<Review> findTopByUserIdOrderByCreatedAtDesc(@Param("userId") Long userId);
    
    // Puana göre en son değerlendirmeleri bulma
    @Query("SELECT r FROM Review r WHERE r.rating = :rating ORDER BY r.createdAt DESC")
    List<Review> findTopByRatingOrderByCreatedAtDesc(@Param("rating") Integer rating);
    
    // En son değerlendirmeleri bulma (tümü)
    @Query("SELECT r FROM Review r ORDER BY r.createdAt DESC")
    List<Review> findAllOrderByCreatedAtDesc();
    
    // En yüksek puanlı değerlendirmeleri bulma
    @Query("SELECT r FROM Review r ORDER BY r.rating DESC, r.createdAt DESC")
    List<Review> findAllOrderByRatingDescCreatedAtDesc();
    
    // En düşük puanlı değerlendirmeleri bulma
    @Query("SELECT r FROM Review r ORDER BY r.rating ASC, r.createdAt DESC")
    List<Review> findAllOrderByRatingAscCreatedAtDesc();
    
    // Gelişmiş arama sorgusu
    @Query("SELECT r FROM Review r WHERE " +
           "(:carId IS NULL OR r.car.id = :carId) AND " +
           "(:userId IS NULL OR r.user.id = :userId) AND " +
           "(:minRating IS NULL OR r.rating >= :minRating) AND " +
           "(:maxRating IS NULL OR r.rating <= :maxRating) AND " +
           "(:startDate IS NULL OR r.createdAt >= :startDate) AND " +
           "(:endDate IS NULL OR r.createdAt <= :endDate)")
    List<Review> findReviewsByCriteria(@Param("carId") Long carId,
                                       @Param("userId") Long userId,
                                       @Param("minRating") Integer minRating,
                                       @Param("maxRating") Integer maxRating,
                                       @Param("startDate") LocalDateTime startDate,
                                       @Param("endDate") LocalDateTime endDate);
    
    // Arabaya göre ortalama puanı bulma
    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.car.id = :carId")
    Double findAverageRatingByCarId(@Param("carId") Long carId);
    
    // Kullanıcıya göre ortalama puanı bulma
    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.user.id = :userId")
    Double findAverageRatingByUserId(@Param("userId") Long userId);
    
    // Genel ortalama puanı bulma
    @Query("SELECT AVG(r.rating) FROM Review r")
    Double findAverageRating();
    
    // Arabaya göre değerlendirme sayısını bulma
    long countByCarId(Long carId);
    
    // Kullanıcıya göre değerlendirme sayısını bulma
    long countByUserId(Long userId);
    
    // Puana göre değerlendirme sayısını bulma
    long countByRating(Integer rating);
    
    // Puan aralığına göre değerlendirme sayısını bulma
    long countByRatingBetween(Integer minRating, Integer maxRating);
    
    // Toplam değerlendirme sayısını bulma
    long countBy();
    
    // Tarih aralığına göre değerlendirme sayısını bulma
    long countByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    // Belirli tarihten sonraki değerlendirme sayısını bulma
    long countByCreatedAtAfter(LocalDateTime date);
    
    // Belirli tarihten önceki değerlendirme sayısını bulma
    long countByCreatedAtBefore(LocalDateTime date);
}
