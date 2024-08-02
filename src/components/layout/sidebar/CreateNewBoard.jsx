import { StyledCreateNewBoard } from "./CreateNewBoard.styled";

import BoardName from "./BoardName";
import { BoardIcon } from "../../index";
import { useSelector } from "react-redux";

function CreateNewBoard({ onClick }) {
  const boardsSlice = useSelector((store) => store.boards);
  console.log(boardsSlice.isModalOpen);
  return (
    <StyledCreateNewBoard onClick={onClick}>
      <BoardIcon />
      <BoardName boardName="+ Create New Board " />
    </StyledCreateNewBoard>
  );
}

export default CreateNewBoard;
