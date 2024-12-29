import React from 'react';

interface FilterOption {
  label: string;
  value: string;
}

interface ProductFiltersProps {
  categories: FilterOption[];
  sizes: FilterOption[];
  onFilterChange: (type: string, value: string) => void;
}

export default function ProductFilters({ categories, sizes, onFilterChange }: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-serif text-white mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.value} className="flex items-center text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox text-gold-500"
                onChange={(e) => onFilterChange('category', category.value)}
              />
              <span className="ml-2">{category.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-serif text-white mb-3">Size</h3>
        <div className="space-y-2">
          {sizes.map((size) => (
            <label key={size.value} className="flex items-center text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox text-gold-500"
                onChange={(e) => onFilterChange('size', size.value)}
              />
              <span className="ml-2">{size.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}