import React, { useState } from "react";
import Typography from "../Typography/Typography";
import styles from "./Select.module.css";

const Select = ({ text, options, onSelect, toggleDropdown }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(text);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
    toggleDropdown && toggleDropdown();
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect && onSelect(option);
    setIsDropdownVisible(false);
  };

  return (
    <div
      className={styles.dropdown}
      onClick={handleDropdownToggle}
      role="button"
      tabIndex="0"
    >
      <div className={styles.selectedOption}>
        <Typography
          text={selectedOption}
          _color="var(--primary-dark)"
          type={"body"}
        />
      </div>
      <div className={styles.dropdownArrow}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_360_13295)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7064 15.7073C12.5188 15.8948 12.2645 16.0001 11.9994 16.0001C11.7342 16.0001 11.4799 15.8948 11.2924 15.7073L5.63537 10.0503C5.53986 9.9581 5.46367 9.84775 5.41126 9.72575C5.35886 9.60374 5.33127 9.47252 5.33012 9.33974C5.32896 9.20696 5.35426 9.07529 5.40454 8.95239C5.45483 8.82949 5.52908 8.71784 5.62297 8.62395C5.71686 8.53006 5.82852 8.4558 5.95141 8.40552C6.07431 8.35524 6.20599 8.32994 6.33877 8.33109C6.47155 8.33225 6.60277 8.35983 6.72477 8.41224C6.84677 8.46465 6.95712 8.54083 7.04937 8.63634L11.9994 13.5863L16.9494 8.63634C17.138 8.45418 17.3906 8.35339 17.6528 8.35567C17.915 8.35795 18.1658 8.46312 18.3512 8.64852C18.5366 8.83393 18.6418 9.08474 18.644 9.34694C18.6463 9.60914 18.5455 9.86174 18.3634 10.0503L12.7064 15.7073Z"
              fill="#212121"
            />
          </g>
          <defs>
            <clipPath id="clip0_360_13295">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className={`${styles.dropdownMenu} ${
          isDropdownVisible ? styles.show : ""
        }`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={styles.dropdownMenuItem}
            onClick={() => handleOptionSelect(option)}
          >
            <Typography
              text={option}
              _color="var(--primary-dark)"
              type={"body"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
