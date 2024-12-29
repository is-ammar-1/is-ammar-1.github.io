import { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { collections } from '../data/collections';

export function useCollectionProducts(collectionId: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const collection = collections.find(c => c.id === collectionId);
        if (!collection) {
          throw new Error(`Collection with ID ${collectionId} not found`);
        }
        
        // Ensure products have all required fields
        const productsWithRequiredFields = collection.products?.map(product => ({
          ...product,
          image: product.image || product.images?.[0],
          sizes: product.sizes || ["S", "M", "L"],
          colors: product.colors || [],
          description: product.description || "Product description"
        })) || [];
        
        setProducts(productsWithRequiredFields);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (collectionId) {
      fetchProducts();
    }
  }, [collectionId]);

  return { products, loading, error };
}