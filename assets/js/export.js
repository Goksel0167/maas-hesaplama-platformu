// Export to PDF
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text('Maaşını Hesapla by Göksel - Yıllık Maaş Hesaplama', 14, 15);
    
    doc.setFontSize(10);
    doc.text(`Yıl: ${currentYear} | Para Birimi: ${currentCurrency}`, 14, 22);
    doc.text(`Oluşturulma Tarihi: ${new Date().toLocaleDateString('tr-TR')}`, 14, 28);

    // Prepare table data
    const months = [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];

    const tableData = [];
    for (let i = 0; i < 12; i++) {
        const brut = document.getElementById(`brut-${i}`).value || '0';
        const sgk = document.getElementById(`sgk-${i}`).textContent.replace(currencySymbol, '').trim();
        const unemployment = document.getElementById(`unemployment-${i}`).textContent.replace(currencySymbol, '').trim();
        const base = document.getElementById(`base-${i}`).textContent.replace(currencySymbol, '').trim();
        const tax = document.getElementById(`tax-${i}`).textContent.replace(currencySymbol, '').trim();
        const stamp = document.getElementById(`stamp-${i}`).textContent.replace(currencySymbol, '').trim();
        const net = document.getElementById(`net-${i}`).textContent.replace(currencySymbol, '').trim();

        tableData.push([
            `${i + 1}. ${months[i]}`,
            brut,
            sgk,
            unemployment,
            base,
            tax,
            stamp,
            net
        ]);
    }

    // Add totals row
    tableData.push([
        'TOPLAM',
        document.getElementById('footer-brut').textContent.replace(currencySymbol, '').trim(),
        document.getElementById('footer-sgk').textContent.replace(currencySymbol, '').trim(),
        document.getElementById('footer-unemployment').textContent.replace(currencySymbol, '').trim(),
        document.getElementById('footer-base').textContent.replace(currencySymbol, '').trim(),
        document.getElementById('footer-tax').textContent.replace(currencySymbol, '').trim(),
        document.getElementById('footer-stamp').textContent.replace(currencySymbol, '').trim(),
        document.getElementById('footer-net').textContent.replace(currencySymbol, '').trim()
    ]);

    doc.autoTable({
        startY: 35,
        head: [['Ay', 'Brüt', 'SGK', 'İşsizlik', 'Matrah', 'Gelir V.', 'Damga V.', 'Net']],
        body: tableData,
        theme: 'grid',
        headStyles: { 
            fillColor: [99, 102, 241],
            fontSize: 9,
            fontStyle: 'bold'
        },
        bodyStyles: {
            fontSize: 8
        },
        footStyles: { 
            fillColor: [241, 245, 249], 
            textColor: [30, 41, 59], 
            fontStyle: 'bold',
            fontSize: 9
        },
        alternateRowStyles: {
            fillColor: [248, 250, 252]
        }
    });

    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    doc.setFontSize(8);
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.text(
            `Sayfa ${i} / ${pageCount}`,
            doc.internal.pageSize.getWidth() / 2,
            doc.internal.pageSize.getHeight() - 10,
            { align: 'center' }
        );
    }

    doc.save(`maas-hesaplama-${currentYear}.pdf`);
}

// Export to Excel
function exportToExcel() {
    const wb = XLSX.utils.book_new();
    
    const months = [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];

    // Header row
    const tableData = [
        ['Maaşını Hesapla by Göksel - Yıllık Maaş Hesaplama'],
        [`Yıl: ${currentYear}`, `Para Birimi: ${currentCurrency}`, `Tarih: ${new Date().toLocaleDateString('tr-TR')}`],
        [],
        ['Ay', 'Brüt Ücret', 'SGK İşçi (14%)', 'İşsizlik (1%)', 'Vergi Matrahı', 'Gelir Vergisi', 'Damga Vergisi', 'Net Ücret']
    ];

    // Data rows
    for (let i = 0; i < 12; i++) {
        const brut = parseFloat(document.getElementById(`brut-${i}`).value) || 0;
        const sgk = parseFloat(document.getElementById(`sgk-${i}`).textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0;
        const unemployment = parseFloat(document.getElementById(`unemployment-${i}`).textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0;
        const base = parseFloat(document.getElementById(`base-${i}`).textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0;
        const tax = parseFloat(document.getElementById(`tax-${i}`).textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0;
        const stamp = parseFloat(document.getElementById(`stamp-${i}`).textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0;
        const net = parseFloat(document.getElementById(`net-${i}`).textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0;

        tableData.push([
            `${i + 1}. ${months[i]}`,
            brut,
            sgk,
            unemployment,
            base,
            tax,
            stamp,
            net
        ]);
    }

    // Add totals
    tableData.push([
        'TOPLAM',
        parseFloat(document.getElementById('footer-brut').textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0,
        parseFloat(document.getElementById('footer-sgk').textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0,
        parseFloat(document.getElementById('footer-unemployment').textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0,
        parseFloat(document.getElementById('footer-base').textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0,
        parseFloat(document.getElementById('footer-tax').textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0,
        parseFloat(document.getElementById('footer-stamp').textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0,
        parseFloat(document.getElementById('footer-net').textContent
            .replace(currencySymbol, '').replace(/\./g, '').replace(',', '.')) || 0
    ]);

    const ws = XLSX.utils.aoa_to_sheet(tableData);
    
    // Merge cells for title
    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 7 } }
    ];

    // Set column widths
    ws['!cols'] = [
        { wch: 15 },
        { wch: 12 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
        { wch: 12 }
    ];

    // Style header
    const headerStyle = {
        font: { bold: true, sz: 14 },
        alignment: { horizontal: 'center', vertical: 'center' }
    };

    const dataHeaderStyle = {
        font: { bold: true },
        fill: { fgColor: { rgb: "6366f1" } },
        alignment: { horizontal: 'center' }
    };

    XLSX.utils.book_append_sheet(wb, ws, `Maaş ${currentYear}`);
    XLSX.writeFile(wb, `maas-hesaplama-${currentYear}.xlsx`);
}
