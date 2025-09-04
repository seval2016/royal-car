package com.royalcar.repository;

import com.royalcar.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

    // Email ile iletişim formlarını bulma
    List<Contact> findByEmail(String email);
    
    // Telefon numarası ile iletişim formlarını bulma
    List<Contact> findByPhoneNumber(String phoneNumber);
    
    // Ad ile iletişim formlarını bulma
    List<Contact> findByFirstNameIgnoreCase(String firstName);
    
    // Soyad ile iletişim formlarını bulma
    List<Contact> findByLastNameIgnoreCase(String lastName);
    
    // Ad ve soyad ile iletişim formlarını bulma
    List<Contact> findByFirstNameIgnoreCaseAndLastNameIgnoreCase(String firstName, String lastName);
    
    // Duruma göre iletişim formlarını bulma
    List<Contact> findByStatus(Contact.ContactStatus status);
    
    // Durum listesine göre iletişim formlarını bulma
    List<Contact> findByStatusIn(List<Contact.ContactStatus> statuses);
    
    // Yeni (okunmamış) iletişim formlarını bulma
    List<Contact> findByStatusNew();
    
    // Okunmuş iletişim formlarını bulma
    List<Contact> findByStatusRead();
    
    // Yanıtlanmış iletişim formlarını bulma
    List<Contact> findByStatusReplied();
    
    // Kapanmış iletişim formlarını bulma
    List<Contact> findByStatusClosed();
    
    // Konuya göre iletişim formlarını bulma
    List<Contact> findBySubjectIgnoreCase(String subject);
    
    // Konu içeriğinde arama yapma
    @Query("SELECT c FROM Contact c WHERE LOWER(c.subject) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Contact> findBySubjectContainingIgnoreCase(@Param("searchTerm") String searchTerm);
    
    // Mesaj içeriğinde arama yapma
    @Query("SELECT c FROM Contact c WHERE LOWER(c.message) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Contact> findByMessageContainingIgnoreCase(@Param("searchTerm") String searchTerm);
    
    // Ad, soyad, konu veya mesajda arama yapma
    @Query("SELECT c FROM Contact c WHERE " +
           "LOWER(c.firstName) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(c.lastName) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(c.subject) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(c.message) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Contact> findBySearchTerm(@Param("searchTerm") String searchTerm);
    
    // Tarih aralığına göre iletişim formlarını bulma
    List<Contact> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    // Belirli tarihten sonraki iletişim formlarını bulma
    List<Contact> findByCreatedAtAfter(LocalDateTime date);
    
    // Belirli tarihten önceki iletişim formlarını bulma
    List<Contact> findByCreatedAtBefore(LocalDateTime date);
    
    // Okunma tarihine göre iletişim formlarını bulma
    List<Contact> findByReadAtBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    // Okunmamış iletişim formlarını bulma (readAt null olanlar)
    List<Contact> findByReadAtIsNull();
    
    // Okunmuş iletişim formlarını bulma (readAt null olmayanlar)
    List<Contact> findByReadAtIsNotNull();
    
    // Email ve duruma göre iletişim formlarını bulma
    List<Contact> findByEmailAndStatus(String email, Contact.ContactStatus status);
    
    // Telefon numarası ve duruma göre iletişim formlarını bulma
    List<Contact> findByPhoneNumberAndStatus(String phoneNumber, Contact.ContactStatus status);
    
    // Ad ve duruma göre iletişim formlarını bulma
    List<Contact> findByFirstNameIgnoreCaseAndStatus(String firstName, Contact.ContactStatus status);
    
    // Soyad ve duruma göre iletişim formlarını bulma
    List<Contact> findByLastNameIgnoreCaseAndStatus(String lastName, Contact.ContactStatus status);
    
    // Konu ve duruma göre iletişim formlarını bulma
    List<Contact> findBySubjectIgnoreCaseAndStatus(String subject, Contact.ContactStatus status);
    
    // Tarih ve duruma göre iletişim formlarını bulma
    List<Contact> findByCreatedAtBetweenAndStatus(LocalDateTime startDate, LocalDateTime endDate, Contact.ContactStatus status);
    
    // Gelişmiş arama sorgusu
    @Query("SELECT c FROM Contact c WHERE " +
           "(:firstName IS NULL OR LOWER(c.firstName) LIKE LOWER(CONCAT('%', :firstName, '%'))) AND " +
           "(:lastName IS NULL OR LOWER(c.lastName) LIKE LOWER(CONCAT('%', :lastName, '%'))) AND " +
           "(:email IS NULL OR LOWER(c.email) LIKE LOWER(CONCAT('%', :email, '%'))) AND " +
           "(:phoneNumber IS NULL OR c.phoneNumber LIKE CONCAT('%', :phoneNumber, '%')) AND " +
           "(:subject IS NULL OR LOWER(c.subject) LIKE LOWER(CONCAT('%', :subject, '%'))) AND " +
           "(:status IS NULL OR c.status = :status) AND " +
           "(:startDate IS NULL OR c.createdAt >= :startDate) AND " +
           "(:endDate IS NULL OR c.createdAt <= :endDate)")
    List<Contact> findContactsByCriteria(@Param("firstName") String firstName,
                                        @Param("lastName") String lastName,
                                        @Param("email") String email,
                                        @Param("phoneNumber") String phoneNumber,
                                        @Param("subject") String subject,
                                        @Param("status") Contact.ContactStatus status,
                                        @Param("startDate") LocalDateTime startDate,
                                        @Param("endDate") LocalDateTime endDate);
    
    // Duruma göre iletişim formu sayısını bulma
    long countByStatus(Contact.ContactStatus status);
    
    // Toplam iletişim formu sayısını bulma
    long countBy();
    
    // Email ile iletişim formu sayısını bulma
    long countByEmail(String email);
    
    // Telefon numarası ile iletişim formu sayısını bulma
    long countByPhoneNumber(String phoneNumber);
    
    // Ad ile iletişim formu sayısını bulma
    long countByFirstNameIgnoreCase(String firstName);
    
    // Soyad ile iletişim formu sayısını bulma
    long countByLastNameIgnoreCase(String lastName);
    
    // Konu ile iletişim formu sayısını bulma
    long countBySubjectIgnoreCase(String subject);
    
    // Tarih aralığına göre iletişim formu sayısını bulma
    long countByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    // Okunmamış iletişim formu sayısını bulma
    long countByReadAtIsNull();
    
    // Okunmuş iletişim formu sayısını bulma
    long countByReadAtIsNotNull();
}
