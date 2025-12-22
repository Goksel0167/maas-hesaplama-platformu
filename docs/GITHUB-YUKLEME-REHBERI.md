# 🚀 GitHub'a Yükleme Rehberi

Bu dosya, "Maaşını Hesapla" projesini GitHub'a nasıl yükleyeceğinizi adım adım anlatır.

## 📋 Gereksinimler

- Git (bilgisayarınızda kurulu olmalı)
- GitHub hesabı
- Terminal/Command Prompt erişimi

## 🔧 Kurulum

### 1. Git Kurulumu (Eğer yoksa)

**Windows:**
- [git-scm.com](https://git-scm.com/download/win) adresinden Git'i indirin ve kurun

**Mac:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt-get install git
```

### 2. Git Yapılandırması

Terminal'i açın ve şu komutları çalıştırın:

```bash
git config --global user.name "Adınız Soyadınız"
git config --global user.email "email@example.com"
```

## 📤 GitHub'a Yükleme Adımları

### Yöntem 1: GitHub Web Interface Kullanarak (Kolay)

1. **GitHub'da Yeni Repo Oluşturun:**
   - [GitHub](https://github.com) sitesine gidin
   - Sağ üstteki "+" butonuna tıklayın
   - "New repository" seçin
   - Repository adı: `maasini-hesapla-by-goksel`
   - Description: "Maaşını Hesapla by Göksel - Türkiye'nin en kapsamlı maaş hesaplama platformu"
   - Public veya Private seçin
   - "Create repository" tıklayın

2. **Dosyaları Yükleyin:**
   - Oluşturduğunuz repo sayfasında "uploading an existing file" linkine tıklayın
   - Şu dosyaları sürükleyip bırakın:
     - `maasini-hesapla-v2.html` (ana dosya)
     - `maasini-hesapla.html` (eski versiyon - opsiyonel)
     - `README.md`
     - `LICENSE`
     - `.gitignore`
   - "Commit changes" butonuna tıklayın

### Yöntem 2: Command Line Kullanarak (Gelişmiş)

1. **Proje Klasörüne Gidin:**

```bash
cd /path/to/maasini-hesapla-by-goksel
```

2. **Git Repository Başlatın:**

```bash
git init
```

3. **Dosyaları Ekleyin:**

```bash
git add .
```

4. **İlk Commit:**

```bash
git commit -m "🎉 İlk commit: Maaşını Hesapla projesi"
```

5. **GitHub Repo'sunu Remote Olarak Ekleyin:**

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/maasini-hesapla-by-goksel.git
```

6. **GitHub'a Push Edin:**

```bash
git branch -M main
git push -u origin main
```

## 📁 Dosya Yapısı

Repository'nizde şu dosyalar olmalı:

```
maasini-hesapla-by-goksel/
├── maasini-hesapla-v2.html    # Ana uygulama (yeni versiyon)
├── maasini-hesapla.html        # Eski versiyon (opsiyonel)
├── README.md                   # Proje dokümantasyonu
├── LICENSE                     # MIT Lisansı
└── .gitignore                  # Git ignore kuralları
```

## 🌐 GitHub Pages ile Yayınlama

Sitenizi ücretsiz olarak GitHub Pages'de yayınlayabilirsiniz:

1. **Repository Settings'e gidin**
2. **Sol menüden "Pages" seçin**
3. **Source bölümünde "main" branch'i seçin**
4. **Save butonuna tıklayın**
5. **5 dakika içinde siteniz hazır olacak:**
   - `https://KULLANICI_ADINIZ.github.io/maasini-hesapla-by-goksel/maasini-hesapla-v2.html`

## 🔄 Güncellemeler için

Dosyalarınızda değişiklik yaptığınızda:

```bash
# Değişiklikleri stage'e alın
git add .

# Commit oluşturun
git commit -m "Açıklama: Ne değiştirdiniz"

# GitHub'a gönderin
git push origin main
```

## 🐛 Yaygın Sorunlar ve Çözümler

### Problem: "git: command not found"
**Çözüm:** Git'i kurun (yukarıdaki kurulum bölümüne bakın)

### Problem: "Permission denied (publickey)"
**Çözüm:** SSH key oluşturun veya HTTPS kullanın

```bash
# HTTPS kullanmak için
git remote set-url origin https://github.com/KULLANICI_ADINIZ/maasini-hesapla-by-goksel.git
```

### Problem: "Repository not found"
**Çözüm:** Repository adını ve kullanıcı adını kontrol edin

### Problem: "Failed to push"
**Çözüm:** Önce pull yapın

```bash
git pull origin main --rebase
git push origin main
```

## 📞 Yardım

Daha fazla yardım için:
- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Community](https://github.community)

## ✅ Kontrol Listesi

- [ ] Git kuruldu
- [ ] Git yapılandırıldı
- [ ] GitHub hesabı oluşturuldu
- [ ] Repository oluşturuldu
- [ ] Dosyalar yüklendi
- [ ] README.md düzenlendi
- [ ] GitHub Pages aktif edildi (opsiyonel)

## 🎉 Tebrikler!

Projeniz artık GitHub'da! 🚀

Projenizi paylaşın:
- Twitter'da: #MaaşınıHesapla
- LinkedIn'de: Profesyonel projenizi sergileyin
- İş başvurularında: Portfolio olarak kullanın

---

**İyi Geliştirmeler! 💻✨**
