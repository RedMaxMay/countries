import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { IoMoon, IoSunnySharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/countries",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

export default function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the World?</Title>
          <ModSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoSunnySharp size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}

            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
}
