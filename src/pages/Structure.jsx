import React from "react";
import {
  StyledInfo,
  StyledSourceLink,
  StyledLinkButtons,
  StyledOverview,
  StyledLinks,
  StyledWrapper,
  StyledImageContainer,
} from "./Overview";
import { useLocation } from "react-router-dom";

const Structure = ({ data, name }) => {
  const planetPage = data.filter((planet) => planet.name === name)[0];
  const location = useLocation();

  return (
    <div>
      <StyledOverview>
        <StyledImageContainer>
          <img src={`${planetPage.images.internal}`} alt="Oops ..planet" />
        </StyledImageContainer>
        <StyledWrapper>
          <StyledInfo>
            <h1>{planetPage.name}</h1>
            <p>{planetPage.structure.content}</p>
            <StyledSourceLink>
              <span>
                Source :{" "}
                <a href={`${planetPage.structure.source}`}>Wikipedia</a>
              </span>
              <img src="/planet-facts/assets/icon-source.svg" />
            </StyledSourceLink>
          </StyledInfo>
          <StyledLinkButtons>
            <StyledLinks
              to={`${planetPage.path}/overview`}
              color={planetPage.color}
            >
              01 Overview
            </StyledLinks>
            <StyledLinks
              to={`${planetPage.path}/structure`}
              color={planetPage.color}
              location={location.pathname}
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

export default Structure;
