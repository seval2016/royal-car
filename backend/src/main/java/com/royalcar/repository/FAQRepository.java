package com.royalcar.repository;

import com.royalcar.entity.FAQ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FAQRepository extends JpaRepository<FAQ, Long> {

    // Kategoriye göre FAQ'ları bulma
    List<FAQ> findByCategory(String category);
    
    // Aktif FAQ'ları bulma
    List<FAQ> findByIsActiveTrue();
    
    // Kategoriye ve aktif duruma göre FAQ'ları bulma
    List<FAQ> findByCategoryAndIsActiveTrue(String category);
    
    // Display order'a göre sıralama
    List<FAQ> findByIsActiveTrueOrderByDisplayOrderAsc();
    
    // Kategoriye göre sıralama
    List<FAQ> findByCategoryAndIsActiveTrueOrderByDisplayOrderAsc(String category);
    
    // Soru içeriğinde arama
    @Query("SELECT f FROM FAQ f WHERE LOWER(f.question) LIKE LOWER(CONCAT('%', :searchTerm, '%')) AND f.isActive = true")
    List<FAQ> findByQuestionContainingIgnoreCase(@Param("searchTerm") String searchTerm);
    
    // Cevap içeriğinde arama
    @Query("SELECT f FROM FAQ f WHERE LOWER(f.answer) LIKE LOWER(CONCAT('%', :searchTerm, '%')) AND f.isActive = true")
    List<FAQ> findByAnswerContainingIgnoreCase(@Param("searchTerm") String searchTerm);
    
    // Soru veya cevap içeriğinde arama
    @Query("SELECT f FROM FAQ f WHERE " +
           "(LOWER(f.question) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(f.answer) LIKE LOWER(CONCAT('%', :searchTerm, '%'))) AND f.isActive = true")
    List<FAQ> findByQuestionOrAnswerContainingIgnoreCase(@Param("searchTerm") String searchTerm);
}
