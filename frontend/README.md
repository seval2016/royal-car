# Royal Car Frontend

React + TypeScript + Tailwind CSS ile geliştirilmiş modern araç kiralama web uygulaması.

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:5173
   ```

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Layout.tsx      # Ana layout bileşeni
│   ├── Header.tsx      # Header bileşeni
│   ├── Footer.tsx      # Footer bileşeni
│   ├── HeroSection.tsx # Ana sayfa hero bölümü
│   └── ...
├── pages/              # Sayfa bileşenleri
│   ├── HomePage.tsx    # Ana sayfa
│   ├── CarsPage.tsx    # Araçlar sayfası
│   ├── CarDetailPage.tsx # Araç detay sayfası
│   └── ...
├── services/           # API servisleri
│   ├── api.ts         # API konfigürasyonu
│   └── carService.ts  # Araç API servisleri
├── types/              # TypeScript tip tanımları
│   └── car.ts         # Araç tipleri
├── utils/              # Utility fonksiyonları
│   └── cn.ts          # CSS class utility
├── hooks/              # Custom React hooks
├── App.tsx            # Ana uygulama bileşeni
└── main.tsx           # Entry point
```

## 🔧 Teknolojiler

- **React 18** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Build tool ve dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Sayfa yönlendirme
- **Axios** - HTTP client
- **Lucide React** - İkon kütüphanesi

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Mavi tonları (primary-50 ile primary-900)
- **Secondary**: Gri tonları (secondary-50 ile secondary-900)
- **Success**: Yeşil tonları
- **Warning**: Sarı tonları
- **Error**: Kırmızı tonları

### Tipografi
- **Font**: Inter (Google Fonts)
- **Başlıklar**: 24px - 48px arası
- **Gövde metni**: 16px
- **Küçük metin**: 14px

### Bileşenler
- **Button**: Primary, Secondary, Outline varyantları
- **Card**: Gölgeli, border'lı kartlar
- **Input**: Form input alanları
- **Modal**: Popup pencereler

## 📱 Responsive Tasarım

- **Mobile First** yaklaşımı
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🔗 API Entegrasyonu

### Base URL
```
http://localhost:8080/api
```

### Endpoints
- `GET /cars` - Tüm arabaları listele
- `GET /cars/{id}` - ID ile araba getir
- `POST /cars` - Yeni araba oluştur
- `PUT /cars/{id}` - Araba güncelle
- `DELETE /cars/{id}` - Araba sil

### Proxy Konfigürasyonu
Vite proxy ile API istekleri otomatik olarak backend'e yönlendirilir.

## 🚀 Build ve Deploy

### Production Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## 📦 Özellikler

### ✅ Tamamlanan
- [x] Responsive tasarım
- [x] Modern UI/UX
- [x] TypeScript desteği
- [x] API entegrasyonu
- [x] Routing sistemi
- [x] Component yapısı

### 🚧 Geliştirilecek
- [ ] Kullanıcı kimlik doğrulama
- [ ] Rezervasyon sistemi
- [ ] Ödeme entegrasyonu
- [ ] Admin paneli
- [ ] Bildirim sistemi
- [ ] Çoklu dil desteği

## 🎯 Sayfalar

### Ana Sayfa (/)
- Hero section
- Öne çıkan araçlar
- Hizmetler
- Müşteri yorumları
- CTA bölümü

### Araçlar Sayfası (/cars)
- Araç listesi
- Filtreleme
- Arama
- Sayfalandırma

### Araç Detay Sayfası (/cars/:id)
- Araç detayları
- Resim galerisi
- Özellikler
- Rezervasyon formu

### Hakkımızda (/about)
- Şirket bilgileri
- Misyon/Vizyon
- Ekip

### İletişim (/contact)
- İletişim bilgileri
- Harita
- İletişim formu

## 🔧 Geliştirme

### Yeni Bileşen Ekleme
1. `src/components/` altında yeni dosya oluştur
2. TypeScript interface'leri tanımla
3. Tailwind CSS ile stillendir
4. Export et ve kullan

### Yeni Sayfa Ekleme
1. `src/pages/` altında yeni dosya oluştur
2. `App.tsx`'e route ekle
3. Header navigation'a link ekle

### API Servisi Ekleme
1. `src/services/` altında yeni servis dosyası oluştur
2. TypeScript tiplerini tanımla
3. Axios ile API çağrıları yap

## 📞 Destek

Herhangi bir sorun için issue açabilir veya pull request gönderebilirsiniz.
