let cart = [];

function addToCart(productId) {
    const product = getProductById(productId);
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartElement.innerHTML = `Cart (${cart.length}) - Total: $${total.toFixed(2)}`;
}

function scheduleAppointment() {
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    // Appointment scheduling logic
    alert(`Appointment scheduled for ${date} at ${time}`);
}
