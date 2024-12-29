import React, { useState } from 'react';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import { Product } from '../types';

export default function Products() {
  const [products] = useState<Product[]>([]);
  
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <ProductFilters
              categories={[
                { label: 'Coats', value: 'coats' },
                { label: 'Dresses', value: 'dresses' },
                { label: 'Suits', value: 'suits' }
              ]}
              sizes={[
                { label: 'XS', value: 'xs' },
                { label: 'S', value: 's' },
                { label: 'M', value: 'm' },
                { label: 'L', value: 'l' },
                { label: 'XL', value: 'xl' }
              ]}
              onFilterChange={(type, value) => {}}
            />
          </aside>
          <main className="flex-1">
            <ProductGrid products={products} />
          </main>
        </div>
      </div>
    </div>
  );
}