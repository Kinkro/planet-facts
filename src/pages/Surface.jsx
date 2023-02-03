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
const Surface = ({ data, name }) => {
  const planetPage = data.filter((planet) => planet.name === name)[0];
  const location = useLocation();

  return (
    <div>
      <StyledOverview>
        <StyledImageContainer>
          <img src={`.${planetPage.images.geology}`} alt="Oops ..planet" />
        </StyledImageContainer>
        <StyledWrapper>
          <StyledInfo>
            <h1>{planetPage.name}</h1>
            <p>{planetPage.geology.content}</p>
            <StyledSourceLink>
              <span>
                Source : <a href={`${planetPage.geology.source}`}>Wikipedia</a>
              </span>
              <img src="../assets/icon-source.svg" />
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
            >
              02 Structure
            </StyledLinks>
            <StyledLinks
              to={`${planetPage.path}/surface`}
              color={planetPage.color}
              location={location.pathname}
            >
              03 Surface
            </StyledLinks>
          </StyledLinkButtons>
        </StyledWrapper>
      </StyledOverview>
    </div>
  );
};

export default Surface;
