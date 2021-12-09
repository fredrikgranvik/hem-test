import React, { useContext } from "react";
import AppContext from "./AppContext";
import { pageItem, pagination } from "./MovieSearch.css";
import { css } from "@emotion/css";

const Pagination = () => {
  const context = useContext(AppContext);

  const title = context.title;
  const year = context.year;
  const type = context.type;
  const page = context.page;

  const itemsPerPage = 10;
  const total = Math.ceil(context.result.totalResults / itemsPerPage);

  if (total < 2) return null;

  return (
    <nav className={pagination}>
      {[...Array(total)].map((e, i) => {
        const page = ++i;
        const activeClass = context.page == page ? "active" : "";
        const classes = `pageItem ${activeClass}`;

        return (
          <a
            href={
              "/search/" + title + "/" + type + "/" + year + "?page=" + page
            }
            className={classes}
            key={i}
          >
            {page}
          </a>
        );
      })}
    </nav>
  );
};

export default Pagination;
