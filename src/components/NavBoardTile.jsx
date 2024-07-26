import styled from "styled-components";
import IconHolder from "./IconHolder";
import iconChevronDown from "../assets/icon-chevron-down.svg";
import iconChevronUp from "../assets/icon-chevron-up.svg";
import logoMobile from "../assets/logo-mobile.svg";
import StyledTitle from "./Title";

const StyledNavBoardTile = styled.div`
  /* border: 1px solid salmon; */
  display: flex;
  align-items: flex-end;
  & h3 {
    align-self: flex-end;
  }
  @media (min-width: 769px) {
    & img {
      display: none;
    }
  }
`;

function NavBoardTile() {
  return (
    <StyledNavBoardTile>
      <IconHolder src={logoMobile} />
      <StyledTitle>Platform Launch</StyledTitle>
      <IconHolder src={iconChevronDown} />
    </StyledNavBoardTile>
  );
}

export default NavBoardTile;
