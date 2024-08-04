import StyledAppBody from "./AppBody.styled";
import NoData from "../../../pages/NoData";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import BoardColumn from "./BoardColumn";

import boardSlice, {
  toggleNewBoardModal,
} from "../../../store/board/board.slice";
import { useDispatch } from "react-redux";
import NewColumnModal from "../../forms/NewColumnModal";
import { useState } from "react";

function AppBody() {
  const [newColumnModalToggled, setNewColumnModal] = useState(false);
  const boardsSlice = useSelector((store) => store.boards);
  return (
    <>
      <StyledAppBody>
        {boardsSlice.boards
          .at(boardsSlice.selectedBoardIndex)
          .columns.map((column, index) => (
            <BoardColumn
              key={index}
              columnName={column.name}
              tasksNo={column.tasks.length}>
              {column.tasks.map((task, index) => (
                <TaskCard
                  key={index}
                  title={task.title}
                  completedSubTasks={0}
                  totalSubTasks={task.subtasks.length}
                />
              ))}
            </BoardColumn>
          ))}
        <BoardColumn onClick={() => setNewColumnModal(!newColumnModalToggled)}>
          <p>+ New Column</p>
        </BoardColumn>
      </StyledAppBody>
      <NewColumnModal
        onClick={() => setNewColumnModal(!newColumnModalToggled)}
        isNewColumnModalOpen={newColumnModalToggled}>
        New Column 💂
      </NewColumnModal>
    </>
  );
}

export default AppBody;
