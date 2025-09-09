package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.Review;
import com.royalcar.service.ReviewService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
@Tag(name = "Review Management", description = "Customer reviews and ratings")
public class ReviewController {

    private final ReviewService reviewService;
    
    @GetMapping
    @Operation(summary = "Get all reviews", description = "Retrieve all customer reviews")
    public ResponseEntity<ApiResponse<List<Review>>> getAllReviews(
            @RequestParam(required = false) Long carId,
            @RequestParam(required = false) Integer rating) {
        List<Review> reviews = carId != null ? 
                reviewService.getCarReviews(carId) : 
                reviewService.getAllReviews();
        if (rating != null) {
            reviews = reviews.stream()
                    .filter(review -> review.getRating().equals(rating))
                    .toList();
        }
        return ResponseEntity.ok(ApiResponse.success("Reviews retrieved successfully", reviews));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get review by ID", description = "Retrieve a specific review")
    public ResponseEntity<ApiResponse<Review>> getReviewById(@PathVariable Long id) {
        Review review = reviewService.getReviewById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));
        return ResponseEntity.ok(ApiResponse.success("Review retrieved successfully", review));
    }
    
    @PostMapping
    @Operation(summary = "Create new review", description = "Create a new customer review")
    public ResponseEntity<ApiResponse<Review>> createReview(@Valid @RequestBody ReviewCreateRequest request) {
        Review review = convertToReview(request);
        Review createdReview = reviewService.createReview(review);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Review created successfully", createdReview));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update review", description = "Update an existing review")
    public ResponseEntity<ApiResponse<Review>> updateReview(@PathVariable Long id, @Valid @RequestBody ReviewUpdateRequest request) {
        Review review = convertToReview(request);
        Review updatedReview = reviewService.updateReview(id, review);
        return ResponseEntity.ok(ApiResponse.success("Review updated successfully", updatedReview));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete review", description = "Delete a review")
    public ResponseEntity<ApiResponse<Void>> deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok(ApiResponse.success("Review deleted successfully", null));
    }
    
    @GetMapping("/car/{carId}")
    @Operation(summary = "Get car reviews", description = "Get all reviews for a specific car")
    public ResponseEntity<ApiResponse<List<Review>>> getCarReviews(@PathVariable Long carId) {
        List<Review> reviews = reviewService.getCarReviews(carId);
        return ResponseEntity.ok(ApiResponse.success("Car reviews retrieved successfully", reviews));
    }
    
    @GetMapping("/user/{userId}")
    @Operation(summary = "Get user reviews", description = "Get all reviews by a specific user")
    public ResponseEntity<ApiResponse<List<Review>>> getUserReviews(@PathVariable Long userId) {
        List<Review> reviews = reviewService.getUserReviews(userId);
        return ResponseEntity.ok(ApiResponse.success("User reviews retrieved successfully", reviews));
    }
    
    private Review convertToReview(ReviewCreateRequest request) {
        Review review = new Review();
        review.setRating(request.getRating());
        review.setComment(request.getComment());
        review.setReviewDate(java.time.LocalDateTime.now());
        
        // Set relationships - let the service layer handle entity fetching
        if (request.getCarId() != null) {
            com.royalcar.entity.Car car = new com.royalcar.entity.Car();
            car.setId(request.getCarId());
            review.setCar(car);
        }
        
        // For now, we'll use a default user ID (you might want to get this from authentication)
        com.royalcar.entity.User user = new com.royalcar.entity.User();
        user.setId(1L); // Default user ID
        review.setUser(user);
        
        return review;
    }
    
    private Review convertToReview(ReviewUpdateRequest request) {
        Review review = new Review();
        if (request.getRating() != null) {
            review.setRating(request.getRating());
        }
        if (request.getComment() != null) {
            review.setComment(request.getComment());
        }
        return review;
    }
    
    // DTO classes
    public static class ReviewCreateRequest {
        private Long carId;
        private Integer rating;
        private String comment;
        private String title;
        
        // Getters and setters
        public Long getCarId() { return carId; }
        public void setCarId(Long carId) { this.carId = carId; }
        public Integer getRating() { return rating; }
        public void setRating(Integer rating) { this.rating = rating; }
        public String getComment() { return comment; }
        public void setComment(String comment) { this.comment = comment; }
        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
    }
    
    public static class ReviewUpdateRequest {
        private Integer rating;
        private String comment;
        private String title;
        
        // Getters and setters
        public Integer getRating() { return rating; }
        public void setRating(Integer rating) { this.rating = rating; }
        public String getComment() { return comment; }
        public void setComment(String comment) { this.comment = comment; }
        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
    }
}
