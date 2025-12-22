# 🚀 Visual Studio Code Kurulum Rehberi

Bu rehber, "Maaşını Hesapla by Göksel" projesini Visual Studio Code'da nasıl açacağınızı ve çalıştıracağınızı adım adım anlatır.

## 📋 Gereksinimler

1. **Visual Studio Code** - [İndir](https://code.visualstudio.com/)
2. **Web Tarayıcı** - Chrome, Firefox, Safari, Edge vb.
3. **Live Server Extension** - (Otomatik yüklenecek)

## 🔧 Hızlı Başlangıç

### Adım 1: Projeyi VSCode'da Açın

**Yöntem 1: Sürükle-Bırak**
- `maasini-hesapla-by-goksel` klasörünü VSCode penceresine sürükleyin

**Yöntem 2: File Menüsünden**
- VSCode'u açın
- `File` → `Open Folder...`
- `maasini-hesapla-by-goksel` klasörünü seçin

**Yöntem 3: Terminal**
```bash
cd maasini-hesapla-by-goksel
code .
```

### Adım 2: Önerilen Eklentileri Yükleyin

Projeyi açtığınızda sağ altta bir bildirim çıkacak:
```
"Do you want to install the recommended extensions?"
```

**"Install All"** butonuna tıklayın.

#### Manuel Yükleme:

Eğer bildirim çıkmazsa, şu tuşlara basın:
- Windows/Linux: `Ctrl + Shift + P`
- Mac: `Cmd + Shift + P`

Açılan kutucuğa yazın:
```
Extensions: Show Recommended Extensions
```

Ardından her birini "Install" butonu ile yükleyin.

### Adım 3: Live Server ile Çalıştırın

1. **`index.html` dosyasını açın**
2. Sağ tıklayın
3. **"Open with Live Server"** seçin

   VEYA

   Sağ alt köşedeki **"Go Live"** butonuna tıklayın

4. ✅ Tarayıcınızda otomatik açılacak: `http://localhost:5500`

## 📁 Proje Yapısı

```
maasini-hesapla-by-goksel/
├── .vscode/                    # VSCode ayarları
│   ├── settings.json          # Editör ayarları
│   └── extensions.json        # Önerilen eklentiler
├── assets/                     # İleride CSS/JS için
│   ├── css/
│   └── js/
├── docs/                       # Dokümantasyon
│   └── GITHUB-YUKLEME-REHBERI.md
├── index.html                  # ⭐ ANA SAYFA
├── README.md                   # Proje dokümantasyonu
├── LICENSE                     # MIT Lisansı
└── .gitignore                  # Git ignore kuralları
```

## 🎨 VSCode Ayarları

Proje aşağıdaki ayarlarla gelir:

- ✅ **Auto Save** - Dosyalar otomatik kaydedilir
- ✅ **Format on Save** - Kaydettiğinizde otomatik formatlanır
- ✅ **Tab Size: 2** - 2 boşluk girinti
- ✅ **Word Wrap** - Uzun satırlar otomatik kaydırılır
- ✅ **Live Server Port: 5500** - Standart port

### Ayarları Değiştirme

`.vscode/settings.json` dosyasını açıp düzenleyebilirsiniz:

```json
{
  "liveServer.settings.port": 5500,  // Port numarasını değiştirin
  "editor.fontSize": 14,              // Font boyutunu ayarlayın
  "files.autoSave": "onFocusChange"   // Auto save davranışı
}
```

## 🔌 Önerilen VSCode Eklentileri

Proje ile birlikte gelen eklentiler:

| Eklenti | Açıklama |
|---------|----------|
| **Live Server** | Local geliştirme sunucusu |
| **Prettier** | Kod formatlayıcı |
| **Auto Rename Tag** | HTML tag'lerini otomatik yeniden adlandır |
| **HTML CSS Support** | HTML'de CSS class tamamlama |
| **Color Highlight** | Renk kodlarını vurgula |
| **Path Intellisense** | Dosya yolu otomatik tamamlama |
| **Material Icon Theme** | Dosya ikonları |

## ⌨️ Kullanışlı Kısayollar

### Genel

- `Ctrl + S` / `Cmd + S` - Kaydet
- `Ctrl + P` / `Cmd + P` - Hızlı dosya arama
- `Ctrl + Shift + P` / `Cmd + Shift + P` - Komut paleti
- `Ctrl + B` / `Cmd + B` - Sidebar aç/kapat
- `Ctrl + \`` / `Cmd + \`` - Terminal aç/kapat

### Kod Düzenleme

- `Alt + ↑/↓` - Satırı yukarı/aşağı taşı
- `Shift + Alt + ↓` - Satırı kopyala
- `Ctrl + D` / `Cmd + D` - Aynı kelimeyi seç
- `Ctrl + /` / `Cmd + /` - Yorum satırı
- `Alt + Shift + F` - Kodu formatla

### Live Server

- `Alt + L Alt + O` - Live Server başlat
- `Alt + L Alt + C` - Live Server durdur

## 🐛 Sorun Giderme

### Live Server Çalışmıyor

**Çözüm 1: Eklentiyi yeniden yükleyin**
```
Extensions → Live Server → Reload
```

**Çözüm 2: Portu değiştirin**
`.vscode/settings.json`:
```json
"liveServer.settings.port": 5501
```

**Çözüm 3: Tarayıcıyı manuel açın**
```
http://localhost:5500/index.html
```

### HTML Formatlanmıyor

**Çözüm:**
- Prettier'in kurulu olduğundan emin olun
- `Alt + Shift + F` tuşlarına basın
- Veya: `File` → `Preferences` → `Settings` → "Format On Save" aktif edin

### Font Ligatures Görünmüyor

**Çözüm:**
Fira Code fontunu yükleyin:
- [GitHub - Fira Code](https://github.com/tonsky/FiraCode)

## 🔄 Git ile Çalışma

### İlk Commit

```bash
git init
git add .
git commit -m "🎉 İlk commit: Maaşını Hesapla by Göksel"
```

### GitHub'a Push

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/maasini-hesapla-by-goksel.git
git branch -M main
git push -u origin main
```

### Değişiklikleri Kaydetme

```bash
git add .
git commit -m "✨ Yeni özellik eklendi"
git push
```

## 📱 Responsive Test

VSCode'da responsive test için:

1. **Live Server ile açın**
2. **Tarayıcıda DevTools açın:**
   - Chrome/Edge: `F12` veya `Ctrl + Shift + I`
   - Firefox: `F12`
3. **Device Toolbar'ı aktif edin:**
   - `Ctrl + Shift + M` (Windows/Linux)
   - `Cmd + Shift + M` (Mac)
4. **Farklı cihazları test edin:**
   - iPhone 14 Pro
   - iPad Air
   - Samsung Galaxy
   - Desktop

## 🎯 Geliştirme İpuçları

### 1. Emmet Kısayolları Kullanın

```html
<!-- Yazın: ul>li*5 ardından Tab -->
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### 2. Çoklu İmleç

`Alt + Click` ile birden fazla yere imleç yerleştirin

### 3. Hızlı Arama

`Ctrl + F` - Dosya içinde ara
`Ctrl + Shift + F` - Tüm projede ara

### 4. Snippet Oluşturma

`File` → `Preferences` → `User Snippets` → `html.json`

```json
{
  "Maaş Kartı": {
    "prefix": "maascard",
    "body": [
      "<div class=\"summary-card\">",
      "  <div class=\"summary-card-title\">$1</div>",
      "  <div class=\"summary-card-value\">$2</div>",
      "</div>"
    ]
  }
}
```

## 🚀 Production Build (İleride)

Şu an için tek HTML dosyası yeterli. İleride:

1. **CSS'i ayrı dosyaya çıkarın:**
   - `assets/css/style.css`

2. **JavaScript'i ayrı dosyaya çıkarın:**
   - `assets/js/main.js`

3. **Minify yapın:**
   - HTML, CSS, JS dosyalarını küçültün

4. **CDN linklerini kontrol edin:**
   - jsPDF ve XLSX kütüphaneleri

## 📞 Yardım ve Destek

- **VSCode Dokümantasyonu:** [code.visualstudio.com/docs](https://code.visualstudio.com/docs)
- **Live Server:** [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- **GitHub Issues:** Proje repository'sinde issue açın

## ✅ Kontrol Listesi

- [ ] VSCode yüklendi
- [ ] Proje klasörü VSCode'da açıldı
- [ ] Önerilen eklentiler yüklendi
- [ ] Live Server kuruldu
- [ ] `index.html` başarıyla açıldı
- [ ] Tarayıcıda test edildi
- [ ] Git yapılandırıldı (opsiyonel)

## 🎉 Hazırsınız!

Artık VSCode'da geliştirmeye başlayabilirsiniz!

- 💡 **Live Server** ile anlık değişiklikleri görün
- 🎨 **Prettier** ile kodunuz her zaman düzenli
- 🚀 **Git** ile version control
- 📱 **Responsive** test araçları

**İyi Kodlamalar! 💻✨**

---

**Son Güncelleme:** 15 Aralık 2025
