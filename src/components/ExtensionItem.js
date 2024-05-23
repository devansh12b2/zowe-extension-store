import React from "react";

const ExtensionItem = ({ extension }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 m-2 shadow-md w-full sm:w-1/2 lg:w-1/3 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-bold">{extension.name}</h3>
      <p className="text-sm text-gray-600">Author: {extension.author}</p>
      <p className="mt-2 text-gray-700">{extension.description}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600 transition-colors duration-300">
        Install
      </button>
    </div>
  );
};

export default ExtensionItem;
