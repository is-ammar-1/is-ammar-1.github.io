import { Product } from '../types';

export const products: Record<string, Product[]> = {
  'autumn-winter-2024': [
    {
      id: 'aw24-wool-coat',
      name: 'Premium Wool Coat',
      price: 599.99,
      description: 'Luxurious wool-blend coat with satin lining. Perfect for cold winter days.',
      images: [
        'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80'
      ],
      category: 'outerwear',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Camel', 'Grey'],
      inStock: true
    },
    {
      id: 'aw24-cashmere-sweater',
      name: 'Cashmere Turtleneck',
      price: 299.99,
      description: 'Pure cashmere turtleneck sweater with ribbed details.',
      images: [
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f28?auto=format&fit=crop&q=80'
      ],
      category: 'knitwear',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Cream', 'Black', 'Navy'],
      inStock: true
    }
  ],
  'spring-essentials': [
    {
      id: 'ss24-silk-blouse',
      name: 'Silk Button-Up Blouse',
      price: 249.99,
      description: 'Elegant silk blouse with mother-of-pearl buttons.',
      images: [
        'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf7?auto=format&fit=crop&q=80'
      ],
      category: 'tops',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Blush', 'Sage'],
      inStock: true
    },
    {
      id: 'ss24-linen-pants',
      name: 'High-Waist Linen Pants',
      price: 179.99,
      description: 'Breathable linen pants with a modern wide-leg cut.',
      images: [
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd2?auto=format&fit=crop&q=80'
      ],
      category: 'pants',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Sand', 'White', 'Black'],
      inStock: true
    }
  ],
  'summer-nights': [
    {
      id: 'ss24-silk-dress',
      name: 'Silk Evening Dress',
      price: 449.99,
      description: 'Floor-length silk dress with delicate draping.',
      images: [
        'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1566174053879-31528523f8af?auto=format&fit=crop&q=80'
      ],
      category: 'dresses',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Navy', 'Emerald', 'Black'],
      inStock: true
    },
    {
      id: 'ss24-blazer',
      name: 'Structured Evening Blazer',
      price: 379.99,
      description: 'Tailored blazer with satin lapels.',
      images: [
        'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1591369822096-ffd140ec948e?auto=format&fit=crop&q=80'
      ],
      category: 'jackets',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'White'],
      inStock: true
    }
  ]
};