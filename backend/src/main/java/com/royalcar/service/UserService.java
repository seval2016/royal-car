package com.royalcar.service;

import com.royalcar.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    
    // Basic CRUD operations
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    Optional<User> getUserByEmail(String email);
    User createUser(User user);
    User updateUser(Long id, User user);
    void deleteUser(Long id);
    
    // Authentication operations
    String authenticateUser(String email, String password);
    boolean validateUserCredentials(String email, String password);
    
    // Profile operations
    User getUserProfile(Long userId);
    User updateUserProfile(Long userId, User user);
    
    // Business logic
    boolean isEmailExists(String email);
    boolean isUserActive(Long userId);
    void deactivateUser(Long userId);
    void activateUser(Long userId);
    
    // Password operations
    void changePassword(Long userId, String oldPassword, String newPassword);
    void resetPassword(String email);
    
    // Role operations
    boolean hasRole(Long userId, String role);
    void updateUserRole(Long userId, String role);
}
