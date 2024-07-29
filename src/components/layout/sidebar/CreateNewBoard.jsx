import { StyledCreateNewBoard } from "./CreateNewBoard.styled";

import BoardName from "./BoardName";
import { BoardIcon } from "../../index";

function CreateNewBoard() {
  return (
    <StyledCreateNewBoard>
      <BoardIcon />
      <BoardName text="+ Create New Board " />
    </StyledCreateNewBoard>
  );
}

export default CreateNewBoard;
