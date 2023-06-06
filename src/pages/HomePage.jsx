import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Controls from "../components/Controls";
import List from "../components/List";
import { Link, useParams } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Pagination from "../components/Pagination";

export default function HomePage({ countries }) {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(page);
  const [perPage] = useState(20);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  const clickPaginate = (pageNum) => setCurrentPage(pageNum);

  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }
    if (search) {
      data = data.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  const lastCountryIndex = currentPage * perPage;
  const firstCountryIndex = lastCountryIndex - perPage;
  const currentCountriesOnPage = filteredCountries.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  return (
    <>
      <Pagination
        totalCountries={filteredCountries.length}
        perPage={perPage}
        clickPaginate={clickPaginate}
      />
      <Controls onSearch={handleSearch} />
      <List>
        {currentCountriesOnPage.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name.common,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };
          return (
            <Link
              style={{ color: `inherit`, textDecoration: "none" }}
              key={country.name.common}
              to={`/country/${country.name.official.split(" ").join("_")}`}
            >
              <Card key={country.name.common} {...countryInfo} />
            </Link>
          );
        })}
      </List>
      <Pagination
        totalCountries={filteredCountries.length}
        perPage={perPage}
        clickPaginate={clickPaginate}
      />
      <ScrollToTopButton />
    </>
  );
}
