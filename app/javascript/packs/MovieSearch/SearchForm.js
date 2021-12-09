import React, { useContext, useState } from "react";
import AppContext from "./AppContext";
import {
  SearchArea,
  searchForm,
  SearchInput,
  SubmitSearch,
  YearInput,
} from "./MovieSearch.css";
import SubmitIcon from "./SubmitIcon.js";

const SearchForm = () => {
  const context = useContext(AppContext);

  const [title, setTitleQuery] = useState("");
  const [year, setYearQuery] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    fetch("/search/" + title + "/" + year, {
      method: "GET",
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => {
        context.setResult(data);
      });
  };

  return (
    <div className={SearchArea}>
      <form className={searchForm} onSubmit={(e) => submitForm(e)}>
        <input
          className={SearchInput}
          type="search"
          value={title}
          name="searchQuery"
          placeholder="Search for title..."
          onChange={(e) => setTitleQuery(e.target.value)}
        />
        <input
          className={YearInput}
          type="text"
          value={year}
          name="yearQuery"
          placeholder="fe. 1977"
          onChange={(e) => setYearQuery(e.target.value)}
        />
        <button className={SubmitSearch}>
          <SubmitIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
