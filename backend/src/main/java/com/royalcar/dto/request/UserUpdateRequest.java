package com.royalcar.dto.request;

import com.royalcar.entity.User;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserUpdateRequest {

    @Size(min = 2, max = 50, message = "Ad 2-50 karakter arasında olmalıdır")
    private String firstName;

    @Size(min = 2, max = 50, message = "Soyad 2-50 karakter arasında olmalıdır")
    private String lastName;

    @Size(min = 3, max = 30, message = "Kullanıcı adı 3-30 karakter arasında olmalıdır")
    @Pattern(regexp = "^[a-zA-Z0-9_]+$", message = "Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir")
    private String username;

    @Email(message = "Geçerli bir email adresi giriniz")
    @Size(max = 100, message = "Email 100 karakterden uzun olamaz")
    private String email;

    @Pattern(regexp = "^[+]?[0-9\\s\\-()]{10,20}$", message = "Geçerli bir telefon numarası giriniz")
    private String phoneNumber;

    @Size(max = 100, message = "Şehir 100 karakterden uzun olamaz")
    private String city;

    @Size(max = 100, message = "Ülke 100 karakterden uzun olamaz")
    private String country;

    @Size(max = 500, message = "Adres 500 karakterden uzun olamaz")
    private String address;

    private User.UserRole role;

    private Boolean isActive;
}
