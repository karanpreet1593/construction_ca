import React, { useState } from 'react';

function SearchAndSortComponent({ items }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedItems, setSortedItems] = useState([...items]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setSortedItems(filteredItems);
  };

  const handleSort = () => {
    const sorted = [...sortedItems].sort();
    setSortedItems(sorted);
  };

  return (
    <div className="max-w-lg mx-auto" >
      <div className="flex flex-col sm:flex-row items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="mb-1 sm:mb-0 sm:mr-2 px-2 py-1 border rounded-2xl focus:outline-none sm:w-48 md:w-96"
        />
      </div>
    </div>
  );
}

export default SearchAndSortComponent;
