// index.js

function switchTab(tabId) {
    const editTab = document.getElementById('edit-tab');
    const previewTab = document.getElementById('preview-tab');

    if (tabId === 'edit-tab') {
        // Switch to the edit tab logic
        editTab.style.display = 'block';
        previewTab.style.display = 'none';
    } else if (tabId === 'preview-tab') {
        // Switch to the preview tab logic
        window.location.href = 'review.html';
        editTab.style.display = 'none';
        previewTab.style.display = 'block';
        displayPreviewValues();
    }
}
function displayPreviewValues() {
    // Retrieve input values
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const clientName = document.getElementById('client-name').value;
    const clientAddress = document.getElementById('client-address').value;
    const startDate = document.getElementById('start-date').value;

    // Create a URL with query parameters
    const reviewURL = `review.html?gender=${gender}&invoiceDate=${invoiceDate}&clientName=${clientName}&clientAddress=${clientAddress}&startDate=${startDate}`;

    // Redirect to review.html
    window.location.href = reviewURL;
}


function previewImage(input) {
    // Your previewImage function logic
}