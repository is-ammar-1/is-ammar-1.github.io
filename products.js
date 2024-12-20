const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'images/1.JPG',
        category: 'Category 1'
    },
    {
        id: 2,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'images/1.JPG',
        category: 'Category 1'
    },
    {
        id: 3,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'images/1.JPG',
        category: 'Category 1'
    },
    {
        id: 4,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'images/1.JPG',
        category: 'Category 1'
    },
    {
        id: 5,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'images/1.JPG',
        category: 'Category 1'
    },
    {
        id: 6,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'images/1.JPG',
        category: 'Category 1'
    },
    {
        id: 7,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'images/1.JPG',
        category: 'Category 1'
    },
    {
        id: 8,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'images/1.JPG',
        category: 'Category 1'
    },
];

let cart = [];

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.dataset.productId = product.id;
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <a href="#" class="button add-to-cart">Add to Cart</a>
        `;
        productContainer.appendChild(productElement);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(event) {
    event.preventDefault();
    const productId = event.target.closest('.product-item').dataset.productId;
    const product = products.find(p => p.id == productId);
    const cartItem = cart.find(item => item.product.id == productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }

    displayCart();
}

function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <h3>${item.product.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${(item.product.price * item.quantity).toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItemElement);
        total += item.product.price * item.quantity;
    });

    const totalElement = document.createElement('div');
    totalElement.className = 'cart-total';
    totalElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    cartContainer.appendChild(totalElement);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
