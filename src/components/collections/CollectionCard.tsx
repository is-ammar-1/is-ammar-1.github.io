import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Collection } from '../../types/collection';
import { Link } from 'react-router-dom';

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={collection.heroImage}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-serif text-white mb-2">{collection.title}</h3>
          {collection.description && (
            <p className="text-gray-200 mb-4 line-clamp-2">{collection.description}</p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-gray-300">{collection.productCount} Products</span>
            <Link
              to={`/collections/${collection.id}`}
              className="bg-gold-500 text-black px-6 py-2 flex items-center space-x-2 hover:bg-gold-600 transition"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}