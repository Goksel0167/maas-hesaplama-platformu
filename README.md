# 💰 Maaşını Hesapla by Göksel

Türkiye'nin en kapsamlı ve modern maaş hesaplama platformu. Brüt-net dönüşüm, zam senaryoları, tazminat hesaplamaları ve daha fazlası!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/goksel/maasini-hesapla-by-goksel)

## 🌟 Özellikler

### 📊 Temel Hesaplamalar
- **Brüt ↔ Net Maaş Hesaplama** - Çift yönlü hesaplama desteği
- **TL, USD, EUR Desteği** - Üç para birimi ile hesaplama
- **2025 Güncel Vergi Dilimleri** - En güncel vergi oranları
- **Asgari Ücret 2025** - Otomatik asgari ücret hesaplaması

### 📈 Gelişmiş Zam Senaryoları
1. **Yüzde Bazlı Zam** - Klasik yüzdelik zam hesaplama
2. **Sabit Tutar Zam** - Sabit tutar ekleme
3. **Hedef Net Maaş** - İstenen net için gerekli brüt hesaplama
4. **Enflasyon Koruması** - Reel artış/kayıp analizi
5. **Toplu Sözleşme** - Dönemsel zam senaryoları
6. **Çoklu Karşılaştırma** - 3 senaryoyu yan yana karşılaştırma

### 💼 Tazminat Hesaplamaları
- **Kıdem Tazminatı** - 2025 tavan tutarları ile
- **İhbar Tazminatı** - Çalışma süresine göre otomatik hesaplama

### 📋 Aylık Detaylı Hesaplama (Yeni!)
- 12 ay için ayrı ayrı maaş girişi
- Aylık kesinti detayları
- Yıllık toplam ve ortalamalar
- Özet kartlar ile hızlı görünüm

### 💾 Export Özellikleri
- **PDF Export** - Profesyonel PDF raporları
- **Excel Export** - Düzenlenebilir .xlsx dosyaları
- Tüm hesaplamalar dahil

## 🚀 Hızlı Başlangıç

### Online Kullanım
Projeyi doğrudan tarayıcınızda açabilirsiniz:

1. `maasini-hesapla-v2.html` dosyasını indirin
2. Çift tıklayarak tarayıcıda açın
3. Hemen hesaplamaya başlayın!

### Local Kurulum

```bash
# Repoyu klonlayın
git clone https://github.com/goksel/maasini-hesapla-by-goksel.git

# Dizine girin
cd maasini-hesapla-by-goksel

# HTML dosyasını tarayıcıda açın
open maasini-hesapla-v2.html
```

## 📖 Kullanım Kılavuzu

### Brüt-Net Hesaplama

1. **Üst menüden hesaplama yönünü seçin:**
   - 🔄 Brütten Nete
   - 🔄 Netten Brüte

2. **Para birimini seçin:**
   - 🇹🇷 TL (Türk Lirası)
   - 🇺🇸 USD (Dolar)
   - 🇪🇺 EUR (Euro)

3. **Maaş tutarlarını girin**
4. **Otomatik hesaplama ile sonuçları görün**

### Zam Senaryoları

1. **Zam Hesaplama sekmesine gidin**
2. **Mevcut maaş bilgilerinizi girin**
3. **6 farklı senaryo kartından birini seçin:**
   - 📊 Yüzde Bazlı Zam
   - 💵 Sabit Tutar Zam
   - 🎯 Hedef Net Maaş
   - 📉 Enflasyon Koruması
   - 🤝 Toplu Sözleşme
   - 🔄 Çoklu Karşılaştırma
4. **Parametreleri doldurun**
5. **Detaylı karşılaştırma tablolarını inceleyin**

### Aylık Hesaplama (Yeni!)

1. **Aylık hesaplama görünümünü seçin**
2. **Her ay için ayrı brüt maaş girin**
3. **Otomatik hesaplanan kesintileri görün**
4. **Özet kartlarda yıllık toplamları inceleyin**
5. **PDF veya Excel olarak indirin**

### PDF/Excel Export

1. **Hesaplamalarınızı tamamlayın**
2. **Üst menüden export butonuna tıklayın:**
   - 📄 PDF İndir
   - 📊 Excel İndir
3. **Dosyanızı kaydedin**

## 🎨 Tasarım Özellikleri

- **Modern UI/UX** - Gradient renkler ve animasyonlar
- **Glassmorphism** - Modern cam efekti tasarım
- **Responsive** - Mobil, tablet, desktop uyumlu
- **Dark Mode Ready** - Koyu tema desteği hazır
- **Accessibility** - Erişilebilirlik standartlarına uygun

## 💻 Teknolojiler

- **HTML5** - Semantik ve modern HTML
- **CSS3** - Flexbox, Grid, Animations
- **Vanilla JavaScript** - Framework'siz, hızlı
- **jsPDF** - PDF export için
- **SheetJS (XLSX)** - Excel export için

## 🔧 Özelleştirme

### Döviz Kurlarını Güncelleme

`exchangeRates` objesini düzenleyin:

```javascript
const exchangeRates = {
    USD: 42.70,  // Güncel USD/TL kuru
    EUR: 50.16,  // Güncel EUR/TL kuru
    TL: 1
};
```

### Vergi Dilimlerini Güncelleme

`calculateNetFromBrut` fonksiyonundaki vergi dilimlerini güncelleyin:

```javascript
if (matrah <= 110000) {
    gelirVergisi = matrah * 0.15;
} else if (matrah <= 230000) {
    gelirVergisi = 16500 + (matrah - 110000) * 0.20;
}
// ... diğer dilimler
```

## 📊 Vergi ve Kesinti Oranları (2025)

| Kesinti | Oran |
|---------|------|
| SGK İşçi Primi | %14 |
| İşsizlik Sigortası | %1 |
| Damga Vergisi | %0.759 |
| Gelir Vergisi | Dilimli (15-40%) |

### Gelir Vergisi Dilimleri 2025

| Gelir Dilimi | Vergi Oranı |
|--------------|-------------|
| 0 - 110.000₺ | %15 |
| 110.001 - 230.000₺ | %20 |
| 230.001 - 580.000₺ | %27 |
| 580.001 - 3.000.000₺ | %35 |
| 3.000.001₺+ | %40 |

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📧 İletişim

Göksel - [@goksel](https://github.com/goksel)

Proje Link: [https://github.com/goksel/maasini-hesapla-by-goksel](https://github.com/goksel/maasini-hesapla-by-goksel)

## 🙏 Teşekkürler

- Tüm katkıda bulunanlara teşekkürler!
- İlham için mevcut maaş hesaplama sitelerine teşekkürler
- Claude AI'ya geliştirme desteği için teşekkürler

## 📈 Gelecek Özellikler

- [ ] Toplu Sözleşme şablonları
- [ ] Geçmiş hesaplama kayıtları
- [ ] Grafik ve görselleştirmeler
- [ ] Maaş artış geçmişi takibi
- [ ] API entegrasyonu
- [ ] Mobil uygulama
- [ ] Dark mode
- [ ] Çoklu dil desteği

## ⭐ Beğendiyseniz Yıldız Verin!

Bu projeyi faydalı buldunuz mu? Yıldız vererek destek olun! ⭐

---

**Made with ❤️ by Göksel**
