import React, { useState, useCallback } from "react";
import "./Searchbar.css";
import searchIcon from "./../../images/Searchbar.svg";

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

function Searchbar({ onSearch }) {
  const [value, setValue] = useState("");

  const debouncedSearch = useCallback(
    debounce((searchValue) => {
      onSearch(searchValue);
    }, 1200),
    [onSearch]
  );

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    debouncedSearch(inputValue);
  };

  return (
    <search className="searchbar">
      <label className="search-label" htmlFor="search">
        <img src={searchIcon} alt="Search icon" />
      </label>
      <input
        id="search"
        className="input-search"
        tabIndex={1}
        type="search"
        value={value}
        placeholder="Search Contacts"
        onInput={handleInputChange}
        aria-label="Search Contacts"
      />
    </search>
  );
}

export default Searchbar;
