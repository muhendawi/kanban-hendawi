import { StyledCreateNewBoard } from "./CreateNewBoard.styled";

import BoardName from "./BoardName";
import { BoardIcon } from "../../index";

function CreateNewBoard() {
  return (
    <StyledCreateNewBoard>
      <BoardIcon />
      <BoardName boardName="+ Create New Board " />
    </StyledCreateNewBoard>
  );
}

export default CreateNewBoard;
