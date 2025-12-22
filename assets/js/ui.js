// Months array
const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

// Initialize table
function initTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    months.forEach((month, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="month-cell">${index + 1}. ${month}</td>
            <td><input type="number" id="brut-${index}" placeholder="26005.50" oninput="calculateRow(${index})"></td>
            <td id="sgk-${index}">0${currencySymbol}</td>
            <td id="unemployment-${index}">0${currencySymbol}</td>
            <td id="base-${index}">0${currencySymbol}</td>
            <td id="tax-${index}">0${currencySymbol}</td>
            <td id="stamp-${index}">0${currencySymbol}</td>
            <td id="net-${index}"><strong>0${currencySymbol}</strong></td>
        `;
        tbody.appendChild(row);
    });
}

// Toggle dropdown
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    
    allDropdowns.forEach(d => {
        if (d.id !== id) d.classList.remove('show');
    });
    
    dropdown.classList.toggle('show');
}

// Select currency
function selectCurrency(currency, symbol) {
    currentCurrency = currency;
    currencySymbol = symbol;
    document.getElementById('currency-text').textContent = currency;
    
    // Remove all selected classes
    document.querySelectorAll('#currency-select .dropdown-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Add selected class to clicked item
    event.target.classList.add('selected');
    
    toggleDropdown('currency-select');
    
    // Recalculate all rows
    updateCurrencyDisplay();
}

// Select year
function selectYear(year) {
    currentYear = year;
    document.getElementById('year-text').textContent = year;
    
    document.querySelectorAll('#year-select .dropdown-item').forEach(item => {
        item.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    toggleDropdown('year-select');
}

// Select direction
function selectDirection(direction) {
    calculationDirection = direction;
    const text = direction === 'brut-to-net' ? 'Brütten Nete' : 'Netten Brüte';
    document.getElementById('calc-direction-text').textContent = text;
    
    document.querySelectorAll('#calc-direction .dropdown-item').forEach(item => {
        item.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    toggleDropdown('calc-direction');
}

// Select view
function selectView(view) {
    document.getElementById('view-text').textContent = view === 'table' ? 'Tablo' : 'Kart Görünümü';
    
    document.querySelectorAll('#view-mode .dropdown-item').forEach(item => {
        item.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    toggleDropdown('view-mode');
}

// Toggle side panel
function toggleSidePanel() {
    document.getElementById('side-panel').classList.toggle('show');
}

// Close dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.closest('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initTable();
    console.log('Maaşını Hesapla by Göksel - v2.0 Yüklendi ✅');
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close side panel
    if (e.key === 'Escape') {
        const sidePanel = document.getElementById('side-panel');
        if (sidePanel.classList.contains('show')) {
            toggleSidePanel();
        }
        
        // Close all dropdowns
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
    
    // Ctrl+P for PDF export
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        exportToPDF();
    }
    
    // Ctrl+E for Excel export
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        exportToExcel();
    }
});

// Auto-fill all months with same value
function fillAllMonths() {
    const firstValue = document.getElementById('brut-0').value;
    if (firstValue && firstValue !== '') {
        for (let i = 1; i < 12; i++) {
            document.getElementById(`brut-${i}`).value = firstValue;
            calculateRow(i);
        }
    }
}

// Clear all inputs
function clearAllInputs() {
    for (let i = 0; i < 12; i++) {
        document.getElementById(`brut-${i}`).value = '';
        clearRow(i);
    }
    updateTotals();
}

// Add helper buttons (can be added to UI)
function addHelperButtons() {
    const toolbar = document.querySelector('.toolbar-right');
    
    // Fill all button
    const fillBtn = document.createElement('button');
    fillBtn.className = 'dropdown-btn';
    fillBtn.innerHTML = '<span>📝</span><span>Hepsini Doldur</span>';
    fillBtn.onclick = fillAllMonths;
    
    // Clear all button
    const clearBtn = document.createElement('button');
    clearBtn.className = 'dropdown-btn';
    clearBtn.innerHTML = '<span>🗑️</span><span>Temizle</span>';
    clearBtn.onclick = clearAllInputs;
    
    toolbar.insertBefore(clearBtn, toolbar.lastChild);
    toolbar.insertBefore(fillBtn, toolbar.lastChild);
}
