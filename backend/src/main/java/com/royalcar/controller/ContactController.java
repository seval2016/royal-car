package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.Contact;
import com.royalcar.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@RequiredArgsConstructor
@Tag(name = "Contact Management", description = "Contact form submissions and inquiries")
public class ContactController {

    private final ContactService contactService;
    
    @GetMapping
    @Operation(summary = "Get all contacts", description = "Retrieve all contact form submissions (admin only)")
    public ResponseEntity<ApiResponse<List<Contact>>> getAllContacts(
            @RequestParam(required = false) Boolean isRead) {
        List<Contact> contacts = isRead != null ? 
                (isRead ? contactService.getReadContacts() : contactService.getUnreadContacts()) :
                contactService.getAllContacts();
        return ResponseEntity.ok(ApiResponse.success("Contacts retrieved successfully", contacts));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get contact by ID", description = "Retrieve a specific contact submission")
    public ResponseEntity<ApiResponse<Contact>> getContactById(@PathVariable Long id) {
        Contact contact = contactService.getContactById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        return ResponseEntity.ok(ApiResponse.success("Contact retrieved successfully", contact));
    }
    
    @PostMapping
    @Operation(summary = "Submit contact form", description = "Submit a new contact form")
    public ResponseEntity<ApiResponse<Contact>> submitContact(@Valid @RequestBody ContactSubmitRequest request) {
        Contact contact = convertToContact(request);
        Contact createdContact = contactService.createContact(contact);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Contact form submitted successfully", createdContact));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update contact", description = "Update an existing contact submission")
    public ResponseEntity<ApiResponse<Contact>> updateContact(@PathVariable Long id, @Valid @RequestBody ContactUpdateRequest request) {
        Contact contact = convertToContact(request);
        Contact updatedContact = contactService.updateContact(id, contact);
        return ResponseEntity.ok(ApiResponse.success("Contact updated successfully", updatedContact));
    }
    
    @PutMapping("/{id}/read")
    @Operation(summary = "Mark contact as read", description = "Mark a contact submission as read")
    public ResponseEntity<ApiResponse<Contact>> markAsRead(@PathVariable Long id) {
        Contact contact = contactService.markAsRead(id);
        return ResponseEntity.ok(ApiResponse.success("Contact marked as read", contact));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete contact", description = "Delete a contact submission")
    public ResponseEntity<ApiResponse<Void>> deleteContact(@PathVariable Long id) {
        contactService.deleteContact(id);
        return ResponseEntity.ok(ApiResponse.success("Contact deleted successfully", null));
    }
    
    @GetMapping("/unread")
    @Operation(summary = "Get unread contacts", description = "Get all unread contact submissions")
    public ResponseEntity<ApiResponse<List<Contact>>> getUnreadContacts() {
        List<Contact> contacts = contactService.getUnreadContacts();
        return ResponseEntity.ok(ApiResponse.success("Unread contacts retrieved successfully", contacts));
    }
    
    private Contact convertToContact(ContactSubmitRequest request) {
        Contact contact = new Contact();
        contact.setName(request.getName());
        contact.setEmail(request.getEmail());
        contact.setPhone(request.getPhone());
        contact.setSubject(request.getSubject());
        contact.setMessage(request.getMessage());
        return contact;
    }
    
    private Contact convertToContact(ContactUpdateRequest request) {
        Contact contact = new Contact();
        if (request.getName() != null) {
            contact.setName(request.getName());
        }
        if (request.getEmail() != null) {
            contact.setEmail(request.getEmail());
        }
        if (request.getPhone() != null) {
            contact.setPhone(request.getPhone());
        }
        if (request.getSubject() != null) {
            contact.setSubject(request.getSubject());
        }
        if (request.getMessage() != null) {
            contact.setMessage(request.getMessage());
        }
        if (request.getStatus() != null) {
            contact.setStatus(com.royalcar.entity.Contact.ContactStatus.valueOf(request.getStatus().toUpperCase()));
        }
        if (request.getAdminReply() != null) {
            contact.setAdminReply(request.getAdminReply());
        }
        return contact;
    }
    
    // DTO classes
    public static class ContactSubmitRequest {
        private String name;
        private String email;
        private String phone;
        private String subject;
        private String message;
        
        // Getters and setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getSubject() { return subject; }
        public void setSubject(String subject) { this.subject = subject; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
    
    public static class ContactUpdateRequest {
        private String name;
        private String email;
        private String phone;
        private String subject;
        private String message;
        private String status;
        private String adminReply;
        
        // Getters and setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getSubject() { return subject; }
        public void setSubject(String subject) { this.subject = subject; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        public String getStatus() { return status; }
        public void setStatus(String status) { this.status = status; }
        public String getAdminReply() { return adminReply; }
        public void setAdminReply(String adminReply) { this.adminReply = adminReply; }
    }
}
