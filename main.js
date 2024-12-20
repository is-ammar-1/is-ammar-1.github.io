let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-list');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.product.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h2>${item.product.name}</h2>
            <p>$${item.product.price.toFixed(2)}</p>
            <div class="quantity">
                <button onclick="updateQuantity(${item.product.id}, -1)">-</button>
                <input type="text" value="${item.quantity}" readonly>
                <button onclick="updateQuantity(${item.product.id}, 1)">+</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
    const cartTotal = document.createElement('div');
    cartTotal.className = 'cart-total';
    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(cartTotal);
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.product.id !== productId);
        }
        updateCartDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(button.parentElement.dataset.productId, 10);
            addToCart(productId);
        });
    });
});
