import { StyledBoardItem } from "./BoardItem.styled";
import BoardTitle from "./BoardTitle.styled/";
import { ChevronDownIcon, MobileLogo } from "../..";

function NavBoardTile() {
  return (
    <StyledBoardItem>
      <MobileLogo />
      <BoardTitle>Platform Launch</BoardTitle>
      <ChevronDownIcon />
    </StyledBoardItem>
  );
}

export default NavBoardTile;
