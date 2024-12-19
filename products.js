const products = [
    {
        id: 1,
        name: "Classic Business Suit",
        price: 599.99,
        category: "formal",
        image: "images/suit-1.jpg",
        description: "Premium wool blend business suit in charcoal grey"
    },
    // ... 9 more product objects
];

function getProductById(id) {
    return products.find(product => product.id === id);
}

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}
