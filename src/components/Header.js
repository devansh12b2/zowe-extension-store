import React from "react";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="flex justify-between items-center bg-blue-600 text-white p-4 shadow-lg">
      <h1 className="text-2xl font-bold">Zowe Extension Store</h1>
      <input
        type="text"
        placeholder="Search extensions..."
        className="p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
};

export default Header;
