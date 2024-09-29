import styled, { css } from "styled-components";
import NoData from "../../../pages/NoData";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import BoardColumn from "./BoardColumn";
import NewBoardModal from "../../modals/NewBoardModal";
import { memo, useState } from "react";
import Header from "../sidebar/Header.styled";
import { motion } from "framer-motion";
import TaskCardModal from "../../modals/TaskCardModal";
import { AnimatePresence } from "framer-motion";
//------------------------------------------------------------------->

const StyledAppBody = styled.main`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: grid;
  grid-auto-columns: 18rem;
  grid-auto-flow: column;
  gap: 1rem;
  overflow: auto;

  @media (max-width: 768px) {
    padding: 1.5rem 0.8rem;
  }
  ${({ $columnLength }) =>
    $columnLength === 0 &&
    css`
      display: flex;

      /* justify-content: center;
      align-items: center; */
    `}
`;
//------------------------------------------------------------------->
const MotionMain = motion.create(StyledAppBody);
const BoardsBody = memo(function BoardsBody({ isSidebarOpen }) {
  const [newColumnModalToggled, setNewColumnModal] = useState(false);
  const boardsSlice = useSelector((store) => store.boards);
  const activeBoardColumns = boardsSlice.boards.at(
    boardsSlice.selectedBoardIndex
  ).columns;

  return (
    <>
      <MotionMain $columnLength={activeBoardColumns?.length}>
        {activeBoardColumns.length !== 0 ? (
          <>
            {activeBoardColumns.map((column, colIndex) => (
              <BoardColumn
                key={colIndex}
                columnName={column.name}
                tasksNo={column.tasks.length}>
                <AnimatePresence>
                  {column.tasks.map((task, taskIndex) => (
                    <TaskCard
                      task={task}
                      key={taskIndex}
                      columnIndex={colIndex}
                      taskIndex={taskIndex}
                      title={task?.title}
                      completedSubTasks={
                        task.subtasks.filter((sub) => sub.isCompleted === true)
                          .length
                      }
                      totalSubTasks={task.subtasks?.length}
                    />
                  ))}
                </AnimatePresence>
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
      </MotionMain>
    </>
  );
});

export default BoardsBody;
