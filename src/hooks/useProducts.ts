import { useState, useEffect } from 'react';
import { Product } from '../types';

// Using the same products data from FeaturedProducts for now
// Later this can be replaced with an API call
const PRODUCTS = [
    {
        id: 1,
        name: "Classic Wool Peacoat",
        price: 15999,
        description: "Timeless double-breasted peacoat crafted from premium wool blend. Features notched lapels and side pockets.",
        image: "https://image1.superdry.com/static/images/optimised/zoom/upload3619524498856175479.jpg?auto=format&fit=crop&q=80",
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 2,
        name: "Leather Biker Jacket",
        price: 24999,
        description: "Genuine leather motorcycle jacket with asymmetrical zip closure and quilted shoulders.",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 3,
        name: "Cashmere Sweater",
        price: 189,
        description: "Luxuriously soft cashmere sweater in a relaxed fit. Perfect for layering.",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80",
        sizes: ["XS", "S", "M", "L"]
      },
      {
        id: 4,
        name: "Tailored Blazer",
        price: 259,
        description: "Sophisticated single-breasted blazer with subtle check pattern. Made from Italian wool.",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "Silk Evening Dress",
        price: 449,
        description: "Elegant floor-length silk dress with draped detail and side slit.",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80",
        sizes: ["XS", "S", "M", "L"]
      },
      {
        id: 6,
        name: "Merino Turtleneck",
        price: 149,
        description: "Fine-knit merino wool turtleneck in a slim fit. Naturally temperature regulating.",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 7,
        name: "Structured Trench Coat",
        price: 289,
        description: "Water-resistant cotton gabardine trench coat with classic double-breasted closure.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80",
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 8,
        name: "Pleated Maxi Skirt",
        price: 179,
        description: "Flowing pleated maxi skirt in lightweight fabric with metallic finish.",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80",
        sizes: ["XS", "S", "M", "L"]
      },
      {
        id: 9,
        name: "Linen Suit Pants",
        price: 159,
        description: "Tailored linen blend trousers with pressed creases and side pockets.",
        image: "https://i.etsystatic.com/17282601/r/il/065181/3183769321/il_1588xN.3183769321_jddo.jpg?auto=format&fit=crop&q=80",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 10,
        name: "Velvet Dinner Jacket",
        price: 329,
        description: "Luxurious velvet dinner jacket with satin peak lapels. Perfect for formal occasions.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
        sizes: ["S", "M", "L", "XL"]
      }
    ];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(PRODUCTS);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
