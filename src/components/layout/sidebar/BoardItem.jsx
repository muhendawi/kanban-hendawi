import { StyledBoardItem } from "./BoardItem.styled";

//===========================================================>

function BoardItem({ onClick, active, children }) {
  return (
    <StyledBoardItem $active={active} onClick={onClick}>
      {children}
    </StyledBoardItem>
  );
}

export default BoardItem;
