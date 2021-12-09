import React, { useState } from "react";
import AppContext from "./AppContext";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const MovieSearch = () => {
  const [result, setResult] = useState();

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
