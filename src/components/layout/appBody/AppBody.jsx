import StyledAppBody from "./AppBody.styled";
import NoData from "../../../pages/NoData";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import BoardColumn from "./BoardColumn";
import ExModal from "../../forms/ExModal";
import { useState } from "react";

function AppBody() {
  const [newColumnModalToggled, setNewColumnModal] = useState(false);
  const boardsSlice = useSelector((store) => store.boards);
  const selectedColumn = boardsSlice.boards.at(
    boardsSlice.selectedBoardIndex
  ).columns;

  return (
    <>
      <StyledAppBody $columnLength={selectedColumn.length}>
        {selectedColumn.length !== 0 ? (
          <>
            {selectedColumn.map((column, index) => (
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
            <BoardColumn
              onClick={() => setNewColumnModal(!newColumnModalToggled)}>
              <p>+ New Column</p>
            </BoardColumn>
          </>
        ) : (
          <NoData
            text="This board is empty. Create a new column to get started."
            btnText="+ Add New Column"
          />
        )}
      </StyledAppBody>
      <ExModal
        onClose={() => setNewColumnModal(!newColumnModalToggled)}
        isModalOpen={newColumnModalToggled}>
        New Column 💂
      </ExModal>
    </>
  );
}

export default AppBody;
