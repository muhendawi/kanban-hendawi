import Header from "../sidebar/Header.styled";
import { StyledBoardColumn } from "./BoardColumn.styled";

function BoardColumn({ columnName, tasksNo, children }) {
  return (
    <StyledBoardColumn>
      <Header>
        {columnName} ({tasksNo})
      </Header>
      {children}
    </StyledBoardColumn>
  );
}

export default BoardColumn;
