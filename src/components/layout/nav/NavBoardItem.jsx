import { StyledNavBoardItem } from "./NavBoardItem.styled";
import NavBoardTitle from "./NavBoardTitle.styled/";
import { ChevronDownIcon, MobileLogo } from "../..";
import { useSelector } from "react-redux";
import { toggleMobileMenu } from "../../../store/board/board.slice";
import { useDispatch } from "react-redux";

function NavBoardItem() {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();
  function handleToggleMobileMenu() {
    dispatch(toggleMobileMenu());
  }
  return (
    <StyledNavBoardItem onClick={handleToggleMobileMenu}>
      <MobileLogo />
      <NavBoardTitle>
        {boardsSlice.boards.at(boardsSlice.selectedBoardIndex).name}
      </NavBoardTitle>
      <ChevronDownIcon isMobileMenutoggled={boardsSlice.isMobileMenuOpen} />
    </StyledNavBoardItem>
  );
}

export default NavBoardItem;
