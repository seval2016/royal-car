package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.Contact;
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

    // TODO: Service injection will be added later
    
    @GetMapping
    @Operation(summary = "Get all contacts", description = "Retrieve all contact form submissions (admin only)")
    public ResponseEntity<ApiResponse<List<Contact>>> getAllContacts(
            @RequestParam(required = false) Boolean isRead) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Contacts retrieved successfully", null));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get contact by ID", description = "Retrieve a specific contact submission")
    public ResponseEntity<ApiResponse<Contact>> getContactById(@PathVariable Long id) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Contact retrieved successfully", null));
    }
    
    @PostMapping
    @Operation(summary = "Submit contact form", description = "Submit a new contact form")
    public ResponseEntity<ApiResponse<Contact>> submitContact(@Valid @RequestBody ContactSubmitRequest request) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Contact form submitted successfully", null));
    }
    
    @PutMapping("/{id}/read")
    @Operation(summary = "Mark contact as read", description = "Mark a contact submission as read")
    public ResponseEntity<ApiResponse<Contact>> markAsRead(@PathVariable Long id) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Contact marked as read", null));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete contact", description = "Delete a contact submission")
    public ResponseEntity<ApiResponse<Void>> deleteContact(@PathVariable Long id) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Contact deleted successfully", null));
    }
    
    @GetMapping("/unread")
    @Operation(summary = "Get unread contacts", description = "Get all unread contact submissions")
    public ResponseEntity<ApiResponse<List<Contact>>> getUnreadContacts() {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Unread contacts retrieved successfully", null));
    }
    
    // TODO: DTO classes will be created later
    public static class ContactSubmitRequest {
        private String name;
        private String email;
        private String phone;
        private String subject;
        private String message;
        
        // Getters and setters will be added
    }
}
