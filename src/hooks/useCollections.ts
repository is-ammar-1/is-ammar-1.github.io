import { useState, useEffect } from 'react';
import { Collection } from '../types/collection';
import { collections as mockCollections } from '../data/collections';

type SortOption = 'alphabetical' | 'newest' | 'popular';
type Filters = {
  category?: string;
  season?: string;
  theme?: string;
  available?: boolean;
};

export function useCollections() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 500));
        setCollections(mockCollections);
      } catch (err) {
        setError('Failed to load collections');
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const sortedAndFilteredCollections = collections
    .filter(collection => {
      if (!Object.keys(filters).length) return true;
      
      return Object.entries(filters).every(([key, value]) => {
        if (!value || value === '') return true;
        if (key === 'category') return collection.category === value;
        if (key === 'season') return collection.season === value;
        if (key === 'theme') return collection.theme === value;
        return true;
      });
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'popular':
          return b.productCount - a.productCount;
        default:
          return 0;
      }
    });

  return {
    collections: sortedAndFilteredCollections,
    loading,
    error,
    sortBy,
    setSortBy,
    filters,
    setFilters,
  };
}