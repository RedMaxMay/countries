import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { filterByCode } from "../config";
import { Button } from "./Button";

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 1rem;
  font-weight: var(--fw-light);

  /* @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 3rem;
  } */
  @media (min-width: 1024px) {
    grid-template-columns: minmax(200px, 500px) 1fr;
    gap: 5rem;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 1.5rem 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* @media (min-width: 1024px) {
    flex-direction: row;
  } */
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0.75rem 0;

  & > b {
    font-weight: var(--fw-normal);
  }
`;

const Meta = styled.div`
  & > span > b {
    font-weight: var(--fw-normal);
  }
`;

const TagGroup = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  & > button > a {
    text-decoration: none;
    color: var(--colors-text);
  }
`;

export default function Info({
  name = {},
  flags = {},
  capital = [],
  population,
  region,
  subregion,
  borders = [],
  continents,
  tld = [],
  area,
}) {
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    axios
      .get(filterByCode(borders))
      .then(({ data }) =>
        setNeighbors(data.map((country) => country.name.common))
      );
  }, [borders]);


  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={flags.alt} />
      <div>
        <InfoTitle>{name.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Common name:</b> {name.common}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population.toLocaleString("en")}
            </ListItem>
            <ListItem>
              <b>Area:</b> {area.toLocaleString("en")} km²
            </ListItem>
            <ListItem>
              <b>Continents:</b> {continents}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Subregion:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital[0]}
            </ListItem>
            <ListItem>
              <b>Top Level Domain:</b> {tld[0]}
            </ListItem>
          </List>
          <Meta>
            <span>
              <b>Border Countries: </b>
            </span>
            {!borders.length ? (
              <span>There is no border countries</span>
            ) : (
              <TagGroup>
                {neighbors.map((neighbor) => (
                  <Button key={neighbor}><Link to={`/country/${neighbor}`}>{neighbor}</Link></Button>
                ))}
              </TagGroup>
            )}
          </Meta>
        </ListGroup>
      </div>
    </Wrapper>
  );
}
