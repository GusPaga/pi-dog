import React from "react";
import style from "./Paginated.module.css";

export default function Paginated({ paginated, state, page, cardsPerPage }) {
  const maxPage = Math.round(state.length / cardsPerPage);
  return (
    <div className={style.paginated}>
      {page > 1 && <button onClick={() => paginated((page = 1))}>⯇⯇</button>}
      {page > 1 && <button onClick={() => paginated(page - 1)}>⯇</button>}

      <button>{page}</button>

      {page < maxPage && (
        <button onClick={() => paginated(page + 1)}>⯈</button>
      )}
      {page < maxPage && <button
        onClick={() => paginated(page = maxPage)}>⯈⯈</button>}
    </div>
  );
}
