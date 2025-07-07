"use client";

import SearchBar from "@/app/experiences/components/SearchBar";
import CategoryFilter from "@/app/experiences/components/CategoryFitler";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  categories: string[];
}

export default function SearchAndFilter({
  search,
  setSearch,
  category,
  setCategory,
  categories,
}: Props) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center gap-5">
        <div className="flex-1/2">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search for experiences..."
          />
        </div>
        <div className="flex-1">
          <CategoryFilter
            selectedCategory={category}
            onCategoryChange={setCategory}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
}