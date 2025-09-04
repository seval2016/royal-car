package com.royalcar.dto.request;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DriverCreateRequest {

    @NotBlank(message = "Ad boş olamaz")
    @Size(min = 2, max = 50, message = "Ad 2-50 karakter arasında olmalıdır")
    private String firstName;

    @NotBlank(message = "Soyad boş olamaz")
    @Size(min = 2, max = 50, message = "Soyad 2-50 karakter arasında olmalıdır")
    private String lastName;

    @NotBlank(message = "Telefon numarası boş olamaz")
    @Pattern(regexp = "^[+]?[0-9\\s\\-()]{10,20}$", message = "Geçerli bir telefon numarası giriniz")
    private String phoneNumber;

    @NotBlank(message = "Email boş olamaz")
    @Email(message = "Geçerli bir email adresi giriniz")
    @Size(max = 100, message = "Email 100 karakterden uzun olamaz")
    private String email;

    @NotBlank(message = "Ehliyet numarası boş olamaz")
    @Size(min = 5, max = 20, message = "Ehliyet numarası 5-20 karakter arasında olmalıdır")
    private String licenseNumber;

    @NotNull(message = "Doğum tarihi boş olamaz")
    @Past(message = "Doğum tarihi geçmişte olmalıdır")
    private LocalDate dateOfBirth;

    @NotNull(message = "Yaş boş olamaz")
    @Min(value = 18, message = "Yaş en az 18 olmalıdır")
    @Max(value = 70, message = "Yaş en fazla 70 olmalıdır")
    private Integer age;

    @NotNull(message = "Deneyim yılı boş olamaz")
    @Min(value = 0, message = "Deneyim yılı 0'dan küçük olamaz")
    @Max(value = 50, message = "Deneyim yılı 50'den büyük olamaz")
    private Integer experienceYears;

    @Size(max = 100, message = "Şehir 100 karakterden uzun olamaz")
    private String city;

    @Size(max = 100, message = "Ülke 100 karakterden uzun olamaz")
    private String country;

    @Size(max = 500, message = "Adres 500 karakterden uzun olamaz")
    private String address;

    @Size(max = 500, message = "Açıklama 500 karakterden uzun olamaz")
    private String description;

    @Builder.Default
    private Boolean isActive = true;

    @Builder.Default
    private Boolean isAvailable = true;
}
