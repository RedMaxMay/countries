import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  border-radius: var(--radius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.5s ease;
  max-width: 300px;
  height: 100%;

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1.5 / 1;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
  }
`;

export default function Card({ img, name, info = [], onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((item) => (
            <CardListItem key={item.title}>
              <b>{item.title}:</b> {item.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
}