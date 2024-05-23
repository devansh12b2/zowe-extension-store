import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ExtensionList from "./components/ExtensionList";
import Header from "./components/Header";
import { extensions } from "./data/extensions";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExtensions = extensions.filter(
    (ext) =>
      ext.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || ext.category === selectedCategory)
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex flex-col flex-1">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="p-6 overflow-y-auto">
          <ExtensionList extensions={filteredExtensions} />
        </main>
      </div>
    </div>
  );
};

export default App;
