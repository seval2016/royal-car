package com.royalcar.service.impl;

import com.royalcar.entity.Review;
import com.royalcar.repository.ReviewRepository;
import com.royalcar.service.ReviewService;
import com.royalcar.service.CarService;
import com.royalcar.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final CarService carService;
    private final UserService userService;

    @Override
    public List<Review> getAllReviews() {
        log.info("Fetching all reviews");
        return reviewRepository.findAll();
    }

    @Override
    public Optional<Review> getReviewById(Long id) {
        log.info("Fetching review with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid review ID");
        }
        return reviewRepository.findById(id);
    }

    @Override
    public Review createReview(Review review) {
        log.info("Creating new review for car: {}", review.getCar().getId());
        if (review == null) {
            throw new IllegalArgumentException("Review cannot be null");
        }
        
        // Fetch full entities from database
        com.royalcar.entity.Car car = carService.getCarById(review.getCar().getId())
                .orElseThrow(() -> new RuntimeException("Car not found with id: " + review.getCar().getId()));
        review.setCar(car);
        
        com.royalcar.entity.User user = userService.getUserById(review.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + review.getUser().getId()));
        review.setUser(user);
        
        validateReviewData(review);
        
        // Check if user can review this car
        if (!canUserReviewCar(review.getUser().getId(), review.getCar().getId())) {
            throw new RuntimeException("User cannot review this car");
        }
        
        return reviewRepository.save(review);
    }

    @Override
    public Review updateReview(Long id, Review review) {
        log.info("Updating review with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid review ID");
        }
        if (review == null) {
            throw new IllegalArgumentException("Review cannot be null");
        }
        Review existingReview = getReviewById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));
        
        // Update only non-null fields
        if (review.getRating() != null) {
            existingReview.setRating(review.getRating());
        }
        if (review.getComment() != null) {
            existingReview.setComment(review.getComment());
        }
        
        return reviewRepository.save(existingReview);
    }

    @Override
    public void deleteReview(Long id) {
        log.info("Deleting review with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid review ID");
        }
        Review review = getReviewById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));
        reviewRepository.delete(review);
    }

    @Override
    public List<Review> getCarReviews(Long carId) {
        log.info("Fetching reviews for car: {}", carId);
        if (carId == null || carId <= 0) {
            throw new IllegalArgumentException("Invalid car ID");
        }
        return getAllReviews().stream()
                .filter(review -> review.getCar().getId().equals(carId))
                .collect(Collectors.toList());
    }

    @Override
    public List<Review> getUserReviews(Long userId) {
        log.info("Fetching reviews by user: {}", userId);
        if (userId == null || userId <= 0) {
            throw new IllegalArgumentException("Invalid user ID");
        }
        return getAllReviews().stream()
                .filter(review -> review.getUser().getId().equals(userId))
                .collect(Collectors.toList());
    }

    @Override
    public List<Review> getReviewsByRating(Integer rating) {
        log.info("Fetching reviews by rating: {}", rating);
        if (rating == null || rating < 1 || rating > 5) {
            throw new IllegalArgumentException("Rating must be between 1 and 5");
        }
        return getAllReviews().stream()
                .filter(review -> rating.equals(review.getRating()))
                .collect(Collectors.toList());
    }

    @Override
    public List<Review> getReviewsByRatingRange(Integer minRating, Integer maxRating) {
        log.info("Fetching reviews by rating range: {}-{}", minRating, maxRating);
        if (minRating == null || maxRating == null) {
            throw new IllegalArgumentException("Min and max ratings cannot be null");
        }
        if (minRating < 1 || maxRating > 5 || minRating > maxRating) {
            throw new IllegalArgumentException("Invalid rating range");
        }
        return getAllReviews().stream()
                .filter(review -> review.getRating() >= minRating && review.getRating() <= maxRating)
                .collect(Collectors.toList());
    }

    @Override
    public double getAverageRatingForCar(Long carId) {
        log.info("Calculating average rating for car: {}", carId);
        List<Review> carReviews = getCarReviews(carId);
        if (carReviews.isEmpty()) {
            return 0.0;
        }
        return carReviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);
    }

    @Override
    public double getAverageRatingForUser(Long userId) {
        log.info("Calculating average rating for user: {}", userId);
        List<Review> userReviews = getUserReviews(userId);
        if (userReviews.isEmpty()) {
            return 0.0;
        }
        return userReviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);
    }

    @Override
    public boolean canUserReviewCar(Long userId, Long carId) {
        log.info("Checking if user {} can review car {}", userId, carId);
        // Check if user has rented this car - would require booking service integration
        return true;
    }

    @Override
    public boolean hasUserReviewedCar(Long userId, Long carId) {
        log.info("Checking if user {} has reviewed car {}", userId, carId);
        return getCarReviews(carId).stream()
                .anyMatch(review -> review.getUser().getId().equals(userId));
    }

    @Override
    public List<Review> getReviewsByDateRange(String startDate, String endDate) {
        log.info("Fetching reviews by date range: {} to {}", startDate, endDate);
        if (startDate == null || endDate == null) {
            throw new IllegalArgumentException("Start and end dates cannot be null");
        }
        
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate start = LocalDate.parse(startDate, formatter);
            LocalDate end = LocalDate.parse(endDate, formatter);
            
            if (start.isAfter(end)) {
                throw new IllegalArgumentException("Start date cannot be after end date");
            }
            
            return getAllReviews().stream()
                    .filter(review -> {
                        LocalDate reviewDate = review.getCreatedAt().toLocalDate();
                        return !reviewDate.isBefore(start) && !reviewDate.isAfter(end);
                    })
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new IllegalArgumentException("Invalid date format. Use yyyy-MM-dd");
        }
    }

    @Override
    public List<Review> getRecentReviews(int limit) {
        log.info("Fetching {} most recent reviews", limit);
        if (limit <= 0) {
            throw new IllegalArgumentException("Limit must be positive");
        }
        return getAllReviews().stream()
                .sorted((r1, r2) -> r2.getCreatedAt().compareTo(r1.getCreatedAt()))
                .limit(limit)
                .collect(Collectors.toList());
    }

    @Override
    public long getTotalReviewCount() {
        log.info("Getting total review count");
        return getAllReviews().size();
    }

    @Override
    public long getReviewCountByCar(Long carId) {
        log.info("Getting review count for car: {}", carId);
        return getCarReviews(carId).size();
    }

    @Override
    public long getReviewCountByUser(Long userId) {
        log.info("Getting review count for user: {}", userId);
        return getUserReviews(userId).size();
    }

    @Override
    public long getReviewCountByRating(Integer rating) {
        log.info("Getting review count for rating: {}", rating);
        return getReviewsByRating(rating).size();
    }

    private void validateReviewData(Review review) {
        if (review.getUser() == null) {
            throw new IllegalArgumentException("User cannot be null");
        }
        if (review.getCar() == null) {
            throw new IllegalArgumentException("Car cannot be null");
        }
        if (review.getRating() == null || review.getRating() < 1 || review.getRating() > 5) {
            throw new IllegalArgumentException("Rating must be between 1 and 5");
        }
        if (review.getComment() == null || review.getComment().trim().isEmpty()) {
            throw new IllegalArgumentException("Comment cannot be null or empty");
        }

    }
}
