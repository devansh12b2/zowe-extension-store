import React from "react";

const categories = [
  "All",
  "Development",
  "Utilities",
  "Security",
  "Networking",
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-64 bg-gray-200 p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className={`p-2 cursor-pointer rounded-md ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
