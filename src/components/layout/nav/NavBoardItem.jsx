import { StyledNavBoardItem } from "./NavBoardItem.styled";
import NavBoardTitle from "./NavBoardTitle.styled/";
import { ChevronDownIcon, MobileLogo } from "../..";
import { useSelector } from "react-redux";

function NavBoardItem() {
  const boardsSlice = useSelector((store) => store.boards);
  return (
    <StyledNavBoardItem>
      <MobileLogo />
      <NavBoardTitle>
        {boardsSlice.boards.at(boardsSlice.selectedBoardIndex).name}
      </NavBoardTitle>
      <ChevronDownIcon />
    </StyledNavBoardItem>
  );
}

export default NavBoardItem;
