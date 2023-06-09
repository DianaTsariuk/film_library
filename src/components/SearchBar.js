import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
        setSearchQuery('');
    };

    return (
        <form onSubmit={handleSearchSubmit} className="search-bar" data-testid="search-bar">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Enter movie name"
            />
            <button type="submit">Find</button>
        </form>
    );
};

export default SearchBar;
