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
public class ReviewCreateRequest {

    @NotNull(message = "Kullanıcı ID boş olamaz")
    @Min(value = 1, message = "Geçerli bir kullanıcı ID giriniz")
    private Long userId;

    @NotNull(message = "Araba ID boş olamaz")
    @Min(value = 1, message = "Geçerli bir araba ID giriniz")
    private Long carId;

    @NotNull(message = "Puan boş olamaz")
    @Min(value = 1, message = "Puan en az 1 olmalıdır")
    @Max(value = 5, message = "Puan en fazla 5 olmalıdır")
    private Integer rating;

    @NotBlank(message = "Yorum boş olamaz")
    @Size(min = 10, max = 1000, message = "Yorum 10-1000 karakter arasında olmalıdır")
    private String comment;
}
