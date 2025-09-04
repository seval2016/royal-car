package com.royalcar.service;

import com.royalcar.entity.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    
    // Basic CRUD operations
    List<Contact> getAllContacts();
    Optional<Contact> getContactById(Long id);
    Contact createContact(Contact contact);
    Contact updateContact(Long id, Contact contact);
    void deleteContact(Long id);
    
    // Status operations
    Contact markAsRead(Long id);
    Contact markAsUnread(Long id);
    List<Contact> getUnreadContacts();
    List<Contact> getReadContacts();
    
    // Business logic
    boolean isContactRead(Long id);
    void sendNotificationEmail(Contact contact);
    
    // Search and filtering
    List<Contact> getContactsByEmail(String email);
    List<Contact> getContactsBySubject(String subject);
    
    // Statistics
    long getTotalContactCount();
    long getUnreadContactCount();
    long getReadContactCount();
}
