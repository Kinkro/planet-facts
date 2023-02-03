import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationPlus = ({ data }) => {
  const navPlus = data.map((planet) => (
    <Link to={planet.path} key={planet.radius}>
      <p>{planet.name}</p>
    </Link>
  ));

  return <StyledNavPlus>{navPlus}</StyledNavPlus>;
};

export default NavigationPlus;

const StyledNavPlus = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    p {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
      opacity: 0.8;
      line-height: 25px;
      letter-spacing: 1.3px;
    }
    p:hover {
      opacity: 1;
    }
  }

  @media (min-width: 1050px) {
    display: inline-flex;
    position: absolute;
    height: 100px;
    right: 0;
    width: 60%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;
