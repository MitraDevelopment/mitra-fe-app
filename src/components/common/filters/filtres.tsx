import React from "react";
import type { Category, CategoryId } from "@/modules/categories";

interface FiltersProps {
  categories: Category[];
  activeCategory: Category;
  onCategoryChange: (categoryId: CategoryId) => void;
}

const Filters: React.FC<FiltersProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-full bg-gray-900 p-4">
      <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap
              ${
                activeCategory.id === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {category.icon && <span className="mr-2">{category.icon}</span>}
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
