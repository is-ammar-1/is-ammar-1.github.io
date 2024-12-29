import React from 'react';
import { useCollections } from '../hooks/useCollections';
import CollectionCard from '../components/collections/CollectionCard';
import CollectionFilters from '../components/collections/CollectionFilters';
import CollectionSort from '../components/collections/CollectionSort';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Loader } from 'lucide-react';

const filterOptions = {
  categories: [
    { label: 'Autumn/Winter', value: 'aw' },
    { label: 'Spring/Summer', value: 'ss' },
    { label: 'Limited Edition', value: 'limited' },
  ],
  seasons: [
    { label: 'Spring', value: 'spring' },
    { label: 'Summer', value: 'summer' },
    { label: 'Autumn', value: 'autumn' },
    { label: 'Winter', value: 'winter' },
  ],
  themes: [
    { label: 'Casual', value: 'casual' },
    { label: 'Formal', value: 'formal' },
    { label: 'Sport Luxe', value: 'sport' },
  ],
};

export default function Collections() {
  const {
    collections,
    loading,
    error,
    sortBy,
    setSortBy,
    filters,
    setFilters,
  } = useCollections();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections' },
  ];

  if (error) {
    return (
      <div className="pt-24 pb-16 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-white">Our Collections</h1>
          <CollectionSort
            value={sortBy}
            onChange={(value) => setSortBy(value as any)}
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <aside>
            <CollectionFilters
              categories={filterOptions.categories}
              seasons={filterOptions.seasons}
              themes={filterOptions.themes}
              onFilterChange={(key, value) => 
                setFilters(prev => ({ ...prev, [key]: value }))
              }
            />
          </aside>

          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader className="h-8 w-8 text-gold-500 animate-spin" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collections.map(collection => (
                  <CollectionCard
                    key={collection.id}
                    collection={collection}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}