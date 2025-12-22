# 📚 Proje Dokümantasyon Özeti

## 📖 Mevcut Dokümantasyon

### Temel Dosyalar
1. **[README.md](README.md)** 📘
   - Proje genel bakış
   - Özellikler listesi
   - Kullanım kılavuzu
   - Teknolojiler
   - Vergi dilimleri
   - Lisans bilgisi

2. **[BASLARKEN.md](BASLARKEN.md)** 🚀
   - Hızlı başlangıç rehberi
   - VSCode ile çalıştırma
   - Proje yapısı
   - Kısayollar
   - Sorun giderme

3. **[KURULUM.md](KURULUM.md)** ⚙️
   - Detaylı kurulum adımları
   - 3 farklı kurulum yöntemi
   - Yapılandırma seçenekleri
   - Deployment rehberi
   - Sorun giderme

4. **[CONTRIBUTING.md](CONTRIBUTING.md)** 🤝
   - Katkıda bulunma rehberi
   - Kod standartları
   - Commit kuralları
   - Pull Request süreci

5. **[CHANGELOG.md](CHANGELOG.md)** 📝
   - Versiyon geçmişi
   - Değişiklik kayıtları
   - Gelecek özellikler

6. **[LICENSE](LICENSE)** 📄
   - MIT Lisansı

### Docs Klasörü
- **[docs/VSCODE-KURULUM.md](docs/VSCODE-KURULUM.md)** - VSCode detaylı kurulum
- **[docs/GITHUB-YUKLEME-REHBERI.md](docs/GITHUB-YUKLEME-REHBERI.md)** - GitHub yükleme

## 🗂️ Proje Dosya Yapısı

```
maasini-hesapla-by-goksel/
│
├── 📄 index.html              # Ana uygulama - 939 satır
│
├── 📂 assets/
│   ├── 📂 css/
│   │   ├── style.css          # Ana stil - 367 satır
│   │   └── responsive.css     # Responsive - 143 satır
│   └── 📂 js/
│       ├── calculations.js    # Hesaplamalar - 183 satır
│       ├── export.js          # Export - 146 satır
│       └── ui.js              # UI - 131 satır
│
├── 📂 docs/
│   ├── VSCODE-KURULUM.md
│   └── GITHUB-YUKLEME-REHBERI.md
│
├── 📂 .vscode/
│   ├── settings.json          # Editor ayarları
│   ├── extensions.json        # Önerilen eklentiler
│   └── launch.json            # Debug config
│
├── 📄 README.md               # Ana dokümantasyon
├── 📄 BASLARKEN.md            # Başlangıç rehberi
├── 📄 KURULUM.md              # Kurulum rehberi
├── 📄 CONTRIBUTING.md         # Katkı rehberi
├── 📄 CHANGELOG.md            # Değişiklik günlüğü
├── 📄 LICENSE                 # MIT Lisansı
├── 📄 .gitignore              # Git ignore
├── 📄 package.json            # NPM package
├── 📄 manifest.json           # PWA manifest
└── 📄 favicon.svg             # Site ikonu
```

## 🎯 Özellik Matrisi

| Özellik | Durum | Dosya |
|---------|-------|-------|
| Brüt → Net Hesaplama | ✅ | calculations.js |
| Net → Brüt Hesaplama | ✅ | calculations.js |
| TL/USD/EUR Desteği | ✅ | calculations.js |
| Aylık Detay Tablosu | ✅ | index.html |
| PDF Export | ✅ | export.js |
| Excel Export | ✅ | export.js |
| Özet Kartlar | ✅ | index.html |
| Responsive Tasarım | ✅ | responsive.css |
| Gelişmiş Seçenekler | ✅ | ui.js |
| Klavye Kısayolları | ✅ | ui.js |
| PWA Desteği | ✅ | manifest.json |
| Dark Mode | ⏳ | - |
| Grafik Görünüm | ⏳ | - |

## 📊 Kod İstatistikleri

### Dosya Boyutları
- **HTML**: ~939 satır
- **CSS**: ~510 satır (style + responsive)
- **JavaScript**: ~460 satır (3 modül)
- **Toplam**: ~1909 satır kod

