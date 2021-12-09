import React, { useContext } from "react";
import AppContext from "./AppContext";
import {
  Image,
  SearchItem,
  searchResult,
  Title,
  Year,
} from "./MovieSearch.css";
import Pagination from "./Pagination";

const SearchResult = () => {
  const context = useContext(AppContext);

  return (
    <section className={searchResult}>
      {context.result?.Search && (
        <>
          <h2>Resultat - (total results: {context.result.totalResults})</h2>
          <Pagination />

          {context.result.Search.map((m, i) => {
            return (
              <SearchItem key={m + i}>
                <Image>
                  <img src={m.Poster} alt={m.Title + "-" + m.imdbID} />
                </Image>
                <Title>{m.Title}</Title>
                <Year>{m.Year}</Year>
              </SearchItem>
            );
          })}
        </>
      )}
    </section>
  );
};

export default SearchResult;
