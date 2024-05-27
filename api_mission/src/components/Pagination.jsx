import React from "react";
import styled from "styled-components";
import chevronLeft from "../images/chevron_left.png";
import chevronRight from "../images/chevron_right.png";

const PaginationContainer = styled.div`
  width: 100vw;
  background-color: #222;
  padding-bottom: 20px;
`;

const PageCounter = styled.span`
  font-size: 16px;
  color: white;
  margin: 0 14px;
`;

const BeforeArrow = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const AfterArrow = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      <div style={{ textAlign: "center" }}>
        <BeforeArrow
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img
            src={chevronLeft}
            style={{ width: "16px" }}
            alt="previous page"
          />
        </BeforeArrow>
        <PageCounter>{currentPage}</PageCounter>
        <AfterArrow
          // onClick={pageAfter}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={chevronRight} style={{ width: "16px" }} alt="next page" />
        </AfterArrow>
      </div>
    </PaginationContainer>
  );
};

export default Pagination;
