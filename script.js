document.addEventListener("DOMContentLoaded", function () {
    const productImages = document.querySelectorAll('.product img');

    productImages.forEach(image => {
        image.addEventListener('click', () => {
            const productId = image.getAttribute('data-product');
            window.location.href = `${productId}.html`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll('.view-details');
    const productDetails = document.querySelector('.product-details');
    const closeDetailsButton = document.querySelector('.close-details');
    const productDetailsContent = document.querySelector('.product-details-content');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productImageSrc = document.querySelector(`[alt="${productName}"]`).getAttribute('src');
            const productDetailsHTML = `
                <img src="${productImageSrc}" width="50%" height ="50%" alt="${productName}">
                <h3>${productName}</h3>
                <!-- Add more product details here -->
            `;
            productDetailsContent.innerHTML = productDetailsHTML;
            productDetails.style.display = 'block';
        });
    });

    closeDetailsButton.addEventListener('click', () => {
        productDetails.style.display = 'none';
    });
});
