package com.royalcar.controller;

import com.royalcar.common.dto.ApiResponse;
import com.royalcar.dto.request.LoginRequest;
import com.royalcar.dto.request.RegisterRequest;
import com.royalcar.dto.response.AuthenticationResponse;
import com.royalcar.dto.response.UserResponse;
import com.royalcar.entity.User;
import com.royalcar.service.AuthService;
import com.royalcar.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Tag(name = "User Management", description = "User registration, authentication and profile operations")
public class UserController {

    private final AuthService authService;
    private final UserService userService;
    
    @GetMapping
    @Operation(summary = "Get all users", description = "Retrieve all users")
    public ResponseEntity<ApiResponse<List<User>>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(ApiResponse.success("Users retrieved successfully", users));
    }
    
    @PostMapping("/register")
    @Operation(summary = "Register new user", description = "Create a new user account")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> registerUser(@Valid @RequestBody UserRegistrationRequest request) {
        RegisterRequest registerRequest = RegisterRequest.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phoneNumber(request.getPhone())
                .build();
        AuthenticationResponse response = authService.register(registerRequest);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("User registered successfully", response));
    }
    
    @PostMapping("/login")
    @Operation(summary = "User login", description = "Authenticate user and return token")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> loginUser(@Valid @RequestBody UserLoginRequest request) {
        LoginRequest loginRequest = LoginRequest.builder()
                .usernameOrEmail(request.getEmail())
                .password(request.getPassword())
                .build();
        AuthenticationResponse response = authService.login(loginRequest);
        return ResponseEntity.ok(ApiResponse.success("Login successful", response));
    }
    
    @GetMapping("/profile")
    @Operation(summary = "Get user profile", description = "Retrieve current user profile information")
    public ResponseEntity<ApiResponse<UserResponse>> getUserProfile() {
        UserResponse user = authService.getCurrentUser();
        return ResponseEntity.ok(ApiResponse.success("Profile retrieved successfully", user));
    }
    
    @PutMapping("/profile")
    @Operation(summary = "Update user profile", description = "Update current user profile information")
    public ResponseEntity<ApiResponse<UserResponse>> updateUserProfile(@Valid @RequestBody UserUpdateRequest request) {
        // Get current user ID from auth service
        UserResponse currentUser = authService.getCurrentUser();
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setPhone(request.getPhone());
        User updatedUser = userService.updateUserProfile(currentUser.getId(), user);
        // Convert User to UserResponse
        UserResponse userResponse = UserResponse.builder()
                .id(updatedUser.getId())
                .firstName(updatedUser.getFirstName())
                .lastName(updatedUser.getLastName())
                .email(updatedUser.getEmail())
                .phoneNumber(updatedUser.getPhone())
                .isActive(updatedUser.getIsActive())
                .build();
        return ResponseEntity.ok(ApiResponse.success("Profile updated successfully", userResponse));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete user account", description = "Delete user account by ID")
    public ResponseEntity<ApiResponse<String>> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok(ApiResponse.success("User account deleted successfully", null));
    }
    
    @DeleteMapping("/profile")
    @Operation(summary = "Deactivate user account", description = "Deactivate current user account (soft delete)")
    public ResponseEntity<ApiResponse<String>> deactivateUserProfile() {
        UserResponse currentUser = authService.getCurrentUser();
        userService.deactivateUser(currentUser.getId());
        return ResponseEntity.ok(ApiResponse.success("User account deactivated successfully", null));
    }
    
    // DTO classes
    public static class UserRegistrationRequest {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private String phone;
        
        // Getters and setters
        public String getFirstName() { return firstName; }
        public void setFirstName(String firstName) { this.firstName = firstName; }
        public String getLastName() { return lastName; }
        public void setLastName(String lastName) { this.lastName = lastName; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
    }
    
    public static class UserLoginRequest {
        private String email;
        private String password;
        
        // Getters and setters
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }
    
    public static class UserUpdateRequest {
        private String firstName;
        private String lastName;
        private String phone;
        
        // Getters and setters
        public String getFirstName() { return firstName; }
        public void setFirstName(String firstName) { this.firstName = firstName; }
        public String getLastName() { return lastName; }
        public void setLastName(String lastName) { this.lastName = lastName; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
    }
}
