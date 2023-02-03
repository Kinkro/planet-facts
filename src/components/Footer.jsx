import React from "react";
import styled from "styled-components";

const Footer = ({ data, name }) => {
  const planetFooter = data.filter((planet) => planet.name === name)[0];
  return (
    <StyledWrapper>
      <StyledContainer>
        <p>Rotation Time</p>
        <h4>{planetFooter.rotation}</h4>
      </StyledContainer>
      <StyledContainer>
        <p>Revolution Time</p>
        <h4>{planetFooter.revolution}</h4>
      </StyledContainer>
      <StyledContainer>
        <p>Radius</p>
        <h4>{planetFooter.radius}</h4>
      </StyledContainer>
      <StyledContainer>
        <p>Average temp</p>
        <h4>{planetFooter.temperature}</h4>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Footer;

export const StyledContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem auto;
  min-width: 200px;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  p {
    opacity: 0.35;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    height: 6rem;
    min-width: fit-content;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 25%;

    h4 {
      font-size: larger;
    }
  }
`;

export const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 85%;
    margin: auto;
    gap: 0.5rem;
  }
`;
