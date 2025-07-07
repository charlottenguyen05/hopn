'use client';

import { ChevronsUpDownIcon } from "lucide-react";
import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  categories
}) => {
  return (
    <div className="relative w-full max-w-xs">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full pl-3 pr-7 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 appearance-none cursor-pointer"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-1 pl-3 flex items-center pointer-events-none">
        <ChevronsUpDownIcon className="size-6 text-gray-400"/>
      </div>
    </div>
  );
};

export default CategoryFilter;