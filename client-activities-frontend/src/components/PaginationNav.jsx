import React, { useState } from "react";
import PropTypes from "prop-types";

export default function PaginationNav({
  showPagination,
  numPages,
  onPageChange,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= numPages; i++) {
      pageButtons.push(
        <li key={i}>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            onClick={() => handlePageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    return pageButtons;
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-2">
      {showPagination && (
        <nav>
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={handlePreviousPage}
              >
                Previous
              </a>
            </li>
            {renderPageButtons()}
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={handleNextPage}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

PaginationNav.propTypes = {
  showPagination: PropTypes.bool,
  numPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
