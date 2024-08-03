import { StyledCreateNewBoard } from "./CreateNewBoard.styled";
import BoardName from "./BoardName";
import { BoardIcon } from "../../index";

function CreateNewBoard({ onClick }) {
  return (
    <StyledCreateNewBoard onClick={onClick}>
      <BoardIcon />
      <BoardName boardName="+ Create New Board " />
    </StyledCreateNewBoard>
  );
}

export default CreateNewBoard;
