// script.js

// Glowing effect on buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 0 20px #0ff';
    });
    button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
    });
});

// Simple membership login simulation
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form[action="index.html"]');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.querySelector('#username').value;
            alert(`Welcome, ${username}!`);
            window.location.href = 'index.html';
        });
    }
});

// Adding items to cart
function addToCart() {
    const itemName = document.querySelector('.product-info h2').textContent;
    alert(`${itemName} has been added to your cart!`);
}

// Handling checkout
const checkoutForm = document.querySelector('form[action="confirmation.html"]');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your order has been placed successfully!');
        window.location.href = 'confirmation.html';
    });
}
