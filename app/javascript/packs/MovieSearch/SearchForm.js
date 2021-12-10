import React, { useContext, useState } from "react";
import AppContext from "./AppContext";
import {
  SearchArea,
  searchForm,
  SearchInput,
  SearchType,
  SubmitSearch,
  YearInput,
} from "./MovieSearch.css";
import SubmitIcon from "./SubmitIcon.js";

const SearchForm = () => {
  const context = useContext(AppContext);
  const title = context.title;
  const year = context.year;
  const type = context.type;

  const submitForm = (e) => {
    e.preventDefault();
    const path = ["search", "omdb", title, type, year]
      .filter((e) => e)
      .join("/");

    fetch(`/${path}`, {
      method: "GET",
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleResponse(data, path);
      });
  };

  const handleResponse = (data, path) => {
    context.setResult(data);
    updatePath(path);
  };

  const updatePath = (path) => {
    window.history.replaceState({}, "", `/${path}`);
  };

  return (
    <div className={SearchArea}>
      <form className={searchForm} onSubmit={(e) => submitForm(e)}>
        <input
          className={SearchInput}
          type="search"
          value={title || ""}
          name="searchQuery"
          placeholder="Search for title..."
          onChange={(e) => context.setTitleQuery(e.target.value)}
        />
        <select
          className={SearchType}
          name="searchTtype"
          defaultValue={type}
          onChange={(e) => context.setMovieType(e.target.value)}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <input
          className={YearInput}
          type="text"
          value={year || ""}
          name="yearQuery"
          placeholder="Year"
          onChange={(e) => context.setYearQuery(e.target.value)}
        />
        <button className={SubmitSearch}>
          <SubmitIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
