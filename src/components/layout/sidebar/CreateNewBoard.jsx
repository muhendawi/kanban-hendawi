import { StyledCreateNewBoard } from "./CreateNewBoard.styled";
import BoardName from "./BoardName";
import IconBoard from "../../../assets/IconBoardSVG";

function CreateNewBoard({ onClick }) {
  return (
    <StyledCreateNewBoard onClick={onClick}>
      <IconBoard color="#635FC7" />
      <BoardName boardName="+ Create New Board " />
    </StyledCreateNewBoard>
  );
}

export default CreateNewBoard;
