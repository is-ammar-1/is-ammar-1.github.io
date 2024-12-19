const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        image: 'product1.jpg',
        category: 'Category 1'
    },
    // ...add 9 more products...
];

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <a href="#" class="button">Add to Cart</a>
        `;
        productContainer.appendChild(productElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
