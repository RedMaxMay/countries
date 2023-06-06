import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CustomSelect } from "./CustomSelect";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const options = [
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "America",
    label: "America",
  },
  {
    value: "Asia",
    label: "Asia",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "Oceania",
    label: "Oceania",
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Controls({ onSearch }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/countries/1");
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
    //eslint-disable-next-line
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
}
