import React, { useContext } from "react";
import AppContext from "./AppContext";
import { page, pagination } from "./MovieSearch.css";

const Pagination = () => {
  const context = useContext(AppContext);

  const itemsPerPage = 10;
  const total = Math.ceil(context.result.totalResults / itemsPerPage);

  if (total < 2) return null;

  return (
    <nav className={pagination}>
      {[...Array(total)].map((e, i) => (
        <a href="#" className={page} key={i}>
          {i}
        </a>
      ))}
    </nav>
  );
};

export default Pagination;
