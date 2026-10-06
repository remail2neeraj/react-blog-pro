import React from "react";
import styled from "styled-components";

const Pagination = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  return (
    <div>
      <Button onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </Button>

      {pageNumbers.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          // disabled={page === currentPage}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Button>
      ))}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <Button onClick={onNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;

const Button = styled.button`
  padding: 12px 20px;
  border: 1px solid #ccc;
  margin: 8px;
`;
