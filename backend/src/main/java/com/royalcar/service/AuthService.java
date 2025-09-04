package com.royalcar.service;

import com.royalcar.dto.request.LoginRequest;
import com.royalcar.dto.request.RegisterRequest;
import com.royalcar.dto.response.AuthenticationResponse;
import com.royalcar.dto.response.UserResponse;

public interface AuthService {

    AuthenticationResponse register(RegisterRequest request);
    
    AuthenticationResponse login(LoginRequest request);
    
    UserResponse getCurrentUser();
    
    AuthenticationResponse refreshToken(String refreshToken);
    
    void logout();
}