### Modüler Yapı
- ✅ CSS ayrıldı (style, responsive)
- ✅ JS ayrıldı (calculations, export, ui)
- ✅ VSCode yapılandırması
- ✅ NPM package yönetimi

## 🔧 Teknik Detaylar

### Bağımlılıklar
- **jsPDF** v2.5.1 - PDF oluşturma
- **jsPDF-AutoTable** v3.5.31 - PDF tablolar
- **SheetJS (XLSX)** v0.18.5 - Excel export

### Vergi Hesaplaması (2025)
```javascript
Dilim 1: 0 - 110.000₺     → %15
Dilim 2: 110.001 - 230.000₺ → %20
Dilim 3: 230.001 - 580.000₺ → %27
Dilim 4: 580.001 - 3.000.000₺ → %35
Dilim 5: 3.000.000₺+        → %40
```

### Kesintiler
- SGK İşçi: %14
- İşsizlik: %1
- Damga Vergisi: %0.759

## 🎨 Tasarım Sistemi

### Renkler
```css
--primary: #6366f1
--secondary: #8b5cf6
--success: #10b981
--warning: #f59e0b
--danger: #ef4444
--dark: #1e293b
--light: #f1f5f9
--gray: #64748b
```

### Tipografi
- Font: Inter
- Weights: 300, 400, 600, 700, 800

### Breakpoints
- Desktop: >1024px
- Tablet: 768px - 1024px
- Mobile: 480px - 768px
- Small Mobile: <480px

## 🚀 Geliştirme Workflow'u

### 1. Kurulum
```bash
git clone [repo]
cd maasini-hesapla-by-goksel
npm install  # (opsiyonel)
code .
```

### 2. Geliştirme
```bash
# Live Server ile çalıştır
F5 veya Right Click → Open with Live Server
```

### 3. Değişiklik Yap
```bash
# Dosyaları düzenle
# Otomatik kaydetme aktif
# Tarayıcı otomatik yenilenir
```

### 4. Test Et
- Farklı tarayıcılarda test
- Responsive test (F12 → Toggle Device)
- Console'da hata kontrolü

### 5. Commit ve Push
```bash
git add .
git commit -m "feat: yeni özellik"
git push
```

## 📱 Tarayıcı Desteği

| Tarayıcı | Versiyon | Durum |
|----------|----------|-------|
| Chrome | 90+ | ✅ |
| Firefox | 88+ | ✅ |
| Safari | 14+ | ✅ |
| Edge | 90+ | ✅ |
| Opera | 76+ | ✅ |

## 🔐 Güvenlik

- No backend - Client-side only
- No data collection
- No cookies
- No external APIs
- Open source

## 📈 Performans

- First Paint: <1s
- Interactive: <2s
- File Size: ~150KB total
- No build step
- CDN for libraries

## 🎯 Gelecek Planlar

### v2.1.0 (Kısa Vadeli)
- [ ] Dark mode
- [ ] LocalStorage ile kayıt
- [ ] Çıktı şablonları
- [ ] Grafik görünümler

### v2.2.0 (Orta Vadeli)
- [ ] Çoklu senaryo karşılaştırma
- [ ] Maaş artış geçmişi
- [ ] Özel vergi dilimleri
- [ ] İşveren maliyeti hesaplama

### v3.0.0 (Uzun Vadeli)
- [ ] API geliştirme
- [ ] Mobil uygulama
- [ ] Çoklu dil desteği
- [ ] Kullanıcı hesapları

## 📞 İletişim ve Destek

- **GitHub**: [Issues](https://github.com/goksel/maasini-hesapla-by-goksel/issues)
- **Discussions**: [Forum](https://github.com/goksel/maasini-hesapla-by-goksel/discussions)
- **Email**: (Eklenecek)

## 🙏 Katkıda Bulunanlar

Bu proje açık kaynak topluluk katkılarıyla gelişir.

[CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyarak siz de katkıda bulunabilirsiniz!

## 📜 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

**Son Güncelleme**: 22 Aralık 2025  
**Versiyon**: 2.0.0  
**Durum**: ✅ Aktif Geliştirme

**Made with ❤️ by Göksel**
