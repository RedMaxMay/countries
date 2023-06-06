const BASE_URL = "https://restcountries.com/v3.1/";

export const ALL_COUNTRIES =
  BASE_URL + "all?fields=name,capital,flags,population,region,ccn3";
export const ALL_COUNTRIES2 = BASE_URL + "all";

export const searchByCountry = (name) =>
  BASE_URL + "name/" + name + `?fullText=true`;

export const filterByCode = (codes) =>
  BASE_URL + "alpha?codes=" + codes.join(",");
