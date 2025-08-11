# Royal Car Backend

Spring Boot tabanlı REST API backend uygulaması.

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Java 17+
- Maven 3.6+
- PostgreSQL 14+

### Kurulum

1. **Veritabanını hazırlayın:**
   ```sql
   CREATE DATABASE royal_car_db;
   ```

2. **Uygulama konfigürasyonunu düzenleyin:**
   `src/main/resources/application.yml` dosyasında veritabanı bağlantı bilgilerini güncelleyin.

3. **Uygulamayı çalıştırın:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. **API'yi test edin:**
   - Swagger UI: http://localhost:8080/api/swagger-ui.html
   - API Base URL: http://localhost:8080/api

## 📁 Proje Yapısı

```
src/main/java/com/royalcar/
├── RoyalCarApplication.java          # Ana uygulama sınıfı
├── common/                           # Ortak paketler
│   ├── dto/                          # Data Transfer Objects
│   └── exception/                    # Exception handling
├── config/                           # Konfigürasyon sınıfları
├── car/                              # Car modülü
│   ├── controller/                   # REST API endpoints
│   ├── service/                      # İş mantığı
│   ├── repository/                   # Veri erişimi
│   ├── entity/                       # JPA entities
│   ├── dto/                          # DTOs
│   └── mapper/                       # Entity-DTO dönüşümleri
└── security/                         # Güvenlik (gelecek)
```

## 🔧 Teknolojiler

- **Spring Boot 3.2.0** - Ana framework
- **Spring Data JPA** - Veri erişimi
- **Spring Security** - Güvenlik
- **PostgreSQL** - Veritabanı
- **MapStruct** - Entity-DTO mapping
- **Lombok** - Boilerplate kod azaltma
- **JWT** - Token tabanlı kimlik doğrulama

## 📊 API Endpoints

### Car Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/cars` | Tüm arabaları listele (sayfalandırma ile) |
| GET | `/cars/{id}` | ID ile araba getir |
| POST | `/cars` | Yeni araba oluştur |
| PUT | `/cars/{id}` | Araba güncelle |
| DELETE | `/cars/{id}` | Araba sil |
| GET | `/cars/search/brand?brand={brand}` | Marka ile ara |
| GET | `/cars/search/model?model={model}` | Model ile ara |
| GET | `/cars/filter/year/{year}` | Yıl ile filtrele |
| GET | `/cars/filter/fuel-type/{fuelType}` | Yakıt tipi ile filtrele |
| GET | `/cars/filter/transmission/{transmission}` | Vites tipi ile filtrele |
| GET | `/cars/available` | Sadece müsait arabalar |
| GET | `/cars/filter/price-range?minPrice={min}&maxPrice={max}` | Fiyat aralığı ile filtrele |
| GET | `/cars/filter/max-mileage/{maxMileage}` | Maksimum km ile filtrele |
| GET | `/cars/brands` | Tüm markaları listele |
| GET | `/cars/fuel-types` | Tüm yakıt tiplerini listele |
| GET | `/cars/transmissions` | Tüm vites tiplerini listele |

## 🔐 Güvenlik

- JWT tabanlı kimlik doğrulama (gelecek)
- CORS yapılandırması
- Role-based authorization (gelecek)

## 📝 Örnek Kullanım

### Araba Oluşturma
```bash
curl -X POST http://localhost:8080/api/cars \
  -H "Content-Type: application/json" \
  -d '{
    "brand": "BMW",
    "model": "X5",
    "year": 2022,
    "color": "Siyah",
    "price": 150000.00,
    "fuelType": "Benzin",
    "transmission": "Otomatik",
    "mileage": 15000,
    "description": "Lüks SUV"
  }'
```

### Arabaları Listeleme
```bash
curl -X GET "http://localhost:8080/api/cars?page=0&size=10&sort=id,desc"
```

## 🧪 Test

```bash
# Unit testleri çalıştır
mvn test

# Integration testleri çalıştır
mvn verify
```

## 📦 Build

```bash
# JAR dosyası oluştur
mvn clean package

# Docker image oluştur (gelecek)
docker build -t royal-car-backend .
```

## 🔧 Geliştirme

### Yeni Modül Ekleme
1. `src/main/java/com/royalcar/` altında yeni paket oluştur
2. Entity, DTO, Repository, Service, Controller sınıflarını ekle
3. MapStruct mapper interface'i oluştur
4. Gerekirse exception handling ekle

### Veritabanı Migration
- Hibernate `ddl-auto: update` kullanıyor
- Production için Flyway veya Liquibase kullanılabilir

## 📞 Destek

Herhangi bir sorun için issue açabilir veya pull request gönderebilirsiniz.
