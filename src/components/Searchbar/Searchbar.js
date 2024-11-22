import React, { useState, useCallback } from "react";
import styles from "./Searchbar.module.css";

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
    <search className={styles.searchbar}>
      <label className={styles.searchLabel} htmlFor="search">
        <img src={searchIcon} alt="Search icon" />
      </label>
      <input
        id="search"
        className={styles.inputSearch}
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
