import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Overview = ({ data, name }) => {
  const planetPage = data.filter((planet) => planet.name === name)[0];
  const location = useLocation();
  console.log(planetPage);
  return (
    <div>
      <StyledOverview>
        <StyledImageContainer>
          <img src={`${planetPage.images.planet}`} alt="Oops ..planet" />
        </StyledImageContainer>
        <StyledWrapper>
          <StyledInfo>
            <h1>{planetPage.name}</h1>
            <p>{planetPage.overview.content}</p>
            <StyledSourceLink>
              <span>
                Source : <a href={`${planetPage.overview.source}`}>Wikipedia</a>
              </span>
              <img src="/planet-facts/assets/icon-source.svg" />
            </StyledSourceLink>
          </StyledInfo>
          <StyledLinkButtons>
            <StyledLinks
              to={`${planetPage.path}/overview`}
              color={planetPage.color}
              location={location.pathname}
            >
              01 Overview
            </StyledLinks>
            <StyledLinks
              to={`${planetPage.path}/structure`}
              color={planetPage.color}
            >
              02 Structure
            </StyledLinks>
            <StyledLinks
              to={`${planetPage.path}/surface`}
              color={planetPage.color}
            >
              03 Surface
            </StyledLinks>
          </StyledLinkButtons>
        </StyledWrapper>
      </StyledOverview>
    </div>
  );
};

export default Overview;

export const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  img {
    padding: 5rem 0;
    width: 50%;
  }
  h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
  }
  p {
    font-size: 14px;
    width: 85%;
    text-align: center;
    min-width: 250px;
    margin: auto;
  }
  @media (min-width: 768px) {
    img {
      width: 60%;
      height: fit-content;
      padding: 0;
    }
  }
  @media (min-width: 1050px) {
    flex-direction: row;
    width: 85%;
    margin: auto;
  }
`;

export const StyledSourceLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  span {
    font-weight: 400;
    font-size: 0.8rem;
    color: white;
    opacity: 0.5;
  }
  a {
    color: white;
    opacity: 0.5;
    font-weight: 600;
  }
  img {
    width: 0.8rem;
    margin-left: 0.3rem;
    padding: 0;
  }
`;

export const StyledLinkButtons = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    min-width: 350px;
  }
`;

export const StyledLinks = styled(Link)`
  @media (min-width: 768px) {
    color: white;
    font-size: 0.75rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    padding: 1rem 1.1rem;
    margin: 0.5rem 0;
    background-color: ${({ location, to, color }) =>
      to === location ? color : null};
  }
`;

export const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 85%;
    height: 220px;
  }
  @media (min-width: 1050px) {
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
  }
`;

export const StyledInfo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: start;
      margin: 0;
    }
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    height: 450px;
  }
  @media (min-width: 1050px) {
    width: 60%;
    height: 650px;
  }
`;
