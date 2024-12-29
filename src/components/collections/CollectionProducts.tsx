import React from 'react';
import { useCollectionProducts } from '../../hooks/useCollectionProducts';
import { Loader } from 'lucide-react';
import { Product } from '../../types/Product';

interface CollectionProductsProps {
  collectionId: string;
  onQuickView: (product: Product) => void;
}

const CollectionProducts: React.FC<CollectionProductsProps> = ({ collectionId, onQuickView }) => {
  const { products, loading, error } = useCollectionProducts(collectionId);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 text-gold-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

  if (!products?.length) {
    return <div className="text-gray-400 text-center py-8">No products found in this collection.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group cursor-pointer" onClick={() => onQuickView(product)}>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-900 hover:bg-neutral-800 transition duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-white group-hover:text-gold-500 transition duration-300">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{product.description}</p>
            </div>
            <p className="text-sm font-medium text-gold-500">Rs{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CollectionProducts;