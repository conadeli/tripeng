import React from 'react';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import AdBanner from '../components/AdBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdBanner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          실용적인 여행 영어 학습
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}