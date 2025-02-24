document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelector('.add-to-cart');
    const popupMessage = document.getElementById('popup-message');

    addToCartButton.addEventListener('click', function() {
        popupMessage.style.display = 'block';

     
        setTimeout(function() {
            popupMessage.style.display = 'none';
        }, 3000); 
    });
});