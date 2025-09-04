package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.entity.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Tag(name = "User Management", description = "User registration, authentication and profile operations")
public class UserController {

    // TODO: Service injection will be added later
    
    @PostMapping("/register")
    @Operation(summary = "Register new user", description = "Create a new user account")
    public ResponseEntity<ApiResponse<User>> registerUser(@Valid @RequestBody UserRegistrationRequest request) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("User registered successfully", null));
    }
    
    @PostMapping("/login")
    @Operation(summary = "User login", description = "Authenticate user and return token")
    public ResponseEntity<ApiResponse<String>> loginUser(@Valid @RequestBody UserLoginRequest request) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Login successful", "jwt-token-here"));
    }
    
    @GetMapping("/profile")
    @Operation(summary = "Get user profile", description = "Retrieve current user profile information")
    public ResponseEntity<ApiResponse<User>> getUserProfile() {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Profile retrieved successfully", null));
    }
    
    @PutMapping("/profile")
    @Operation(summary = "Update user profile", description = "Update current user profile information")
    public ResponseEntity<ApiResponse<User>> updateUserProfile(@Valid @RequestBody UserUpdateRequest request) {
        // TODO: Implementation will be added with service layer
        return ResponseEntity.ok(ApiResponse.success("Profile updated successfully", null));
    }
    
    // TODO: DTO classes will be created later
    public static class UserRegistrationRequest {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private String phone;
        
        // Getters and setters will be added
    }
    
    public static class UserLoginRequest {
        private String email;
        private String password;
        
        // Getters and setters will be added
    }
    
    public static class UserUpdateRequest {
        private String firstName;
        private String lastName;
        private String phone;
        
        // Getters and setters will be added
    }
}
