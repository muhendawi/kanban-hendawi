import { StyledNavBoardItem } from "./NavBoardItem.styled";
import NavBoardTitle from "./NavBoardTitle.styled/";
import { ChevronDownIcon, MobileLogo } from "../..";
import { useSelector } from "react-redux";
import { toggleMobileMenu } from "../../../store/board/board.slice";
import { useDispatch } from "react-redux";

function NavBoardItem({ onClick, isMobileMenuOpen }) {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();
  // function handleToggleMobileMenu() {
  //   dispatch(toggleMobileMenu());
  // }
  return (
    <StyledNavBoardItem>
      <MobileLogo />
      <NavBoardTitle>
        {boardsSlice.boards.at(boardsSlice.selectedBoardIndex).name}
      </NavBoardTitle>
      <ChevronDownIcon
        isMobileMenutoggled={isMobileMenuOpen}
        onClick={onClick}
      />
    </StyledNavBoardItem>
  );
}

export default NavBoardItem;
