package com.royalcar.service.impl;

import com.royalcar.dto.request.LoginRequest;
import com.royalcar.dto.request.RegisterRequest;
import com.royalcar.dto.response.AuthenticationResponse;
import com.royalcar.dto.response.UserResponse;
import com.royalcar.entity.User;
import com.royalcar.repository.UserRepository;
import com.royalcar.security.JwtTokenProvider;
import com.royalcar.security.UserPrincipal;
import com.royalcar.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public AuthenticationResponse register(RegisterRequest request) {
        log.info("Registering new user: {}", request.getUsername());

        // Check if username already exists
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        // Check if email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        // Validate password confirmation
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match");
        }

        // Create new user
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhoneNumber())
                .city(request.getCity())
                .country(request.getCountry())
                .role(User.UserRole.CUSTOMER)
                .isActive(true)
                .emailVerified(false)
                .build();

        User savedUser = userRepository.save(user);
        log.info("User registered successfully: {}", savedUser.getUsername());

        // Generate authentication response
        return generateAuthenticationResponse(savedUser);
    }

    @Override
    public AuthenticationResponse login(LoginRequest request) {
        log.info("User login attempt: {}", request.getUsernameOrEmail());

        // Authenticate user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsernameOrEmail(),
                        request.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generate JWT token
        String jwt = jwtTokenProvider.generateToken(authentication);
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        log.info("User logged in successfully: {}", userPrincipal.getUsername());

        return AuthenticationResponse.builder()
                .accessToken(jwt)
                .refreshToken("refresh-token-placeholder") // TODO: Implement refresh token
                .tokenType("Bearer")
                .expiresIn(86400000L) // 24 hours
                .user(convertToUserResponse(userPrincipal))
                .build();
    }

    @Override
    public UserResponse getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        
        return convertToUserResponse(userPrincipal);
    }

    @Override
    public AuthenticationResponse refreshToken(String refreshToken) {
        // TODO: Implement refresh token logic
        log.info("Refreshing token");
        throw new UnsupportedOperationException("Refresh token not implemented yet");
    }

    @Override
    public void logout() {
        SecurityContextHolder.clearContext();
        log.info("User logged out successfully");
    }

    private AuthenticationResponse generateAuthenticationResponse(User user) {
        // TODO: Implement proper JWT generation for registration
        return AuthenticationResponse.builder()
                .accessToken("access-token-placeholder")
                .refreshToken("refresh-token-placeholder")
                .tokenType("Bearer")
                .expiresIn(86400000L)
                .user(convertToUserResponse(user))
                .build();
    }

    private UserResponse convertToUserResponse(UserPrincipal userPrincipal) {
        return UserResponse.builder()
                .id(userPrincipal.getId())
                .firstName(userPrincipal.getUsername()) // TODO: Add firstName to UserPrincipal
                .lastName("") // TODO: Add lastName to UserPrincipal
                .username(userPrincipal.getUsername())
                .email(userPrincipal.getEmail())
                .phoneNumber("") // TODO: Add phoneNumber to UserPrincipal
                .city("") // TODO: Add city to UserPrincipal
                .country("") // TODO: Add country to UserPrincipal
                .role(null) // TODO: Add role to UserPrincipal
                .isActive(userPrincipal.isEnabled())
                .createdAt(null) // TODO: Add createdAt to UserPrincipal
                .updatedAt(null) // TODO: Add updatedAt to UserPrincipal
                .build();
    }

    private UserResponse convertToUserResponse(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .username(user.getUsername())
                .email(user.getEmail())
                .phoneNumber(user.getPhone())
                .city(user.getCity())
                .country(user.getCountry())
                .role(user.getRole())
                .isActive(user.getIsActive())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .build();
    }
}
