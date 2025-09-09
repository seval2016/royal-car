package com.royalcar.service;

import com.royalcar.entity.FAQ;

import java.util.List;
import java.util.Optional;

public interface FAQService {
    
    // Basic CRUD operations
    List<FAQ> getAllFAQs();
    Optional<FAQ> getFAQById(Long id);
    FAQ createFAQ(FAQ faq);
    FAQ updateFAQ(Long id, FAQ faq);
    void deleteFAQ(Long id);
    
    // Category operations
    List<FAQ> getFAQsByCategory(String category);
    List<FAQ> getActiveFAQs();
    List<FAQ> getActiveFAQsByCategory(String category);
    
    // Search operations
    List<FAQ> searchFAQs(String searchTerm);
    List<FAQ> searchFAQsByQuestion(String searchTerm);
    List<FAQ> searchFAQsByAnswer(String searchTerm);
    
    // Ordering operations
    List<FAQ> getFAQsOrderedByDisplayOrder();
    List<FAQ> getFAQsByCategoryOrderedByDisplayOrder(String category);
    
    // Statistics
    long getTotalFAQCount();
    long getFAQCountByCategory(String category);
    long getActiveFAQCount();
}
