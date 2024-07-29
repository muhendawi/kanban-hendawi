import { StyledBoardItem } from "./BoardItem.styled";
import BoardName from "./BoardName";

//===========================================================>

function BoardItem({ onClick, text, active, children }) {
  return (
    <StyledBoardItem $active={active} onClick={onClick}>
      {children}
      <BoardName text={text} />
    </StyledBoardItem>
  );
}

export default BoardItem;
