import React from "react";
import style from "./Pagination.module.css";

function Pagination({ drivers, driversPerPage, currentPage, paginated }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(drivers / driversPerPage); i++) {
    pageNumber.push(i);
  }

  const prevOrNext = (event) => {
    event.preventDefault();

    if (event.target.innerText === "Next" && currentPage < pageNumber.length) {
      paginated(currentPage + 1);
    } else if (event.target.innerText === "Prev" && currentPage > 1) {
      paginated(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    paginated(1);
  };

  const goToLastPage = () => {
    paginated(pageNumber.length);
  };

  return (
    <div className={style.pagination}>
      <div className={`${style.number} ${style.buttonWrapper}`}>
        <button
          className={`${style.link} ${currentPage === 1 ? style.disabled : ""}`}
          onClick={prevOrNext}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </div>
      <div className={`${style.number} ${style.buttonWrapper}`}>
        <button
          className={`${style.link} ${currentPage === 1 ? style.disabled : ""}`}
          onClick={goToFirstPage}
          disabled={currentPage === 1}
        >
          First
        </button>
      </div>
      {pageNumber.slice(currentPage - 1, currentPage + 4).map((number) => (
        <div
          key={number}
          className={`${style.number} ${
            currentPage === number ? style.active : ""
          }`}
        >
          <button className={style.link} onClick={() => paginated(number)}>
            {number}
          </button>
        </div>
      ))}
      <div className={`${style.number} ${style.buttonWrapper}`}>
        <button
          className={`${style.link} ${
            currentPage === pageNumber.length ? style.disabled : ""
          }`}
          onClick={goToLastPage}
          disabled={currentPage === pageNumber.length}
        >
          Last
        </button>
      </div>
      <div className={`${style.number} ${style.buttonWrapper}`}>
        <button
          className={`${style.link} ${
            currentPage === pageNumber.length ? style.disabled : ""
          }`}
          onClick={prevOrNext}
          disabled={currentPage === pageNumber.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
