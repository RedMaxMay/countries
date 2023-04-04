import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Controls from "../components/Controls";
import List from "../components/List";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function HomePage({ countries }) {
  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

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

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((country) => {
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
              to={`/country/${country.name.common}`}
            >
              <Card key={country.name.common} {...countryInfo} />
            </Link>
          );
        })}
      </List>
      <ScrollToTopButton />
    </>
  );
}
