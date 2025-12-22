# 🤝 Katkıda Bulunma Rehberi

Maaşını Hesapla by Göksel projesine katkıda bulunmayı düşündüğünüz için teşekkür ederiz! Bu rehber, projeye nasıl katkıda bulunabileceğinizi açıklar.

## 📋 İçindekiler

- [Davranış Kuralları](#davranış-kuralları)
- [Nasıl Katkıda Bulunurum?](#nasıl-katkıda-bulunurum)
- [Geliştirme Ortamı Kurulumu](#geliştirme-ortamı-kurulumu)
- [Kod Standartları](#kod-standartları)
- [Commit Mesajları](#commit-mesajları)
- [Pull Request Süreci](#pull-request-süreci)

## 📜 Davranış Kuralları

Bu proje [Contributor Covenant](https://www.contributor-covenant.org/) davranış kurallarını takip eder. Projeye katılarak bu kurallara uymayı kabul edersiniz.

### Temel Prensipler
- 🤝 Saygılı ve yapıcı olun
- 💬 Açık ve şeffaf iletişim
- 🎯 Proje hedeflerine odaklanın
- 🌟 Başkalarının katkılarına değer verin

## 🚀 Nasıl Katkıda Bulunurum?

### 🐛 Bug Bildirimi
Bir hata bulduysanız:

1. [Issues](https://github.com/goksel/maasini-hesapla-by-goksel/issues) sayfasını kontrol edin
2. Benzer bir issue yoksa yeni bir tane açın
3. Şu bilgileri ekleyin:
   - Hatanın açıklaması
   - Hatayı yeniden üretme adımları
   - Beklenen davranış
   - Ekran görüntüleri (varsa)
   - Tarayıcı ve işletim sistemi bilgisi

### 💡 Özellik Önerisi
Yeni bir özellik önermek için:

1. [Discussions](https://github.com/goksel/maasini-hesapla-by-goksel/discussions) sayfasında tartışın
2. Onay aldıktan sonra bir issue açın
3. Özelliği detaylıca açıklayın
4. Kullanım senaryoları ekleyin
5. Mockup'lar paylaşın (varsa)

### 💻 Kod Katkısı
Kod katkısında bulunmak için:

1. Repo'yu fork edin
2. Yeni bir branch oluşturun
3. Değişikliklerinizi yapın
4. Test edin
5. Pull request açın

## 🔧 Geliştirme Ortamı Kurulumu

### Gereksinimler
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v14 veya üzeri)
- [Visual Studio Code](https://code.visualstudio.com/) (önerilen)

### Kurulum

```bash
# 1. Repo'yu fork edin ve klonlayın
git clone https://github.com/KULLANICI_ADINIZ/maasini-hesapla-by-goksel.git
cd maasini-hesapla-by-goksel

# 2. Upstream remote ekleyin
git remote add upstream https://github.com/goksel/maasini-hesapla-by-goksel.git

# 3. Bağımlılıkları yükleyin (opsiyonel)
npm install

# 4. VSCode ile açın
code .

# 5. Geliştirme sunucusunu başlatın
# index.html'i sağ tık → Open with Live Server
```

### Branch Stratejisi

```bash
# Feature branch oluşturun
git checkout -b feature/ozellik-adi

# Bug fix branch oluşturun
git checkout -b fix/hata-adi

# Dokümantasyon branch oluşturun
git checkout -b docs/dokuman-adi
```

## 📏 Kod Standartları

### JavaScript

```javascript
// ✅ İyi
function calculateNetSalary(brutAmount) {
  const sgk = brutAmount * 0.14;
  const unemployment = brutAmount * 0.01;
  return brutAmount - sgk - unemployment;
}

// ❌ Kötü
function calc(x) {
  var y = x * 0.14;
  return x - y - x * 0.01;
}
```

**Kurallar:**
- Camel case kullanın: `calculateNetSalary`
- Açıklayıcı isimler: `brutAmount` yerine `x` değil
- `const` ve `let` kullanın, `var` kullanmayın
- Arrow function'ları uygun yerlerde kullanın
- JSDoc yorumları ekleyin

### CSS

```css
/* ✅ İyi */
.summary-card {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  padding: 20px;
  border-radius: 12px;
}

/* ❌ Kötü */
.card1 {
  background: #f8fafc;
  padding: 20px;
}
```

**Kurallar:**
- Kebab-case kullanın: `summary-card`
- BEM metodolojisi (opsiyonel)
- CSS değişkenlerini kullanın
- Responsive tasarıma dikkat edin

### HTML

```html
<!-- ✅ İyi -->
<button class="export-btn export-pdf" onclick="exportToPDF()">
  <span>📄</span>
  <span>PDF İndir</span>
</button>

<!-- ❌ Kötü -->
<div onclick="exportToPDF()">PDF</div>
```

**Kurallar:**
- Semantic HTML kullanın
- Accessibility standartlarına uyun
- Açıklayıcı class isimleri

### Formatileme

Prettier yapılandırması:

```json
{
  "singleQuote": true,
  "trailingComma": "none",
  "printWidth": 100,
  "tabWidth": 2
}
```

Kod formatlamak için: `Alt + Shift + F`

## 📝 Commit Mesajları

[Conventional Commits](https://www.conventionalcommits.org/) standardını kullanın:

```
<tip>(<kapsam>): <açıklama>

[opsiyonel gövde]

[opsiyonel footer]
```

### Tipler

- `feat:` - Yeni özellik
- `fix:` - Bug fix
- `docs:` - Dokümantasyon
- `style:` - Formatileme, noktalı virgül vs.
- `refactor:` - Kod yeniden düzenleme
- `perf:` - Performans iyileştirme
- `test:` - Test ekleme/düzeltme
- `chore:` - Bakım işleri

### Örnekler

```bash
# Yeni özellik
git commit -m "feat(calculations): kümülatif vergi hesaplama eklendi"

# Bug fix
git commit -m "fix(export): Excel export'ta tarih formatı düzeltildi"

# Dokümantasyon
git commit -m "docs(readme): kurulum adımları güncellendi"

# Refactoring
git commit -m "refactor(ui): dropdown component'leri modülerize edildi"
```

## 🔄 Pull Request Süreci

### 1. Branch Oluşturun

```bash
git checkout -b feature/yeni-ozellik
```

### 2. Değişikliklerinizi Yapın

- Kod standartlarına uyun
- Test edin
- Dokümantasyon güncelleyin

### 3. Commit Edin

```bash
git add .
git commit -m "feat(feature): yeni özellik eklendi"
```

### 4. Push Edin

```bash
git push origin feature/yeni-ozellik
```

### 5. Pull Request Açın

GitHub'da Pull Request açın ve şu bilgileri ekleyin:

**PR Şablonu:**

```markdown
## 📝 Açıklama
Bu PR neyi değiştiriyor?

## 🎯 Motivasyon ve Bağlam
Neden bu değişiklik gerekli?

## 🧪 Test Edildi Mi?
- [ ] Yerel ortamda test edildi
- [ ] Farklı tarayıcılarda test edildi
- [ ] Mobil görünümde test edildi

## 📸 Ekran Görüntüleri
(Varsa)

## ✅ Checklist
- [ ] Kod standartlarına uygun
- [ ] Dokümantasyon güncellendi
- [ ] CHANGELOG.md güncellendi
- [ ] Test edildi
```

### 6. Code Review

- Maintainer'lar kodunuzu gözden geçirecek
- Gerekirse değişiklik isteğinde bulunacaklar
- Onay aldıktan sonra merge edilecek

## 🏷️ Issue ve PR Etiketleri

- `bug` - Hata bildirimi
- `enhancement` - Yeni özellik
- `documentation` - Dokümantasyon
- `good first issue` - Yeni başlayanlar için
- `help wanted` - Yardım bekleniyor
- `question` - Soru
- `wontfix` - Düzeltilmeyecek
- `duplicate` - Duplicate issue

## 📚 Kaynaklar

- [Git Tutorial](https://git-scm.com/docs/gittutorial)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Keep a Changelog](https://keepachangelog.com/)

## ❓ Sorularınız mı Var?

- [Discussions](https://github.com/goksel/maasini-hesapla-by-goksel/discussions) - Genel sorular
- [Issues](https://github.com/goksel/maasini-hesapla-by-goksel/issues) - Bug ve özellik istekleri

## 🙏 Teşekkürler!

Katkılarınız için şimdiden teşekkür ederiz! Her katkı, küçük veya büyük, projeyi daha iyi hale getirir.

---

**Made with ❤️ by Göksel and Contributors**
