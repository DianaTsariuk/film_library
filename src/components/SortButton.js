import React from 'react';
import './SortButton.css';

const SortButton = ({ onChange }) => {
    const handleSortChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className="sort-container">
            <label className="sort-label" htmlFor="sort-select">
                Sort by:
            </label>
            <select
                id="sort-select"
                className="sort-select"
                onChange={handleSortChange}
            >
                {/* <option value="default">За замовчуванням</option> */}
                <option value="title">title</option>
                <option value="year">year</option>
                <option value="rating">rating</option>
            </select>
        </div>
    );
};

export default SortButton;
