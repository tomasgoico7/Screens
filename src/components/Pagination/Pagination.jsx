import React from "react";
import { usePaginationLogic } from "./PaginationLogic";
import "./Pagination.css";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { getPageNumbers } = usePaginationLogic(
    currentPage,
    totalPages,
    onPageChange
  );

  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <div className="page-numbers">
        {getPageNumbers().map((pageNumber) => (
          <span
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={
              pageNumber === currentPage ? "active page-number" : "page-number"
            }
          >
            {pageNumber}
          </span>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};
