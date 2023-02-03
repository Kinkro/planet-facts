import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Overview from "./Overview";
import Footer from "../components/Footer";

const PlanetPage = ({ path, data, name }) => {
  const location = useLocation();
  return (
    <div>
      <StyledNav>
        <StyledLink to={`${path}/overview`}>Overview</StyledLink>
        <StyledLink to={`${path}/structure`}>Structure</StyledLink>
        <StyledLink to={`${path}/surface`}>Surface</StyledLink>
      </StyledNav>
      {location.pathname === path ? (
        <Overview data={data} name={name} />
      ) : (
        <Outlet />
      )}
      <Footer data={data} name={name} />
    </div>
  );
};

export default PlanetPage;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  padding: 1.2rem 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  opacity: 0.35;
  font-size: 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.3px;
`;
