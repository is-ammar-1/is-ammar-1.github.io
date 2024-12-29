import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortOption {
  label: string;
  value: string;
}

interface CollectionSortProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions: SortOption[] = [
  { label: 'Alphabetical', value: 'alphabetical' },
  { label: 'Newest', value: 'newest' },
  { label: 'Most Popular', value: 'popular' },
];

export default function CollectionSort({ value, onChange }: CollectionSortProps) {
  return (
    <div className="flex items-center space-x-3">
      <ArrowUpDown className="h-5 w-5 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-neutral-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}