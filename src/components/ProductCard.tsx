import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        <p className="text-gray-400 mt-1">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-white text-lg">${product.price}</span>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}