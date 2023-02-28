import React from "react";
import styled from "styled-components";
import chevron from "../../public/assets/icon-chevron.svg";
import { Link } from "react-router-dom";

const Navigation = ({ data, setShowMenu }) => {
  const navNames = data.map((planet) => (
    <StyledLink
      to={`${planet.path}`}
      key={planet.radius}
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <StyledWrapper>
        <StyledContainer>
          <StyledCircle planetcolor={planet.color}></StyledCircle>
          <p>{planet.name}</p>
        </StyledContainer>
        <img src={chevron} alt="" />
      </StyledWrapper>
    </StyledLink>
  ));
  return <StyledNavigationMedia>{navNames}</StyledNavigationMedia>;
};

export default Navigation;

export const StyledLink = styled(Link)`
  text-decoration:none;                            
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: self-end;
  p {
    font-family: "League Spartan";
    font-size: 16px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
`;

export const StyledWrapper = styled(StyledContainer)`
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  padding: 1.3rem;
  img {
    margin-right: 1.7rem;
  }
`;

export const StyledCircle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.planetcolor};
  margin-right: 1.2rem;
`;

export const StyledNavigationMedia = styled.nav`
  @media (min-width: 768px) {
    display: none;
  }
`;
