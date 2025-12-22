# 🚀 KURULUM REHBERİ

## Hızlı Başlangıç

### 1. Online Kullanım (En Kolay)
Projeyi doğrudan tarayıcınızda kullanabilirsiniz:
- `index.html` dosyasını çift tıklayın
- Otomatik olarak tarayıcınızda açılacak
- Hemen kullanmaya başlayın!

### 2. Visual Studio Code ile Geliştirme

#### Gereksinimler
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

#### Adımlar
```bash
# 1. Projeyi klonlayın veya indirin
git clone https://github.com/goksel/maasini-hesapla-by-goksel.git

# 2. Klasöre girin
cd maasini-hesapla-by-goksel

# 3. VSCode ile açın
code .

# 4. Önerilen eklentileri yükleyin
# (Sağ altta çıkan bildirime "Install All" deyin)

# 5. index.html'i sağ tıklayın
# "Open with Live Server" seçin

# 6. Tarayıcıda otomatik açılacak
http://localhost:5500
```

### 3. Node.js ile Çalıştırma

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start

# Tarayıcıda açılacak
http://localhost:5500
```

## 📁 Proje Yapısı

```
maasini-hesapla-by-goksel/
├── 📄 index.html              # Ana uygulama dosyası
├── 📦 package.json            # Proje metadata
├── 🎨 favicon.svg             # Site ikonu
├── 📱 manifest.json           # PWA manifest
│
├── 📂 assets/
│   ├── 📂 css/
│   │   ├── style.css          # Ana stil dosyası
│   │   └── responsive.css     # Responsive tasarım
│   │
│   └── 📂 js/
│       ├── calculations.js    # Hesaplama fonksiyonları
│       ├── export.js          # PDF/Excel export
│       └── ui.js              # UI kontrolleri
│
├── 📂 docs/
│   ├── VSCODE-KURULUM.md      # VSCode kurulum rehberi
│   └── GITHUB-YUKLEME-REHBERI.md
│
├── 📂 .vscode/
│   ├── settings.json          # VSCode ayarları
│   ├── extensions.json        # Önerilen eklentiler
│   └── launch.json            # Debug yapılandırması
│
├── 📄 README.md               # Ana dokümantasyon
├── 📄 BASLARKEN.md            # Başlangıç rehberi
├── 📄 KURULUM.md              # Bu dosya
├── 📄 LICENSE                 # MIT Lisansı
└── 📄 .gitignore             # Git ignore kuralları
```

## ⚙️ Yapılandırma

### Döviz Kurlarını Güncelleme
[calculations.js](assets/js/calculations.js) dosyasını açın:

```javascript
const exchangeRates = {
    USD: 42.70,  // Güncel USD/TL kuru
    EUR: 50.16,  // Güncel EUR/TL kuru
    TL: 1
};
```

### Vergi Dilimlerini Güncelleme
[calculations.js](assets/js/calculations.js) dosyasındaki `taxBrackets2025` değişkenini düzenleyin.

### Live Server Portunu Değiştirme
[.vscode/settings.json](.vscode/settings.json) dosyasında:

```json
{
  "liveServer.settings.port": 5500  // İstediğiniz port
}
```

## 🔧 Geliştirme

### Önerilen VSCode Eklentileri
Proje açıldığında otomatik olarak önerilecek:

- ✅ **Live Server** - Local development server
- ✅ **Prettier** - Code formatter
- ✅ **Auto Rename Tag** - HTML tag'lerini otomatik güncelleme
- ✅ **HTML CSS Support** - CSS IntelliSense
- ✅ **Color Highlight** - Renk kodlarını görselleştirme
- ✅ **Path Intellisense** - Dosya yolu otomatik tamamlama

### Klavye Kısayolları
- **F5** - Live Server'ı başlat
- **Ctrl + S** - Dosyayı kaydet ve otomatik yenile
- **Alt + Shift + F** - Kodu formatla (Prettier)
- **Ctrl + P** - PDF export
- **Ctrl + E** - Excel export
- **ESC** - Yan paneli/dropdown'ları kapat

## 🐛 Sorun Giderme

### Live Server Çalışmıyor
```bash
# 1. Live Server extension'ını yeniden yükleyin
# Extensions → Live Server → Reload

# 2. Port meşgul ise farklı port deneyin
# .vscode/settings.json → "liveServer.settings.port": 5501
```

### Dosyalar Yüklenmiyor
```bash
# Dosya yollarını kontrol edin
# Tarayıcı console'unda (F12) hata mesajlarına bakın
```

### Hesaplamalar Çalışmıyor
```bash
# 1. Tarayıcı console'unu açın (F12)
# 2. JavaScript hatalarını kontrol edin
# 3. CDN'lerin yüklendiğinden emin olun
```

## 📦 Deployment

### GitHub Pages
```bash
# 1. GitHub'a push edin
git add .
git commit -m "Deploy"
git push origin main

# 2. Settings → Pages → Source: main branch
# 3. Site hazır: https://username.github.io/maasini-hesapla-by-goksel/
```

### Netlify
```bash
# 1. Netlify'a giriş yapın
# 2. "New site from Git" seçin
# 3. Repo'yu bağlayın
# 4. Deploy!
```

### Vercel
```bash
# 1. Vercel CLI yükleyin
npm i -g vercel

# 2. Deploy edin
vercel

# 3. Production'a alın
vercel --prod
```

## 📚 Daha Fazla Bilgi

- [README.md](README.md) - Tam proje dokümantasyonu
- [BASLARKEN.md](BASLARKEN.md) - Hızlı başlangıç
- [docs/VSCODE-KURULUM.md](docs/VSCODE-KURULUM.md) - Detaylı VSCode kurulumu
- [docs/GITHUB-YUKLEME-REHBERI.md](docs/GITHUB-YUKLEME-REHBERI.md) - GitHub'a yükleme

## 💡 İpuçları

1. **Otomatik Kaydetme**: VSCode ayarlarında otomatik kaydetme açık
2. **Format on Save**: Dosya kaydedildiğinde otomatik formatlanır
3. **Live Reload**: Değişiklikler anında tarayıcıda görünür
4. **Responsive Test**: Tarayıcı DevTools ile farklı ekran boyutlarını test edin

## ❓ Yardım

Sorun mu yaşıyorsunuz?
- [Issues](https://github.com/goksel/maasini-hesapla-by-goksel/issues) - GitHub'da sorun bildirin
- [Discussions](https://github.com/goksel/maasini-hesapla-by-goksel/discussions) - Toplulukla tartışın

---

**Made with ❤️ by Göksel**
