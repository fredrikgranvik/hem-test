import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import { SearchWidget } from "./MovieSearch.css";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const MovieSearch = () => {
  const [result, setResult] = useState();
  const [title, setTitleQuery] = useState("");
  const [year, setYearQuery] = useState("");
  const [type, setMovieType] = useState("");
  const [page, setPage] = useState("");

  useEffect(() => {
    const initialStateHolder = document.getElementById(
      "MovieSearchInitialState"
    );
    if (initialStateHolder && initialStateHolder?.dataset?.initialState != "") {
      const state = JSON.parse(initialStateHolder.dataset.initialState);
      setTitleQuery(state.title);
      setYearQuery(state.year);
      setMovieType(state.type);
      setPage(state.page);
      setResult(state);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        result,
        setResult,
        title,
        setTitleQuery,
        year,
        setYearQuery,
        type,
        setMovieType,
        page,
        setPage,
      }}
    >
      <article className={SearchWidget}>
        <SearchForm />
        <SearchResult />
      </article>
    </AppContext.Provider>
  );
};

export default MovieSearch;
