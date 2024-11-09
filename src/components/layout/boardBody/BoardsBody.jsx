import styled, { css } from "styled-components";
import NoData from "../../../pages/NoData";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import BoardColumn from "./BoardColumn";
import { memo, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import BoardModal from "../../modals/BoardModal";
import { useRef } from "react";
import DropArea from "./DropArea";
import React from "react";
//------------------------------------------------------------------->

const StyledAppBody = styled.main`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: grid;
  grid-auto-columns: 18rem;
  grid-auto-flow: column;
  /* gap: 1rem; */
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
const BoardsBody = memo(function BoardsBody() {
  const mainContainerRef = useRef();
  const [toggleNewColumnModal, setToggleNewColumnModal] = useState(false);
  const activeBoardColumns = useSelector(
    (store) => store.boards.boards[store.boards.selectedBoardIndex].columns
  );
  const [draggingCard, setDraggingCard] = useState(null);
  const [currentColumnIndex, setCurrentColumnIndex] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  return (
    <>
      <MotionMain
        $columnLength={activeBoardColumns?.length}
        ref={mainContainerRef}>
        {activeBoardColumns.length !== 0 ? (
          <>
            {activeBoardColumns.map((column, columnIndex) => (
              <BoardColumn
                key={column.colId}
                columnName={column.name}
                tasksNo={column.tasks.length}>
                <AnimatePresence>
                  <DropArea
                    targetColumnIndex={columnIndex}
                    draggringCard={draggingCard}
                    currentColumnIndex={currentColumnIndex}
                    currentCardIndex={currentCardIndex}
                  />
                  {column.tasks.map((task, taskIndex) => (
                    <React.Fragment key={task.taskId}>
                      <TaskCard
                        task={task}
                        column={column}
                        columnIndex={columnIndex}
                        taskIndex={taskIndex}
                        title={task?.title}
                        completedSubTasks={
                          task.subtasks.filter(
                            (sub) => sub.isCompleted === true
                          ).length
                        }
                        totalSubTasks={task.subtasks?.length}
                        onSetDraggingCard={setDraggingCard}
                        onSetCurrentColumnIndex={setCurrentColumnIndex}
                        onSetCurrentCardIndex={setCurrentCardIndex}
                      />
                      <DropArea
                        targetCardIndex={taskIndex}
                        targetColumnIndex={columnIndex}
                        draggringCard={draggingCard}
                        currentColumnIndex={currentColumnIndex}
                        currentCardIndex={currentCardIndex}
                      />
                    </React.Fragment>
                  ))}
                </AnimatePresence>
              </BoardColumn>
            ))}
            <BoardColumn
              type="noAnimation"
              onClick={() => setToggleNewColumnModal(!toggleNewColumnModal)}>
              <p>+ New Column</p>
            </BoardColumn>
          </>
        ) : (
          <NoData
            text="This board is empty. Create a new column to get started."
            btnText="+ Add New Column"
            onClick={() => setToggleNewColumnModal(!toggleNewColumnModal)}
          />
        )}
      </MotionMain>
      <AnimatePresence>
        {toggleNewColumnModal && (
          <BoardModal
            onClose={() => setToggleNewColumnModal(!toggleNewColumnModal)}
            isModalOpen={toggleNewColumnModal}
            type="edit"
          />
        )}
      </AnimatePresence>
    </>
  );
});

export default BoardsBody;
