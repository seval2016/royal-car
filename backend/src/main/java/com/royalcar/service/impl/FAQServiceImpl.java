package com.royalcar.service.impl;

import com.royalcar.entity.FAQ;
import com.royalcar.repository.FAQRepository;
import com.royalcar.service.FAQService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class FAQServiceImpl implements FAQService {

    private final FAQRepository faqRepository;

    @Override
    public List<FAQ> getAllFAQs() {
        log.info("Fetching all FAQs");
        return faqRepository.findAll();
    }

    @Override
    public Optional<FAQ> getFAQById(Long id) {
        log.info("Fetching FAQ with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid FAQ ID");
        }
        return faqRepository.findById(id);
    }

    @Override
    public FAQ createFAQ(FAQ faq) {
        log.info("Creating new FAQ");
        if (faq == null) {
            throw new IllegalArgumentException("FAQ cannot be null");
        }
        validateFAQData(faq);
        return faqRepository.save(faq);
    }

    @Override
    public FAQ updateFAQ(Long id, FAQ faq) {
        log.info("Updating FAQ with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid FAQ ID");
        }
        if (faq == null) {
            throw new IllegalArgumentException("FAQ cannot be null");
        }
        
        FAQ existingFAQ = getFAQById(id)
                .orElseThrow(() -> new RuntimeException("FAQ not found"));
        
        // Update only non-null fields
        if (faq.getQuestion() != null) {
            existingFAQ.setQuestion(faq.getQuestion());
        }
        if (faq.getAnswer() != null) {
            existingFAQ.setAnswer(faq.getAnswer());
        }
        if (faq.getCategory() != null) {
            existingFAQ.setCategory(faq.getCategory());
        }
        if (faq.getDisplayOrder() != null) {
            existingFAQ.setDisplayOrder(faq.getDisplayOrder());
        }
        if (faq.getIsActive() != null) {
            existingFAQ.setIsActive(faq.getIsActive());
        }
        
        return faqRepository.save(existingFAQ);
    }

    @Override
    public void deleteFAQ(Long id) {
        log.info("Deleting FAQ with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid FAQ ID");
        }
        FAQ faq = getFAQById(id)
                .orElseThrow(() -> new RuntimeException("FAQ not found"));
        faqRepository.delete(faq);
    }

    @Override
    public List<FAQ> getFAQsByCategory(String category) {
        log.info("Fetching FAQs by category: {}", category);
        if (category == null || category.trim().isEmpty()) {
            throw new IllegalArgumentException("Category cannot be null or empty");
        }
        return faqRepository.findByCategory(category);
    }

    @Override
    public List<FAQ> getActiveFAQs() {
        log.info("Fetching active FAQs");
        return faqRepository.findByIsActiveTrue();
    }

    @Override
    public List<FAQ> getActiveFAQsByCategory(String category) {
        log.info("Fetching active FAQs by category: {}", category);
        if (category == null || category.trim().isEmpty()) {
            throw new IllegalArgumentException("Category cannot be null or empty");
        }
        return faqRepository.findByCategoryAndIsActiveTrue(category);
    }

    @Override
    public List<FAQ> searchFAQs(String searchTerm) {
        log.info("Searching FAQs with term: {}", searchTerm);
        if (searchTerm == null || searchTerm.trim().isEmpty()) {
            throw new IllegalArgumentException("Search term cannot be null or empty");
        }
        return faqRepository.findByQuestionOrAnswerContainingIgnoreCase(searchTerm);
    }

    @Override
    public List<FAQ> searchFAQsByQuestion(String searchTerm) {
        log.info("Searching FAQs by question with term: {}", searchTerm);
        if (searchTerm == null || searchTerm.trim().isEmpty()) {
            throw new IllegalArgumentException("Search term cannot be null or empty");
        }
        return faqRepository.findByQuestionContainingIgnoreCase(searchTerm);
    }

    @Override
    public List<FAQ> searchFAQsByAnswer(String searchTerm) {
        log.info("Searching FAQs by answer with term: {}", searchTerm);
        if (searchTerm == null || searchTerm.trim().isEmpty()) {
            throw new IllegalArgumentException("Search term cannot be null or empty");
        }
        return faqRepository.findByAnswerContainingIgnoreCase(searchTerm);
    }

    @Override
    public List<FAQ> getFAQsOrderedByDisplayOrder() {
        log.info("Fetching FAQs ordered by display order");
        return faqRepository.findByIsActiveTrueOrderByDisplayOrderAsc();
    }

    @Override
    public List<FAQ> getFAQsByCategoryOrderedByDisplayOrder(String category) {
        log.info("Fetching FAQs by category ordered by display order: {}", category);
        if (category == null || category.trim().isEmpty()) {
            throw new IllegalArgumentException("Category cannot be null or empty");
        }
        return faqRepository.findByCategoryAndIsActiveTrueOrderByDisplayOrderAsc(category);
    }

    @Override
    public long getTotalFAQCount() {
        log.info("Getting total FAQ count");
        return faqRepository.count();
    }

    @Override
    public long getFAQCountByCategory(String category) {
        log.info("Getting FAQ count by category: {}", category);
        if (category == null || category.trim().isEmpty()) {
            throw new IllegalArgumentException("Category cannot be null or empty");
        }
        return faqRepository.findByCategory(category).size();
    }

    @Override
    public long getActiveFAQCount() {
        log.info("Getting active FAQ count");
        return faqRepository.findByIsActiveTrue().size();
    }

    private void validateFAQData(FAQ faq) {
        if (faq.getQuestion() == null || faq.getQuestion().trim().isEmpty()) {
            throw new IllegalArgumentException("Question cannot be null or empty");
        }
        if (faq.getAnswer() == null || faq.getAnswer().trim().isEmpty()) {
            throw new IllegalArgumentException("Answer cannot be null or empty");
        }
        if (faq.getCategory() == null || faq.getCategory().trim().isEmpty()) {
            throw new IllegalArgumentException("Category cannot be null or empty");
        }
    }
}
