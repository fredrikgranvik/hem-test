import React, { useContext, useState } from "react";
import AppContext from "./AppContext";

const SearchForm = () => {
  const context = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const query = inputValue;

    fetch("/search/" + query)
      .then((res) => res.json())
      .then((data) => {
        context.setResult(data);
      });
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <input
        type="search"
        value={inputValue}
        name="searchQuery"
        placeholder="Search for movie or series... fe. Title, Year.."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
