// Yıllara göre vergi, AGİ ve asgari ücret verileri
// Kaynak: Gelir İdaresi Başkanlığı, SGK, Resmi Gazete

const TAX_DATA = {
    2017: {
        minWage: 1777.50,
        taxBrackets: [
            { min: 0, max: 13000, rate: 0.15 },
            { min: 13000, max: 30000, rate: 0.20 },
            { min: 30000, max: 110000, rate: 0.27 },
            { min: 110000, max: Infinity, rate: 0.35 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    2018: {
        minWage: 2029.50,
        taxBrackets: [
            { min: 0, max: 14800, rate: 0.15 },
            { min: 14800, max: 34000, rate: 0.20 },
            { min: 34000, max: 120000, rate: 0.27 },
            { min: 120000, max: Infinity, rate: 0.35 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    2019: {
        minWage: 2558.40,
        taxBrackets: [
            { min: 0, max: 18000, rate: 0.15 },
            { min: 18000, max: 40000, rate: 0.20 },
            { min: 40000, max: 148000, rate: 0.27 },
            { min: 148000, max: Infinity, rate: 0.35 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    2020: {
        minWage: 2943.00,
        taxBrackets: [
            { min: 0, max: 22000, rate: 0.15 },
            { min: 22000, max: 49000, rate: 0.20 },
            { min: 49000, max: 180000, rate: 0.27 },
            { min: 180000, max: 600000, rate: 0.35 },
            { min: 600000, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    2021: {
        minWage: 3577.50,
        taxBrackets: [
            { min: 0, max: 24000, rate: 0.15 },
            { min: 24000, max: 53000, rate: 0.20 },
            { min: 53000, max: 190000, rate: 0.27 },
            { min: 190000, max: 650000, rate: 0.35 },
            { min: 650000, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    2022: {
        minWage: 5004.00,
        taxBrackets: [
            { min: 0, max: 32000, rate: 0.15 },
            { min: 32000, max: 70000, rate: 0.20 },
            { min: 70000, max: 250000, rate: 0.27 },
            { min: 250000, max: 880000, rate: 0.35 },
            { min: 880000, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    2023: {
        minWage: 10008.00,
        taxBrackets: [
            { min: 0, max: 70000, rate: 0.15 },
            { min: 70000, max: 150000, rate: 0.20 },
            { min: 150000, max: 550000, rate: 0.27 },
            { min: 550000, max: 1900000, rate: 0.35 },
            { min: 1900000, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    2024: {
        minWage: 17002.12,
        taxBrackets: [
            { min: 0, max: 110000, rate: 0.15 },
            { min: 110000, max: 230000, rate: 0.20 },
            { min: 230000, max: 870000, rate: 0.27 },
            { min: 870000, max: 3000000, rate: 0.35 },
            { min: 3000000, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    2025: {
        minWage: 26005.50,
        taxBrackets: [
            { min: 0, max: 158000, rate: 0.15 },
            { min: 158000, max: 330000, rate: 0.20 },
            { min: 330000, max: 1200000, rate: 0.27 },
            { min: 1200000, max: 4300000, rate: 0.35 },
            { min: 4300000, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        }
    },
    // 2026 Resmi Rakamlar (ÇSGB - 23 Aralık 2025 / VUK Tebliği 585 - 27 Kasım 2025)
    2026: {
        minWage: 33030.00, // Brüt Asgari Ücret (ÇSGB)
        netMinWage: 28075.50, // Net Asgari Ücret (ÇSGB)
        estimatedIncrease: 25.49, // Yeniden Değerleme Oranı %25,49 (VUK Tebliği 585)
        taxBrackets: [
            { min: 0, max: 190000, rate: 0.15 },      // 158000 * 1.2549 ≈ 190000
            { min: 190000, max: 400000, rate: 0.20 }, // 330000 * 1.2549 ≈ 400000
            { min: 400000, max: 1500000, rate: 0.27 }, // 1200000 * 1.2549 ≈ 1500000
            { min: 1500000, max: 5300000, rate: 0.35 }, // 4300000 * 1.2549 ≈ 5300000
            { min: 5300000, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        },
        projected: false, // Resmi rakamlar
        lastUpdate: '2025-12-25' // VUK Tebliği 585 ve ÇSGB verileri
    },
    2027: {
        minWage: 26005.50, // Manuel güncelleme gerekli
        estimatedIncrease: 30, // Tahmini zam oranı %30 (Manuel değiştirilebilir)
        taxBrackets: [
            { min: 0, max: 257400, rate: 0.15 },      // 198000 * 1.30
            { min: 257400, max: 536250, rate: 0.20 }, // 412500 * 1.30
            { min: 536250, max: 1950000, rate: 0.27 }, // 1500000 * 1.30
            { min: 1950000, max: 6987500, rate: 0.35 }, // 5375000 * 1.30
            { min: 6987500, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        },
        projected: true,
        lastUpdate: null
    },
    2028: {
        minWage: 26005.50, // Manuel güncelleme gerekli
        estimatedIncrease: 25, // Tahmini zam oranı %25 (Manuel değiştirilebilir)
        taxBrackets: [
            { min: 0, max: 321750, rate: 0.15 },      // 257400 * 1.25
            { min: 321750, max: 670312, rate: 0.20 }, // 536250 * 1.25
            { min: 670312, max: 2437500, rate: 0.27 }, // 1950000 * 1.25
            { min: 2437500, max: 8734375, rate: 0.35 }, // 6987500 * 1.25
            { min: 8734375, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        },
        projected: true,
        lastUpdate: null
    },
    2029: {
        minWage: 26005.50, // Manuel güncelleme gerekli
        estimatedIncrease: 20, // Tahmini zam oranı %20 (Manuel değiştirilebilir)
        taxBrackets: [
            { min: 0, max: 386100, rate: 0.15 },      // 321750 * 1.20
            { min: 386100, max: 804374, rate: 0.20 }, // 670312 * 1.20
            { min: 804374, max: 2925000, rate: 0.27 }, // 2437500 * 1.20
            { min: 2925000, max: 10481250, rate: 0.35 }, // 8734375 * 1.20
            { min: 10481250, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        },
        projected: true,
        lastUpdate: null
    },
    2030: {
        minWage: 26005.50, // Manuel güncelleme gerekli
        estimatedIncrease: 20, // Tahmini zam oranı %20 (Manuel değiştirilebilir)
        taxBrackets: [
            { min: 0, max: 463320, rate: 0.15 },      // 386100 * 1.20
            { min: 463320, max: 965249, rate: 0.20 }, // 804374 * 1.20
            { min: 965249, max: 3510000, rate: 0.27 }, // 2925000 * 1.20
            { min: 3510000, max: 12577500, rate: 0.35 }, // 10481250 * 1.20
            { min: 12577500, max: Infinity, rate: 0.40 }
        ],
        agi: {
            single: 0.50,
            married: 0.60,
            perChild: 0.075
        },
        projected: true,
        lastUpdate: null
    }
};

// Yıl verilerini getir
function getYearData(year) {
    return TAX_DATA[year] || TAX_DATA[2025];
}

// Gelecek yıl verilerini güncelle (API'den veya Manuel)
async function updateFutureYearData(year) {
    if (year < 2026) return; // Sadece gelecek yıllar için

    try {
        console.log(`${year} yılı verileri güncelleniyor...`);
        
        // Önce localStorage'dan kontrol et
        const storedData = localStorage.getItem(`taxData_${year}`);
        const storedDate = localStorage.getItem(`taxData_${year}_date`);
        
        if (storedData && storedDate) {
            const lastUpdate = new Date(storedDate);
            const now = new Date();
            const daysDiff = (now - lastUpdate) / (1000 * 60 * 60 * 24);
            
            // 30 günden eski değilse localStorage'daki veriyi kullan
            if (daysDiff < 30) {
                console.log(`${year} yılı verileri localStorage'dan yüklendi (${Math.floor(daysDiff)} gün önce güncellendi)`);
                TAX_DATA[year] = JSON.parse(storedData);
                return;
            }
        }
        
        // API'den veri çekmeyi dene (örnek endpoint)
        // const response = await fetch(`https://api.geliridaresi.gov.tr/vergi-dilimleri/${year}`);
        // if (response.ok) {
        //     const data = await response.json();
        //     TAX_DATA[year] = data;
        //     TAX_DATA[year].projected = false;
        //     TAX_DATA[year].lastUpdate = new Date().toISOString();
        //     
        //     // localStorage'a kaydet
        //     localStorage.setItem(`taxData_${year}`, JSON.stringify(TAX_DATA[year]));
        //     localStorage.setItem(`taxData_${year}_date`, new Date().toISOString());
        //     
        //     console.log(`✅ ${year} yılı resmi verileri güncellendi!`);
        // }
        
        // API yoksa manuel güncelleme için uyarı
        console.warn(`⚠️ ${year} yılı için resmi veri bulunamadı. Manuel güncelleme gerekli.`);
        
    } catch (error) {
        console.error(`❌ ${year} yılı verileri güncellenemedi:`, error);
    }
}

// Manuel veri güncelleme fonksiyonu
function updateYearDataManually(year, data) {
    if (year < 2026 || year > 2030) {
        console.error('Sadece 2026-2030 yılları için manuel güncelleme yapılabilir.');
        return;
    }
    
    TAX_DATA[year] = {
        ...data,
        projected: false,
        lastUpdate: new Date().toISOString()
    };
    
    // localStorage'a kaydet
    localStorage.setItem(`taxData_${year}`, JSON.stringify(TAX_DATA[year]));
    localStorage.setItem(`taxData_${year}_date`, new Date().toISOString());
    
    console.log(`✅ ${year} yılı verileri manuel olarak güncellendi!`);
    
    // Sayfayı yenile
    if (typeof initTable === 'function') {
        initTable();
    }
}

// Otomatik yıl tespiti ve veri güncelleme
function autoUpdateYearData() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0-11
    const currentDay = currentDate.getDate();

    // 1 Ocak'ta gelecek yıl verilerini güncelle
    if (currentMonth === 0 && currentDay === 1) {
        console.log(`🎉 ${currentYear} yılı başladı! Veriler güncelleniyor...`);
        
        if (TAX_DATA[currentYear]?.projected) {
            console.log(`📡 ${currentYear} yılı için resmi veriler aranıyor...`);
            updateFutureYearData(currentYear);
            
            // 5 saniye sonra sayfa yenileme önerisi
            setTimeout(() => {
                const shouldReload = confirm(
                    `${currentYear} yılı için resmi veriler kontrol edildi.\n` +
                    `Güncel verileri görmek için sayfayı yenilemek ister misiniz?`
                );
                if (shouldReload) {
                    window.location.reload();
                }
            }, 5000);
        }
    }
    
    // Her yıl için localStorage'dan yükleme kontrolü
    for (let year = 2026; year <= 2030; year++) {
        if (year <= currentYear) {
            updateFutureYearData(year);
        }
    }
}

// Sayfa yüklendiğinde otomatik güncelleme
window.addEventListener('DOMContentLoaded', () => {
    autoUpdateYearData();
});
