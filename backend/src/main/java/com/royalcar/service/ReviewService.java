package com.royalcar.service;

import com.royalcar.entity.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    
    // Basic CRUD operations
    List<Review> getAllReviews();
    Optional<Review> getReviewById(Long id);
    Review createReview(Review review);
    Review updateReview(Long id, Review review);
    void deleteReview(Long id);
    
    // Entity-specific operations
    List<Review> getCarReviews(Long carId);
    List<Review> getUserReviews(Long userId);
    
    // Rating operations
    List<Review> getReviewsByRating(Integer rating);
    List<Review> getReviewsByRatingRange(Integer minRating, Integer maxRating);
    double getAverageRatingForCar(Long carId);
    double getAverageRatingForUser(Long userId);
    
    // Business logic
    boolean canUserReviewCar(Long userId, Long carId);
    boolean hasUserReviewedCar(Long userId, Long carId);
    
    // Search and filtering
    List<Review> getReviewsByDateRange(String startDate, String endDate);
    List<Review> getRecentReviews(int limit);
    
    // Statistics
    long getTotalReviewCount();
    long getReviewCountByCar(Long carId);
    long getReviewCountByUser(Long userId);
    long getReviewCountByRating(Integer rating);
}
