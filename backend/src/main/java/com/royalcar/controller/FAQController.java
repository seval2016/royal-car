package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.FAQ;
import com.royalcar.service.FAQService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/faqs")
@RequiredArgsConstructor
@Tag(name = "FAQ Management", description = "Frequently Asked Questions operations")
public class FAQController {

    private final FAQService faqService;
    
    @GetMapping
    @Operation(summary = "Get all FAQs", description = "Retrieve all FAQs with optional filtering")
    public ResponseEntity<ApiResponse<List<FAQ>>> getAllFAQs(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Boolean active) {
        List<FAQ> faqs;
        if (category != null && active != null && active) {
            faqs = faqService.getActiveFAQsByCategory(category);
        } else if (category != null) {
            faqs = faqService.getFAQsByCategory(category);
        } else if (active != null && active) {
            faqs = faqService.getActiveFAQs();
        } else {
            faqs = faqService.getAllFAQs();
        }
        return ResponseEntity.ok(ApiResponse.success("FAQs retrieved successfully", faqs));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get FAQ by ID", description = "Retrieve a specific FAQ")
    public ResponseEntity<ApiResponse<FAQ>> getFAQById(@PathVariable Long id) {
        FAQ faq = faqService.getFAQById(id)
                .orElseThrow(() -> new RuntimeException("FAQ not found"));
        return ResponseEntity.ok(ApiResponse.success("FAQ retrieved successfully", faq));
    }
    
    @PostMapping
    @Operation(summary = "Create new FAQ", description = "Create a new FAQ")
    public ResponseEntity<ApiResponse<FAQ>> createFAQ(@Valid @RequestBody FAQCreateRequest request) {
        FAQ faq = convertToFAQ(request);
        FAQ createdFAQ = faqService.createFAQ(faq);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("FAQ created successfully", createdFAQ));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update FAQ", description = "Update an existing FAQ")
    public ResponseEntity<ApiResponse<FAQ>> updateFAQ(@PathVariable Long id, @Valid @RequestBody FAQUpdateRequest request) {
        FAQ faq = convertToFAQ(request);
        FAQ updatedFAQ = faqService.updateFAQ(id, faq);
        return ResponseEntity.ok(ApiResponse.success("FAQ updated successfully", updatedFAQ));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete FAQ", description = "Delete a FAQ")
    public ResponseEntity<ApiResponse<Void>> deleteFAQ(@PathVariable Long id) {
        faqService.deleteFAQ(id);
        return ResponseEntity.ok(ApiResponse.success("FAQ deleted successfully", null));
    }
    
    @GetMapping("/search")
    @Operation(summary = "Search FAQs", description = "Search FAQs by question or answer content")
    public ResponseEntity<ApiResponse<List<FAQ>>> searchFAQs(@RequestParam String q) {
        List<FAQ> faqs = faqService.searchFAQs(q);
        return ResponseEntity.ok(ApiResponse.success("Search results retrieved successfully", faqs));
    }
    
    @GetMapping("/category/{category}")
    @Operation(summary = "Get FAQs by category", description = "Get all FAQs for a specific category")
    public ResponseEntity<ApiResponse<List<FAQ>>> getFAQsByCategory(@PathVariable String category) {
        List<FAQ> faqs = faqService.getActiveFAQsByCategory(category);
        return ResponseEntity.ok(ApiResponse.success("Category FAQs retrieved successfully", faqs));
    }
    
    private FAQ convertToFAQ(FAQCreateRequest request) {
        FAQ faq = new FAQ();
        faq.setQuestion(request.getQuestion());
        faq.setAnswer(request.getAnswer());
        faq.setCategory(request.getCategory());
        faq.setDisplayOrder(request.getDisplayOrder() != null ? request.getDisplayOrder() : 0);
        faq.setIsActive(request.getIsActive() != null ? request.getIsActive() : true);
        return faq;
    }
    
    private FAQ convertToFAQ(FAQUpdateRequest request) {
        FAQ faq = new FAQ();
        if (request.getQuestion() != null) {
            faq.setQuestion(request.getQuestion());
        }
        if (request.getAnswer() != null) {
            faq.setAnswer(request.getAnswer());
        }
        if (request.getCategory() != null) {
            faq.setCategory(request.getCategory());
        }
        if (request.getDisplayOrder() != null) {
            faq.setDisplayOrder(request.getDisplayOrder());
        }
        if (request.getIsActive() != null) {
            faq.setIsActive(request.getIsActive());
        }
        return faq;
    }
    
    // DTO classes
    public static class FAQCreateRequest {
        private String question;
        private String answer;
        private String category;
        private Integer displayOrder;
        private Boolean isActive;
        
        // Getters and setters
        public String getQuestion() { return question; }
        public void setQuestion(String question) { this.question = question; }
        public String getAnswer() { return answer; }
        public void setAnswer(String answer) { this.answer = answer; }
        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }
        public Integer getDisplayOrder() { return displayOrder; }
        public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
        public Boolean getIsActive() { return isActive; }
        public void setIsActive(Boolean isActive) { this.isActive = isActive; }
    }
    
    public static class FAQUpdateRequest {
        private String question;
        private String answer;
        private String category;
        private Integer displayOrder;
        private Boolean isActive;
        
        // Getters and setters
        public String getQuestion() { return question; }
        public void setQuestion(String question) { this.question = question; }
        public String getAnswer() { return answer; }
        public void setAnswer(String answer) { this.answer = answer; }
        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }
        public Integer getDisplayOrder() { return displayOrder; }
        public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
        public Boolean getIsActive() { return isActive; }
        public void setIsActive(Boolean isActive) { this.isActive = isActive; }
    }
}
