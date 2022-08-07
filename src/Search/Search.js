import React, { useState, useEffect } from "react";

import SearchStyles from "./Search.module.scss";

const Search = ({ renderFilteredData, isSearchDisabled }) => {
  const [inputValue, setInputValue] = useState("");
  const [renderHint, setRenderHint] = useState("");

  const fetchSearchedData = () => {
    fetch("https://gutendex.com/books/")
      .then((res) => res.json())
      .then((data) => setRenderHint(data.results));
  };

  useEffect(fetchSearchedData, [inputValue]);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!renderHint["error"]) {
      setInputValue("");
      renderFilteredData(renderHint.results);
    }
  };

  const onClickHandler = (event) => {
    !renderHint["error"] && setInputValue(event.target.textContent);
  };

  return (
    <form className={SearchStyles.Search} onSubmit={onSubmitHandler}>
      <input
        type="search"
        onChange={onChangeHandler}
        value={inputValue}
        placeholder="Search by name"
        disabled={isSearchDisabled && true}
      ></input>
      {inputValue && (
        <span className={SearchStyles.Hint} onClick={onClickHandler}>
          {renderHint["error"]
            ? "Сharacter not found!"
            : renderHint.results[0].subjects}
        </span>
      )}
      <button disabled={(renderHint["error"] || isSearchDisabled) && true}>
        Search
      </button>
    </form>
  );
};
export default Search;
