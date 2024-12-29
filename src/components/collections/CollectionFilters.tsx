import React from 'react';
import { Filter } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

type FilterKey = 'category' | 'season' | 'theme';

interface CollectionFiltersProps {
  categories: FilterOption[];
  seasons: FilterOption[];
  themes: FilterOption[];
  onFilterChange: (key: FilterKey, value: string) => void;
  activeFilters: Record<FilterKey, string>;
  onClearFilters: () => void;
}

export default function CollectionFilters({
  categories,
  seasons,
  themes,
  onFilterChange,
  onClearFilters,
  activeFilters
}: CollectionFiltersProps) {
  return (
    <div className="bg-neutral-900 p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-5 w-5 text-gold-500" />
        <h2 className="text-lg font-serif text-white">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-white mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category.value} className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  checked={activeFilters.category === category.value}
                  className="form-checkbox text-gold-500 rounded"
                  onChange={() => onFilterChange('category', category.value)}
                />
                <span className="ml-2">{category.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white mb-3">Season</h3>
          <div className="space-y-2">
            {seasons.map(season => (
              <label key={season.value} className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  checked={activeFilters.season === season.value}
                  className="form-checkbox text-gold-500 rounded"
                  onChange={() => onFilterChange('season', season.value)}
                />
                <span className="ml-2">{season.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white mb-3">Theme</h3>
          <div className="space-y-2">
            {themes.map(theme => (
              <label key={theme.value} className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  checked={activeFilters.theme === theme.value}
                  className="form-checkbox text-gold-500 rounded"
                  onChange={() => onFilterChange('theme', theme.value)}
                />
                <span className="ml-2">{theme.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {Object.values(activeFilters).some(value => value) && (
        <button
          onClick={onClearFilters}
          className="text-sm text-gold-500 hover:text-gold-400 mt-6"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}