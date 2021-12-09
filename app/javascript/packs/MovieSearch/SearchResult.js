import React, { useContext } from "react";
import AppContext from "./AppContext";

const SearchResult = () => {
  const context = useContext(AppContext);

  return (
    <section>
      {context.result?.Search && (
        <>
          <h2>Resultat</h2>
          {context.result.Search.map((m, i) => {
            return (
              <div key={m + i}>
                <div>
                  <img src={m.Poster} alt={m.Title + "-" + m.imdbID} />
                </div>
                <p>{m.Title}</p>
                <p>{m.Year}</p>
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};

export default SearchResult;
