document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from localStorage
    const invoicedate = localStorage.getItem('invoice-date');
    const clientname = localStorage.getItem('client-name');
    const clientaddress = localStorage.getItem('client-address');
    const startdate = localStorage.getItem('start-date');
    const clientPreviewData = localStorage.getItem('clientpreview-data');
    const stampPreviewData = localStorage.getItem('stamppreview-data');

    // Display data in HTML
    displayData(invoicedate, clientname, clientaddress, startdate, clientPreviewData, stampPreviewData);
});

function displayData(invoicedate, clientname, clientaddress, startdate, clientPreviewData, stampPreviewData) {
    console.log('invoice-date:', invoicedate);
    console.log('client-name:', clientname);
    console.log('client-address:', clientaddress);
    console.log('start-date:', startdate);
    console.log('clientpreview-data:', clientPreviewData);
    console.log('stamppreview-data:', stampPreviewData);

    // Set text content for elements
    document.getElementById('invoice-date').textContent = invoicedate;
    document.getElementById('client-name').textContent = clientname;
    document.getElementById('client-address').textContent = clientaddress;
    document.getElementById('start-date').textContent = startdate;

    // Display the sign image
    displayImage('review-clientpreview', clientPreviewData);

    // Display the stamp image
    displayImage('review-stamppreview', stampPreviewData);
}

function displayImage(elementId, imageData) {
    const imageElement = document.getElementById(elementId);

    if (imageElement) {
        if (imageData) {
            imageElement.src = imageData;
            imageElement.classList.remove('hidden');
        }
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}

function generatePDF() {
    const pdfOptions = {
        margin: 5,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const invoice = document.getElementById('invoice');

    // Use html2pdf library to generate and download PDF
    html2pdf().from(invoice).set(pdfOptions).outputPdf("datauristring").then(function (pdfDataUri) {
        const pdfLink = document.createElement('a');
        pdfLink.href = pdfDataUri;
        pdfLink.download = 'document.pdf';
        pdfLink.click();
    });
}

function printPDF() {
    // Use window.print() to trigger the browser's print functionality
    window.print();
}
