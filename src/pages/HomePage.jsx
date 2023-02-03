import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import data from "../data.json";
import NavigationPlus from "../components/NavigationPlus";
import Overview from "./Overview";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=League+Spartan&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <StyledHomePage menu={showMenu}>
        <h1>the planets</h1>
        <Link to="/">
          <img
            onClick={() => !showMenu && setShowMenu((prevMenu) => !prevMenu)}
            src="/planet-facts/assets/icon-hamburger.svg"
            alt="menu"
          />
        </Link>
      </StyledHomePage>
      {showMenu ? <Navigation setShowMenu={setShowMenu} data={data} /> : null}
      <NavigationPlus data={data} />
      {location.pathname === "/" && showMenu && innerWidth > 768 ? (
        <Overview data={data} name="Mercury" />
      ) : (
        <Outlet />
      )}
    </HelmetProvider>
  );
};

export default HomePage;

export const StyledHomePage = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }
  img {
    opacity: ${(props) => (props.menu ? 0.35 : 1)};
  }
  @media (min-width: 768px) {
    border: none;
    img {
      display: none;
    }
    h1 {
      margin: auto;
    }
  }
  @media (min-width: 1050px) {
    display: inline-flex;
    width: 40%;
    height: 100px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);

    h1 {
      display: inline-flex;
      width: 40%;
      margin-left: 0;
      margin-top: 0.5rem;
      pointer-events: none;
    }
  }
`;
