import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const MovieSearch = () => {
  const [result, setResult] = useState();

  useEffect(() => {
    const initialStateHolder = document.getElementById(
      "MovieSearchInitialState"
    );
    if (initialStateHolder) {
      const state = JSON.parse(initialStateHolder.dataset.initialState);
      setResult(state);
    }
  }, []);

  return (
    <AppContext.Provider value={{ result, setResult }}>
      <article>
        <SearchForm />
        <SearchResult />
      </article>
    </AppContext.Provider>
  );
};

export default MovieSearch;
