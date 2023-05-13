import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
  1. input
    - type - support varieties e.g. text, image
    - debounce - prevent hit api too many times

  2. render results

 */

function Autocomplete() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
  }

  function handleSearchClick() {
    // Handle the click event here
    console.log("Search icon clicked!");
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={handleChange}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="search-icon"
        onClick={handleSearchClick}
      />
    </div>
  );
}

export default Autocomplete;
