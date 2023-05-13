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

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={handleChange}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default Autocomplete;
