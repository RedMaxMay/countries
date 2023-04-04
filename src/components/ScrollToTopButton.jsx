import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoArrowUp } from "react-icons/io5";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  color: var(--colors-text);
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  opacity: ${(props) => (props.isVisible ? "1" : "0")};
`;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button isVisible={isVisible} onClick={scrollToTop}>
      <IoArrowUp />
    </Button>
  );
}

export default ScrollToTopButton;
