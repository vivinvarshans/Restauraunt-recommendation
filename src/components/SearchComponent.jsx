import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchComponent1 = ({ sampleData, filteredData, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = filteredData.length > 0 ? filteredData : sampleData;
    const updatedData = filtered.filter((item) => {
      const locationLower = item.location.toLowerCase();
      const descriptionLower = item.description.toLowerCase();
      const titleLower = item.title.toLowerCase();

      return (
        locationLower.includes(searchTerm) ||
        descriptionLower.includes(searchTerm) ||
        titleLower.includes(searchTerm)
      );
    });

    setFilteredData(updatedData);
  };

  return (
    <div className="search-bar-container">
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by restaurant name, food or location"
        value={searchTerm}
        onChange={handleSearch}
      />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent1;