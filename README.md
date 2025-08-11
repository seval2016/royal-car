# Royal Car - Fullstack Project

Modern ve modüler bir fullstack proje iskeleti.

## 🏗️ Proje Yapısı

```
royal-car/
├── backend/          # Spring Boot Backend
├── frontend/         # React Frontend
└── README.md         # Bu dosya
```

## 🚀 Hızlı Başlangıç

### Backend Kurulumu
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend Kurulumu
```bash
cd frontend
npm install
npm run dev
```

## 📋 Gereksinimler

- Java 17+
- PostgreSQL 14+
- Maven 3.6+

## 🔧 Teknolojiler

### Backend
- Spring Boot 3.x
- Spring Data JPA
- Spring Security (JWT)
- PostgreSQL
- Maven
- Lombok
- MapStruct

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

## 📁 Modüler Yapı

### Backend Modülleri
Her modül şu yapıya sahiptir:
- `controller/` - REST API endpoints
- `service/` - İş mantığı
- `repository/` - Veri erişimi
- `entity/` - JPA entities
- `dto/` - Data Transfer Objects
- `mapper/` - Entity-DTO dönüşümleri

### Frontend Modülleri
Her özellik şu yapıya sahiptir:
- `pages/` - Sayfa bileşenleri
- `components/` - Yeniden kullanılabilir bileşenler
- `services/` - API servisleri
- `hooks/` - Custom React hooks
- `types/` - TypeScript tip tanımları

## 🔐 Güvenlik

- JWT tabanlı kimlik doğrulama
- Role-based authorization
- CORS yapılandırması

## 📊 Veritabanı

PostgreSQL veritabanı kullanılmaktadır. Konfigürasyon `backend/src/main/resources/application.yml` dosyasında bulunur.

## 🎨 UI/UX

- Modern ve responsive tasarım
- Tailwind CSS ile utility-first yaklaşım
- Dark/Light mode desteği (gelecek özellik)
- Mobil uyumlu tasarım
