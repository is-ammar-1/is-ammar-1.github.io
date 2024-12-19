// ...existing code...

// Function to display products on products.html
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Function to display cart items on cart.html
function displayCartItems() {
    const cartGrid = document.querySelector('.cart-grid');
    cartGrid.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartGrid.appendChild(cartItem);
    });
    // Update total price
    const cartTotal = document.querySelector('.cart-total');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to proceed to checkout
function proceedToCheckout() {
    window.location.href = 'payment.html';
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    displayCartItems();
}

// Event listeners for page-specific functions
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('products.html')) {
        displayProducts();
    } else if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
});

// ...existing code...
