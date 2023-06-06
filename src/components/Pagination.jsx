import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;

const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 1rem 0;
  padding: 0;
  justify-content: center;
`;

const PaginationItem = styled.li`
  list-style: none;

  & > a {
    display: flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: var(--colors-text);
    text-decoration: none;
    border-radius: var(--radius);
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
  }

  & > a:hover {
    box-shadow: var(--shadow-hover);
  }

  & > .active {
    font-weight: var(--fw-bold);
    text-decoration: underline;
  }
`;

export default function Pagination({ perPage, totalCountries, clickPaginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <PaginationList>
        {pageNumbers.map((num) => (
          <PaginationItem key={num} onClick={() => clickPaginate(num)}>
            <NavLink to={`/countries/${num}`}>{num}</NavLink>
          </PaginationItem>
        ))}
      </PaginationList>
    </Wrapper>
  );
}
