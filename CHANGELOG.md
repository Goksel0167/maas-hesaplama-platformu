# 📝 Changelog

Tüm önemli değişiklikler bu dosyada belgelenecektir.

Format [Keep a Changelog](https://keepachangelog.com/tr/1.0.0/) standardını takip eder,
ve bu proje [Semantic Versioning](https://semver.org/spec/v2.0.0.html) kullanır.

## [2.0.0] - 2025-12-22

### ✨ Eklenenler
- **Modüler JavaScript Yapısı**: Kod üç ayrı modüle bölündü
  - `calculations.js` - Tüm hesaplama fonksiyonları
  - `export.js` - PDF ve Excel export işlemleri
  - `ui.js` - UI kontrolleri ve event handler'lar
  
- **Modüler CSS Yapısı**: Stil dosyaları ayrıldı
  - `style.css` - Ana stil tanımlamaları
  - `responsive.css` - Responsive tasarım kuralları

- **Proje Yönetimi Dosyaları**
  - `package.json` - NPM proje yapılandırması
  - `manifest.json` - PWA manifest dosyası
  - `favicon.svg` - Site ikonu
  - `.gitignore` - Git ignore kuralları

- **VSCode Yapılandırması**
  - `settings.json` - Editor ayarları
  - `extensions.json` - Önerilen eklentiler
  - `launch.json` - Debug yapılandırması

- **Dokümantasyon**
  - `KURULUM.md` - Detaylı kurulum rehberi
  - Güncellenmiş proje yapısı

- **Yeni Özellikler**
  - Klavye kısayolları (Ctrl+P, Ctrl+E, ESC)
  - "Hepsini Doldur" butonu
  - "Temizle" butonu
  - Geliştirilmiş meta tag'ler
  - PWA desteği için manifest

### 🔧 İyileştirmeler
- **Performans**: Modüler yapı sayesinde daha hızlı yükleme
- **Bakım Kolaylığı**: Kod organizasyonu iyileştirildi
- **Geliştirici Deneyimi**: VSCode entegrasyonu geliştirildi
- **SEO**: Meta tag'ler eklendi
- **Erişilebilirlik**: Semantic HTML yapısı

### 🐛 Düzeltmeler
- Para birimi dönüşüm hassasiyeti artırıldı
- Toplam hesaplama doğruluğu iyileştirildi
- Responsive tasarım sorunları giderildi

### 📚 Dokümantasyon
- Kapsamlı kurulum rehberi eklendi
- Kod içi yorumlar iyileştirildi
- Proje yapısı dokümantasyonu

## [1.0.0] - 2025-12-20

### ✨ İlk Sürüm
- Brüt ↔ Net maaş hesaplama
- TL, USD, EUR para birimi desteği
- Aylık detaylı hesaplama tablosu
- 12 ay için ayrı ayrı maaş girişi
- SGK, İşsizlik, Gelir Vergisi, Damga Vergisi hesaplama
- 2025 güncel vergi dilimleri
- PDF export özelliği
- Excel export özelliği
- Özet kartlar (toplam brüt, net, kesintiler, ortalama)
- Responsive tasarım
- Modern gradient UI
- Gelişmiş seçenekler paneli
- Dropdown menüler
- Yıl seçimi (2024, 2025, 2026)
- Görünüm modu seçimi
- Destek butonu

### 🎨 Tasarım
- Modern glassmorphism efektleri
- Gradient renkler
- Smooth animasyonlar
- Inter font ailesi
- Mobil uyumlu tasarım

### 📊 Hesaplama Özellikleri
- 2025 vergi dilimleri
- %14 SGK işçi primi
- %1 İşsizlik sigortası
- %0.759 Damga vergisi
- Kümülatif vergi matrahı desteği

---

## Legend

- ✨ **Eklenenler** - Yeni özellikler
- 🔧 **İyileştirmeler** - Mevcut özelliklerin iyileştirilmesi
- 🐛 **Düzeltmeler** - Bug fix'ler
- 📚 **Dokümantasyon** - Dokümantasyon değişiklikleri
- 🎨 **Tasarım** - UI/UX değişiklikleri
- 🔒 **Güvenlik** - Güvenlik güncellemeleri
- ⚠️ **Deprecated** - Yakında kaldırılacak özellikler
- 🗑️ **Kaldırılanlar** - Kaldırılan özellikler

---

**[Unreleased]** - Gelecek sürümler için planlanan özellikler:
- [ ] Dark mode
- [ ] Grafik görünümler
- [ ] Çoklu senaryo karşılaştırma
- [ ] Maaş artış geçmişi
- [ ] Yerel depolama (LocalStorage)
- [ ] Çıktı şablonları
- [ ] Özel vergi dilimleri
- [ ] API entegrasyonu
- [ ] Çoklu dil desteği (EN, DE, FR)
