package com.royalcar.service.impl;

import com.royalcar.entity.User;
import com.royalcar.repository.UserRepository;
import com.royalcar.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAllUsers() {
        log.info("Fetching all users");
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        log.info("Fetching user with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid user ID");
        }
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        log.info("Fetching user with email: {}", email);
        if (email == null || email.trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        return userRepository.findByEmail(email);
    }

    @Override
    public User createUser(User user) {
        log.info("Creating new user with email: {}", user.getEmail());
        if (user == null) {
            throw new IllegalArgumentException("User cannot be null");
        }
        if (isEmailExists(user.getEmail())) {
            throw new RuntimeException("User with this email already exists");
        }
        
        // Encode password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User user) {
        log.info("Updating user with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid user ID");
        }
        if (user == null) {
            throw new IllegalArgumentException("User cannot be null");
        }
        
        User existingUser = getUserById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Update fields
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setPhone(user.getPhone());
        existingUser.setCity(user.getCity());
        existingUser.setCountry(user.getCountry());
        
        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(Long id) {
        log.info("Deleting user with id: {}", id);
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid user ID");
        }
        User user = getUserById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.delete(user);
    }

    @Override
    public String authenticateUser(String email, String password) {
        log.info("Authenticating user with email: {}", email);
        if (email == null || password == null) {
            throw new IllegalArgumentException("Email and password cannot be null");
        }
        if (validateUserCredentials(email, password)) {
            // JWT token generation is handled by AuthService
            return "jwt-token-here";
        }
        throw new RuntimeException("Invalid credentials");
    }

    @Override
    public boolean validateUserCredentials(String email, String password) {
        log.info("Validating credentials for user: {}", email);
        Optional<User> userOpt = getUserByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            return passwordEncoder.matches(password, user.getPassword());
        }
        return false;
    }

    @Override
    public User getUserProfile(Long userId) {
        log.info("Fetching profile for user: {}", userId);
        return getUserById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public User updateUserProfile(Long userId, User user) {
        log.info("Updating profile for user: {}", userId);
        User existingUser = getUserById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Update only allowed fields
        if (user.getFirstName() != null) {
            existingUser.setFirstName(user.getFirstName());
        }
        if (user.getLastName() != null) {
            existingUser.setLastName(user.getLastName());
        }
        if (user.getPhone() != null) {
            existingUser.setPhone(user.getPhone());
        }
        if (user.getCity() != null) {
            existingUser.setCity(user.getCity());
        }
        if (user.getCountry() != null) {
            existingUser.setCountry(user.getCountry());
        }
        
        return userRepository.save(existingUser);
    }

    @Override
    public boolean isEmailExists(String email) {
        log.info("Checking if email exists: {}", email);
        return getUserByEmail(email).isPresent();
    }

    @Override
    public boolean isUserActive(Long userId) {
        log.info("Checking if user is active: {}", userId);
        User user = getUserById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getIsActive();
    }

    @Override
    public void deactivateUser(Long userId) {
        log.info("Deactivating user: {}", userId);
        User user = getUserById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setIsActive(false);
        userRepository.save(user);
    }

    @Override
    public void activateUser(Long userId) {
        log.info("Activating user: {}", userId);
        User user = getUserById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setIsActive(true);
        userRepository.save(user);
    }

    @Override
    public void changePassword(Long userId, String oldPassword, String newPassword) {
        log.info("Changing password for user: {}", userId);
        if (oldPassword == null || newPassword == null) {
            throw new IllegalArgumentException("Passwords cannot be null");
        }
        
        User user = getUserById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new RuntimeException("Old password is incorrect");
        }
        
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    @Override
    public void resetPassword(String email) {
        log.info("Resetting password for user: {}", email);
        if (email == null || email.trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        
        User user = getUserByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Generate temporary password (in real app, send email with reset link)
        String tempPassword = "temp123";
        user.setPassword(passwordEncoder.encode(tempPassword));
        userRepository.save(user);
        
        log.info("Password reset for user: {}", email);
    }

    @Override
    public boolean hasRole(Long userId, String role) {
        log.info("Checking if user {} has role: {}", userId, role);
        User user = getUserById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getRole().name().equals(role);
    }

    @Override
    public void updateUserRole(Long userId, String role) {
        log.info("Updating role for user {} to: {}", userId, role);
        User user = getUserById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        try {
            User.UserRole newRole = User.UserRole.valueOf(role.toUpperCase());
            user.setRole(newRole);
            userRepository.save(user);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid role: " + role);
        }
    }
}
