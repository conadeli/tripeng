import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = Icons[category.icon as keyof typeof Icons];

  return (
    <Link
      to={`/category/${category.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <IconComponent className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
        </div>
        <div className="mt-4 space-y-2">
          {category.subcategories.map((sub) => (
            <p key={sub.id} className="text-sm text-gray-600 ml-14">
              • {sub.title}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}