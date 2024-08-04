import Header from "../sidebar/Header.styled";
import { StyledBoardColumn } from "./BoardColumn.styled";

function BoardColumn({ onClick, columnName, tasksNo, children }) {
  return (
    <StyledBoardColumn onClick={onClick}>
      <Header>
        {columnName} ({tasksNo})
      </Header>
      {children}
    </StyledBoardColumn>
  );
}

export default BoardColumn;
