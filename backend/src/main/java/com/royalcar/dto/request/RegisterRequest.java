package com.royalcar.dto.request;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {

    @NotBlank(message = "Ad boş olamaz")
    @Size(min = 2, max = 50, message = "Ad 2-50 karakter arasında olmalıdır")
    private String firstName;

    @NotBlank(message = "Soyad boş olamaz")
    @Size(min = 2, max = 50, message = "Soyad 2-50 karakter arasında olmalıdır")
    private String lastName;

    @NotBlank(message = "Kullanıcı adı boş olamaz")
    @Size(min = 3, max = 30, message = "Kullanıcı adı 3-30 karakter arasında olmalıdır")
    @Pattern(regexp = "^[a-zA-Z0-9_]+$", message = "Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir")
    private String username;

    @NotBlank(message = "Email boş olamaz")
    @Email(message = "Geçerli bir email adresi giriniz")
    @Size(max = 100, message = "Email 100 karakterden uzun olamaz")
    private String email;

    @NotBlank(message = "Şifre boş olamaz")
    @Size(min = 6, max = 100, message = "Şifre 6-100 karakter arasında olmalıdır")
    private String password;

    @NotBlank(message = "Şifre tekrarı boş olamaz")
    private String confirmPassword;

    @NotBlank(message = "Telefon numarası boş olamaz")
    @Pattern(regexp = "^[+]?[0-9\\s\\-()]{10,20}$", message = "Geçerli bir telefon numarası giriniz")
    private String phoneNumber;

    @Size(max = 100, message = "Şehir 100 karakterden uzun olamaz")
    private String city;

    @Size(max = 100, message = "Ülke 100 karakterden uzun olamaz")
    private String country;

    @Size(max = 500, message = "Adres 500 karakterden uzun olamaz")
    private String address;
}
