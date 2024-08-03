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
    <StyledNavBoardItem>
      <MobileLogo />
      <NavBoardTitle>
        {boardsSlice.boards.at(boardsSlice.selectedBoardIndex).name}
      </NavBoardTitle>
      <ChevronDownIcon
        onClick={handleToggleMobileMenu}
        isMobileMenutoggled={boardsSlice.isMobileMenuOpen}
      />
    </StyledNavBoardItem>
  );
}

export default NavBoardItem;
