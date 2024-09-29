import styled from "styled-components";
import NavBoardTitle from "./NavBoardTitle.styled/";
import { ChevronDownIcon, MobileLogo } from "../..";
import { useSelector } from "react-redux";
//------------------------------------------------------------------->

export const StyledNavBoardItem = styled.div`
  /* here we used !important because in Navbar.styled is the parent and override the gap */
  gap: 0.5rem !important;
  height: 3rem;
  @media (min-width: 769px) {
    & img {
      display: none;
    }
  }
  @media (max-width: 320px) {
    /*IPhone portrait and smaller. You can probably stop on 320px*/
    gap: 0.3rem !important;
  }
`;

//------------------------------------------------------------------->

function NavBoardItem({ onClick, isMobileMenuOpen }) {
  const boardsSlice = useSelector((store) => store.boards);
  return (
    <StyledNavBoardItem>
      <MobileLogo isMobileMenutoggled={isMobileMenuOpen} onClick={onClick} />
      <NavBoardTitle>
        {boardsSlice.boards.at(boardsSlice.selectedBoardIndex)?.name}
      </NavBoardTitle>
      <ChevronDownIcon
        isMobileMenutoggled={isMobileMenuOpen}
        onClick={onClick}
      />
    </StyledNavBoardItem>
  );
}

export default NavBoardItem;
