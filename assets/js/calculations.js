// Exchange rates
const exchangeRates = {
    USD: 42.70,
    EUR: 50.16,
    TL: 1
};

let currentCurrency = 'TL';
let currencySymbol = '₺';
let currentYear = 2025;

// Tax brackets for 2025
const taxBrackets2025 = [
    { min: 0, max: 110000, rate: 0.15, fixedTax: 0 },
    { min: 110000, max: 230000, rate: 0.20, fixedTax: 16500 },
    { min: 230000, max: 580000, rate: 0.27, fixedTax: 40500 },
    { min: 580000, max: 3000000, rate: 0.35, fixedTax: 135000 },
    { min: 3000000, max: Infinity, rate: 0.40, fixedTax: 982000 }
];

// Calculate net from brut
function calculateNetFromBrut(brutAmount) {
    const brut = brutAmount * exchangeRates[currentCurrency];

    // Social security
    const sgk = brut * 0.14;
    const unemployment = brut * 0.01;
    const matrah = brut - sgk - unemployment;

    // Tax calculation based on brackets (Doğru kümülatif hesaplama)
    let tax = 0;
    for (const bracket of taxBrackets2025) {
        if (matrah > bracket.min) {
            const maxAmount = bracket.max === Infinity ? matrah : Math.min(matrah, bracket.max);
            const taxableInBracket = maxAmount - bracket.min;
            if (taxableInBracket > 0) {
                tax += taxableInBracket * bracket.rate;
            }
        }
        if (matrah <= bracket.max) break;
    }

    // Stamp tax
    const stamp = brut * 0.00759;
    
    // Net calculation
    const net = matrah - tax - stamp;

    return {
        brut: brut / exchangeRates[currentCurrency],
        sgk: sgk / exchangeRates[currentCurrency],
        unemployment: unemployment / exchangeRates[currentCurrency],
        matrah: matrah / exchangeRates[currentCurrency],
        tax: tax / exchangeRates[currentCurrency],
        stamp: stamp / exchangeRates[currentCurrency],
        net: net / exchangeRates[currentCurrency]
    };
}

// Calculate brut from net
function calculateBrutFromNet(netTarget) {
    let brutEstimate = netTarget * 1.5; // Initial estimate
    let iterations = 0;
    const maxIterations = 50;
    const tolerance = 0.01;

    while (iterations < maxIterations) {
        const result = calculateNetFromBrut(brutEstimate);
        const difference = netTarget - result.net;

        if (Math.abs(difference) < tolerance) {
            return calculateNetFromBrut(brutEstimate);
        }

        brutEstimate += difference * 1.4;
        iterations++;
    }

    return calculateNetFromBrut(brutEstimate);
}

// Calculate single row
function calculateRow(index) {
    const brutInput = document.getElementById(`brut-${index}`).value;
    if (!brutInput || brutInput === '') {
        clearRow(index);
        return;
    }

    const brut = parseFloat(brutInput);
    if (isNaN(brut) || brut <= 0) {
        clearRow(index);
        return;
    }

    const result = calculateNetFromBrut(brut);

    updateRowDisplay(index, result);
    updateTotals();
}

// Clear row display
function clearRow(index) {
    document.getElementById(`sgk-${index}`).textContent = `0${currencySymbol}`;
    document.getElementById(`unemployment-${index}`).textContent = `0${currencySymbol}`;
    document.getElementById(`base-${index}`).textContent = `0${currencySymbol}`;
    document.getElementById(`tax-${index}`).textContent = `0${currencySymbol}`;
    document.getElementById(`stamp-${index}`).textContent = `0${currencySymbol}`;
    document.getElementById(`net-${index}`).innerHTML = `<strong>0${currencySymbol}</strong>`;
}

// Update row display
function updateRowDisplay(index, result) {
    document.getElementById(`sgk-${index}`).textContent = formatCurrency(result.sgk);
    document.getElementById(`unemployment-${index}`).textContent = formatCurrency(result.unemployment);
    document.getElementById(`base-${index}`).textContent = formatCurrency(result.matrah);
    document.getElementById(`tax-${index}`).textContent = formatCurrency(result.tax);
    document.getElementById(`stamp-${index}`).textContent = formatCurrency(result.stamp);
    document.getElementById(`net-${index}`).innerHTML = `<strong>${formatCurrency(result.net)}</strong>`;
}

// Update totals
function updateTotals() {
    let totalBrut = 0, totalSgk = 0, totalUnemployment = 0;
    let totalBase = 0, totalTax = 0, totalStamp = 0, totalNet = 0;
    let monthCount = 0;

    for (let i = 0; i < 12; i++) {
        const brutInput = document.getElementById(`brut-${i}`).value;
        if (brutInput && brutInput !== '') {
            const brut = parseFloat(brutInput);
            if (!isNaN(brut) && brut > 0) {
                const sgkText = document.getElementById(`sgk-${i}`).textContent
                    .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.');
                const unemploymentText = document.getElementById(`unemployment-${i}`).textContent
                    .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.');
                const baseText = document.getElementById(`base-${i}`).textContent
                    .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.');
                const taxText = document.getElementById(`tax-${i}`).textContent
                    .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.');
                const stampText = document.getElementById(`stamp-${i}`).textContent
                    .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.');
                const netText = document.getElementById(`net-${i}`).textContent
                    .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.');

                totalBrut += brut;
                totalSgk += parseFloat(sgkText) || 0;
                totalUnemployment += parseFloat(unemploymentText) || 0;
                totalBase += parseFloat(baseText) || 0;
                totalTax += parseFloat(taxText) || 0;
                totalStamp += parseFloat(stampText) || 0;
                totalNet += parseFloat(netText) || 0;
                monthCount++;
            }
        }
    }

    // Update footer
    document.getElementById('footer-brut').innerHTML = `<strong>${formatCurrency(totalBrut)}</strong>`;
    document.getElementById('footer-sgk').innerHTML = `<strong>${formatCurrency(totalSgk)}</strong>`;
    document.getElementById('footer-unemployment').innerHTML = `<strong>${formatCurrency(totalUnemployment)}</strong>`;
    document.getElementById('footer-base').innerHTML = `<strong>${formatCurrency(totalBase)}</strong>`;
    document.getElementById('footer-tax').innerHTML = `<strong>${formatCurrency(totalTax)}</strong>`;
    document.getElementById('footer-stamp').innerHTML = `<strong>${formatCurrency(totalStamp)}</strong>`;
    document.getElementById('footer-net').innerHTML = `<strong>${formatCurrency(totalNet)}</strong>`;

    // Update summary cards
    document.getElementById('total-brut').textContent = formatCurrency(totalBrut);
    document.getElementById('total-net').textContent = formatCurrency(totalNet);
    document.getElementById('total-deductions').textContent = 
        formatCurrency(totalSgk + totalUnemployment + totalTax + totalStamp);
    document.getElementById('avg-net').textContent = 
        monthCount > 0 ? formatCurrency(totalNet / monthCount) : formatCurrency(0);
}

// Format currency
function formatCurrency(value) {
    if (isNaN(value) || value === null || value === undefined) {
        return `0${currencySymbol}`;
    }
    return value.toLocaleString('tr-TR', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    }) + currencySymbol;
}

// Update currency for all rows
function updateCurrencyDisplay() {
    for (let i = 0; i < 12; i++) {
        calculateRow(i);
    }
}
