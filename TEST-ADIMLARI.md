# ✅ Test Adımları

## 🚀 ADIM 1: Live Server ile Başlatma

### Başlatma:
1. VSCode'da **index.html** dosyasına sağ tıklayın
2. **"Open with Live Server"** seçin
3. Tarayıcı otomatik açılacak: `http://localhost:5500`

### Kontrol Listesi:
- [ ] Sayfa yüklendi mi?
- [ ] Logo görünüyor mu? 💰
- [ ] Toolbar görünüyor mu?
- [ ] Tablo yüklendi mi?
- [ ] Console'da hata var mı? (F12 ile kontrol edin)

**Sonuç**: _______________

---

## 🧪 ADIM 2: Temel Fonksiyon Testleri

### Test 1: Brüt Maaş Hesaplama
1. İlk satıra brüt maaş girin: **26005.50**
2. Bekleyin (otomatik hesaplanacak)

**Kontrol:**
- [ ] SGK İşçi: ~3,640.77₺
- [ ] İşsizlik: ~260.06₺
- [ ] Net Ücret: ~19,845.94₺
- [ ] Özet kartlar güncellendi mi?

### Test 2: Para Birimi Değiştirme
1. Üst menüden **💱 TL** butonuna tıklayın
2. **USD** seçin
3. Hesaplamalar dolar cinsinden gösteriliyor mu?

**Kontrol:**
- [ ] Para birimi değişti mi?
- [ ] Sembol $ oldu mu?
- [ ] Hesaplamalar güncellendi mi?

### Test 3: Çoklu Ay Girişi
1. Birkaç aya daha maaş girin
2. Örnek: Şubat: 27000, Mart: 28000

**Kontrol:**
- [ ] Her ay ayrı hesaplandı mı?
- [ ] TOPLAM satırı güncellendi mi?
- [ ] Ortalama Aylık Net doğru mu?

**Sonuç**: _______________

---

## 📱 ADIM 3: Responsive Tasarım Testi

### Desktop Test (>1024px)
1. Tarayıcıyı tam ekran yapın

**Kontrol:**
- [ ] Layout geniş mi?
- [ ] Özet kartlar 4 sütun mu?
- [ ] Toolbar tek satır mı?

### Tablet Test (768px-1024px)
1. F12 → Device Toolbar → iPad Pro
2. Sayfayı yenileyin

**Kontrol:**
- [ ] Özet kartlar 2 sütun mu?
- [ ] Tablo scroll yapıyor mu?

### Mobile Test (<768px)
1. F12 → Device Toolbar → iPhone 12
2. Sayfayı yenileyin

**Kontrol:**
- [ ] Özet kartlar tek sütun mu?
- [ ] Butonlar tıklanabilir mi?
- [ ] Logo düzgün görünüyor mu?

**Sonuç**: _______________

---

## 📄 ADIM 4: Export Fonksiyon Testleri

### PDF Export
1. Birkaç aya maaş girin
2. Üst menüden **📄 PDF İndir** butonuna tıklayın
3. Dosya indirildi mi?

**Kontrol:**
- [ ] PDF oluşturuldu mu?
- [ ] Dosya adı: maas-hesaplama-2025.pdf
- [ ] Tablo görünüyor mu?
- [ ] Veriler doğru mu?

### Excel Export
1. Üst menüden **📊 Excel İndir** butonuna tıklayın
2. Dosya indirildi mi?

**Kontrol:**
- [ ] Excel oluşturuldu mu?
- [ ] Dosya adı: maas-hesaplama-2025.xlsx
- [ ] Excel'de açılıyor mu?
- [ ] Veriler düzenlenebilir mi?

**Sonuç**: _______________

---

## ⚙️ ADIM 5: UI Kontrolleri

### Dropdown Menüler
1. Her dropdown'a tıklayın
   - 🔄 Hesaplama Yönü
   - 📅 Yıl Seçimi
   - 📊 Görünüm Modu
   - 💱 Para Birimi

**Kontrol:**
- [ ] Dropdown'lar açılıyor mu?
- [ ] Seçim yapılabiliyor mu?
- [ ] Seçilen değer görünüyor mu?

### Yan Panel
1. ⚙️ Gelişmiş butonuna tıklayın
2. Panel açıldı mı?
3. X ile kapatın

**Kontrol:**
- [ ] Panel açılıyor mu?
- [ ] Kapatma çalışıyor mu?
- [ ] ESC tuşu ile kapanıyor mu?

**Sonuç**: _______________

---

## ⌨️ ADIM 6: Klavye Kısayolları

### Test Kısayollar
- **ESC**: Panel/Dropdown'ları kapat
- **Ctrl+P**: PDF Export (tarayıcı dialog çıkabilir)
- **Ctrl+E**: Excel Export

**Kontrol:**
- [ ] ESC çalışıyor mu?
- [ ] Ctrl+E Excel indiriyor mu?

**Sonuç**: _______________

---

## 🌐 ADIM 7: Tarayıcı Testi

### Chrome
- [ ] Çalışıyor mu?
- [ ] Console'da hata yok mu?

### Firefox
- [ ] Uyumlu mu?
- [ ] Export çalışıyor mu?

### Edge
- [ ] Sorun var mı?

**Sonuç**: _______________

---

## 📊 Test Sonuç Özeti

| Test | Durum | Not |
|------|-------|-----|
| Live Server | ⬜ | |
| Hesaplama | ⬜ | |
| Responsive | ⬜ | |
| PDF Export | ⬜ | |
| Excel Export | ⬜ | |
| UI Kontroller | ⬜ | |
| Klavye | ⬜ | |
| Tarayıcı | ⬜ | |

### Genel Değerlendirme:
```
✅ Başarılı: ___/8
⚠️  Uyarı: ___/8
❌ Hata: ___/8
```

---

## 🐛 Yaygın Sorunlar ve Çözümler

### Sorun: "ERR_FILE_NOT_FOUND"
**Çözüm**: Dosya yolları yanlış. Proje klasöründe olduğunuzdan emin olun.

### Sorun: "calculations is not defined"
**Çözüm**: JS dosyaları yüklenememiş. Network tab'ında kontrol edin.

### Sorun: Stil gözükmüyor
**Çözüm**: CSS dosyaları yüklenememiş. Hard refresh (Ctrl+Shift+R) yapın.

### Sorun: PDF/Excel çalışmıyor
**Çözüm**: CDN'ler engelleniyor olabilir. İnternet bağlantınızı kontrol edin.

---

## ✅ Tüm Testler Başarılı İse:

**Tebrikler! Projeniz hazır! 🎉**

Sonraki adımlar:
1. ✅ Git commit ve push yapın
2. ✅ GitHub Pages'e deploy edin
3. ✅ Paylaşın ve kullanın!

---

**Test Tarihi**: _____________  
**Test Eden**: _____________  
**Versiyon**: 2.0.0
