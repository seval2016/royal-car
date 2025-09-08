package com.royalcar.service.impl;

import com.royalcar.entity.Contact;
import com.royalcar.repository.ContactRepository;
import com.royalcar.service.ContactService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    @Override
    public List<Contact> getAllContacts() {
        log.info("Fetching all contacts");
        return contactRepository.findAll();
    }

    @Override
    public Optional<Contact> getContactById(Long id) {
        log.info("Fetching contact with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid contact ID");
        }
        return contactRepository.findById(id);
    }

    @Override
    public Contact createContact(Contact contact) {
        log.info("Creating new contact from: {}", contact.getEmail());
        if (contact == null) {
            throw new IllegalArgumentException("Contact cannot be null");
        }
        validateContactData(contact);
        
        // Send notification email
        sendNotificationEmail(contact);
        
        return contactRepository.save(contact);
    }

    @Override
    public Contact updateContact(Long id, Contact contact) {
        log.info("Updating contact with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid contact ID");
        }
        if (contact == null) {
            throw new IllegalArgumentException("Contact cannot be null");
        }
        Contact existingContact = getContactById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        validateContactData(contact);
        // Update fields
        existingContact.setName(contact.getName());
        existingContact.setEmail(contact.getEmail());
        existingContact.setPhone(contact.getPhone());
        existingContact.setSubject(contact.getSubject());
        existingContact.setMessage(contact.getMessage());
        existingContact.setStatus(contact.getStatus());
        existingContact.setReadAt(contact.getReadAt());
        
        return contactRepository.save(existingContact);
    }

    @Override
    public void deleteContact(Long id) {
        log.info("Deleting contact with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid contact ID");
        }
        Contact contact = getContactById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        contactRepository.delete(contact);
    }

    @Override
    public Contact markAsRead(Long id) {
        log.info("Marking contact as read: {}", id);
        Contact contact = getContactById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        contact.setStatus(Contact.ContactStatus.READ);
        contact.setReadAt(LocalDateTime.now());
        return contactRepository.save(contact);
    }

    @Override
    public Contact markAsUnread(Long id) {
        log.info("Marking contact as unread: {}", id);
        Contact contact = getContactById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        contact.setStatus(Contact.ContactStatus.NEW);
        contact.setReadAt(null);
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> getUnreadContacts() {
        log.info("Fetching unread contacts");
        return getAllContacts().stream()
                .filter(contact -> contact.getStatus() == Contact.ContactStatus.NEW)
                .collect(Collectors.toList());
    }

    @Override
    public List<Contact> getReadContacts() {
        log.info("Fetching read contacts");
        return getAllContacts().stream()
                .filter(contact -> contact.getStatus() != Contact.ContactStatus.NEW)
                .collect(Collectors.toList());
    }

    @Override
    public boolean isContactRead(Long id) {
        log.info("Checking if contact is read: {}", id);
        Contact contact = getContactById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        return contact.getStatus() != Contact.ContactStatus.NEW;
    }

    @Override
    public void sendNotificationEmail(Contact contact) {
        log.info("Sending notification email for contact: {}", contact.getEmail());
        // Email service implementation - would send notification to admin
        log.info("Email notification would be sent to admin for contact from: {}", contact.getEmail());
    }

    @Override
    public List<Contact> getContactsByEmail(String email) {
        log.info("Fetching contacts by email: {}", email);
        if (email == null || email.trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        return getAllContacts().stream()
                .filter(contact -> email.equalsIgnoreCase(contact.getEmail()))
                .collect(Collectors.toList());
    }

    @Override
    public List<Contact> getContactsBySubject(String subject) {
        log.info("Fetching contacts by subject: {}", subject);
        if (subject == null || subject.trim().isEmpty()) {
            throw new IllegalArgumentException("Subject cannot be null or empty");
        }
        return getAllContacts().stream()
                .filter(contact -> subject.equalsIgnoreCase(contact.getSubject()))
                .collect(Collectors.toList());
    }

    @Override
    public long getTotalContactCount() {
        log.info("Getting total contact count");
        return getAllContacts().size();
    }

    @Override
    public long getUnreadContactCount() {
        log.info("Getting unread contact count");
        return getUnreadContacts().size();
    }

    @Override
    public long getReadContactCount() {
        log.info("Getting read contact count");
        return getReadContacts().size();
    }

    private void validateContactData(Contact contact) {
        if (contact.getName() == null || contact.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }
        if (contact.getEmail() == null || contact.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        if (contact.getSubject() == null || contact.getSubject().trim().isEmpty()) {
            throw new IllegalArgumentException("Subject cannot be null or empty");
        }
        if (contact.getMessage() == null || contact.getMessage().trim().isEmpty()) {
            throw new IllegalArgumentException("Message cannot be null or empty");
        }
    }
}
