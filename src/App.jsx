import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ALL_COUNTRIES } from "./config";
import Details from "./pages/Details";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
