import Select from "react-select";
import styled from "styled-components";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      boxShadow: "var(--shadow)",
      padding: "0.25rem",
      border: "none",
      height: "50px",
      fontSize: "var(--fs-sm)",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: "var(--colors-ui-base)",
    }),
  },
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
