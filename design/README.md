# Royal Car - HTML/Tailwind Design

Bu klasör, Royal Car projesinin **HTML ve Tailwind CSS** ile oluşturulmuş statik tasarımını içerir. Bu tasarım, GitHub Pages'de deploy edilmek üzere hazırlanmıştır.

## 🎯 **Amaç**

- **Portfolio gösterimi** için statik tasarım
- **Backend maliyeti olmadan** deploy
- **GitHub Pages** ile ücretsiz hosting
- **Responsive tasarım** ile mobil uyumluluk

## 📁 **Dosya Yapısı**

```
design/
├── index.html              # Ana sayfa
├── pages/                  # Sayfa dosyaları
│   ├── cars.html          # Araçlar sayfası
│   ├── about.html         # Hakkımızda sayfası (gelecek)
│   └── contact.html       # İletişim sayfası (gelecek)
├── components/            # Bileşen dosyaları (gelecek)
├── assets/               # Statik dosyalar
│   ├── css/
│   │   └── style.css     # Custom CSS
│   ├── js/
│   │   └── main.js       # JavaScript fonksiyonları
│   └── images/           # Resim dosyaları
└── README.md             # Bu dosya
```

## 🚀 **Özellikler**

### ✅ **Tamamlanan Özellikler**
- ✅ Responsive tasarım
- ✅ Mobil menü
- ✅ Araç filtreleme ve arama
- ✅ Modern UI/UX
- ✅ Tailwind CSS ile styling
- ✅ Vanilla JavaScript ile etkileşimler

### 🔄 **Gelecek Özellikler**
- [ ] Hakkımızda sayfası
- [ ] İletişim sayfası
- [ ] Araç detay sayfaları
- [ ] Form validasyonları
- [ ] Animasyonlar

## 🛠️ **Teknolojiler**

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - Etkileşimler için
- **Font Awesome** - İkonlar için
- **Responsive Design** - Mobil uyumluluk

## 📱 **Responsive Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 **Tasarım Sistemi**

### **Renkler**
- **Primary**: `#FFD700` (Brand Yellow)
- **Dark**: `#1a1a1a` (Brand Dark)
- **Gray**: `#666666` (Brand Gray)
- **Light Gray**: `#999999` (Brand Light Gray)

### **Typography**
- **Headings**: Bold, large sizes
- **Body**: Regular, readable sizes
- **Buttons**: Semibold, uppercase

### **Spacing**
- **Container**: `container mx-auto px-4`
- **Sections**: `py-16` (desktop), `py-8` (mobile)
- **Cards**: `p-6`

## 🔧 **Kurulum ve Çalıştırma**

### **Yerel Geliştirme**
1. Dosyaları bilgisayarınıza indirin
2. `index.html` dosyasını tarayıcıda açın
3. Veya local server kullanın:
   ```bash
   # Python ile
   python -m http.server 8000
   
   # Node.js ile
   npx serve .
   ```

### **GitHub Pages Deploy**
1. Repository'yi GitHub'a yükleyin
2. Settings > Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save

## 📋 **Sayfa Listesi**

### **Ana Sayfa** (`index.html`)
- Hero section
- Özellikler
- Popüler araçlar
- Footer

### **Araçlar Sayfası** (`pages/cars.html`)
- Araç arama ve filtreleme
- Araç kartları
- Fiyat aralığı filtreleme
- Marka filtreleme

## 🎯 **GitHub Pages URL**

Deploy edildikten sonra şu URL'den erişilebilir:
```
https://[kullanıcı-adı].github.io/[repo-adı]/design/
```

## 🔄 **Güncelleme**

### **Yeni Sayfa Ekleme**
1. `pages/` klasörüne yeni HTML dosyası ekleyin
2. Navigation menüsünü güncelleyin
3. Footer linklerini güncelleyin
4. Responsive tasarımı test edin

### **Stil Güncelleme**
1. `assets/css/style.css` dosyasını düzenleyin
2. Tailwind config'i `index.html` içinde güncelleyin
3. Tüm sayfalarda test edin

## 📞 **İletişim**

Bu tasarım ile ilgili sorularınız için:
- GitHub Issues kullanın
- Pull Request gönderin

## 📄 **Lisans**

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Not**: Bu tasarım, backend olmadan çalışan statik bir versiyondur. Gerçek uygulama için backend entegrasyonu gerekebilir.
