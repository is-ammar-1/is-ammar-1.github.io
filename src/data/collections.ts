import { Collection } from '../types/collection';

export const collections: Collection[] = [
  {
    id: 'outerwear',
    name: 'Outerwear Collection',
    description: 'Premium coats and jackets for every season',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    category: 'jackets',
    season: 'winter',
    theme: 'casual',
    createdAt: '2024-01-01',
    productCount: 6,
    products: [
      {
        id: 'out-1',
        name: "Wool Blend Peacoat",
        price: 299,
        description: "Classic double-breasted peacoat in premium wool blend.",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        sizes: ["S", "M", "L"]
      },
      {
        id: 'out-2',
        name: "Leather Bomber Jacket",
        price: 399,
        description: "Vintage-inspired leather bomber jacket.",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        sizes: ["S", "M", "L"]
      },
      {
        id: 'out-3',
        name: "Winter Parka",
        price: 449,
        description: "Warm winter parka with faux fur hood.",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 'out-4',
        name: "Quilted Field Jacket",
        price: 279,
        description: "Lightweight quilted jacket perfect for spring.",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 'out-5',
        name: "Denim Jacket",
        price: 189,
        description: "Classic denim jacket with modern fit.",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 'out-6',
        name: "Rain Shell",
        price: 159,
        description: "Waterproof lightweight shell for rainy days.",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        sizes: ["S", "M", "L"]
      }
    ]
  },
  {
    id: 'formal-wear',
    name: 'Formal Collection',
    description: 'Elegant suits and formal attire',
    image: 'https://umarposhak.pk/cdn/shop/files/Heritage_luxury_Formal_Collection_2024_By_Zarif_01-AVELINE_4e22ddf0-830c-4d96-9551-7ed2c9dbe033_1200x1200.webp?v=1723897278',
    category: 'suits',
    season: 'all',
    theme: 'formal',
    createdAt: '2024-01-15',
    productCount: 6,
    products: [
      {
        id: 'formal-1',
        name: "Classic Black Suit",
        price: 599,
        description: "Two-piece wool blend suit in classic black.",
        image: "https://www.ismailfarid.com/cdn/shop/products/main_1_30_7.jpg?v=1669801760",
        sizes: ["38R", "40R", "42R", "44R"]
      },
      {
        id: 'formal-2',
        name: "Navy Pinstripe Suit",
        price: 649,
        description: "Professional pinstripe suit in navy blue.",
        image: "https://www.ismailfarid.com/cdn/shop/products/main_1_30_7.jpg?v=1669801760",
        sizes: ["38R", "40R", "42R", "44R"]
      },
      {
        id: 'formal-3',
        name: "Tuxedo Set",
        price: 799,
        description: "Premium black tuxedo with satin lapels.",
        image: "https://www.ismailfarid.com/cdn/shop/products/main_1_30_7.jpg?v=1669801760",
        sizes: ["38R", "40R", "42R"]
      },
      {
        id: 'formal-4',
        name: "Gray Business Suit",
        price: 579,
        description: "Modern fit suit in charcoal gray.",
        image: "https://www.ismailfarid.com/cdn/shop/products/main_1_30_7.jpg?v=1669801760",
        sizes: ["38R", "40R", "42R", "44R"]
      },
      {
        id: 'formal-5',
        name: "White Dinner Jacket",
        price: 499,
        description: "Elegant white dinner jacket for formal occasions.",
        image: "https://www.ismailfarid.com/cdn/shop/products/main_1_30_7.jpg?v=1669801760",
        sizes: ["38R", "40R", "42R"]
      },
      {
        id: 'formal-6',
        name: "Brown Wool Suit",
        price: 629,
        description: "Single-breasted wool suit in rich brown.",
        image: "https://www.ismailfarid.com/cdn/shop/products/main_1_30_7.jpg?v=1669801760",
        sizes: ["38R", "40R", "42R", "44R"]
      }
    ]
  },
  {
    id: 'casual-wear',
    name: 'Casual Collection',
    description: 'Comfortable and stylish everyday wear',
    image: 'https://images.unsplash.com/photo-1515664069236-68a74c369d97',
    category: 'outwear',
    season: 'all',
    theme: 'casual',
    createdAt: '2024-02-01',
    productCount: 6,
    products: [
      {
        id: 'casual-1',
        name: "Cotton Chinos",
        price: 89,
        description: "Comfortable cotton chinos for everyday wear.",
        image: "https://images.unsplash.com/photo-1515664069236-68a74c369d97",
        sizes: ["30", "32", "34", "36"]
      },
      {
        id: 'casual-2',
        name: "Polo Shirt",
        price: 49,
        description: "Classic pique polo in various colors.",
        image: "https://focusclothing.pk/cdn/shop/files/19b_e5cd2eec-abb9-4090-87ef-7062e071ba53.jpg?v=1724232327",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 'casual-3',
        name: "Crew Neck Sweater",
        price: 79,
        description: "Soft cotton blend sweater for layering.",
        image: "https://www.almas.pk/cdn/shop/files/CQ08_1.jpg?v=1734508731",
        sizes: ["S", "M", "L"]
      },
      {
        id: 'casual-4',
        name: "Cargo Shorts",
        price: 59,
        description: "Durable cargo shorts with multiple pockets.",
        image: "https://www.leisureclub.pk/cdn/shop/products/MNDS900C322_2.jpg?v=1654585986",
        sizes: ["30", "32", "34", "36"]
      },
      {
        id: 'casual-5',
        name: "Henley Shirt",
        price: 45,
        description: "Long-sleeve henley in soft jersey fabric.",
        image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 'casual-6',
        name: "Zip Hoodie",
        price: 69,
        description: "Classic zip-up hoodie in cotton blend.",
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2",
        sizes: ["S", "M", "L", "XL"]
      }
    ]
  }
];