import { motion } from "framer-motion";
import styled from "styled-components";
import TaskCardModal from "../../modals/TaskCardModal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../store/board/board.slice";
import DeleteModal from "../../modals/DeleteModal";
//------------------------------------------------------------------->

export const StyledTaskCard = styled.div`
  width: 17.5rem;
  min-height: 5.5rem;
  border-radius: 0.5rem;
  /* box-shadow: 0 4px 6px rgba(54, 78, 126, 0.102); */
  box-shadow: 0 3px 7px rgb(0, 0, 0, 0.45), inset 0 1px 3px rgb(0, 0, 0, 0.25),
    inset -0 -1px 3px rgb(0, 0, 0, 0.25);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem;
  z-index: 1;
  cursor: pointer;
  overflow: auto;

  transition: font-color, color 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  > h4 {
    font-size: var(--fsM);
    line-height: var(--lhM);
    color: var(--darkBlack);
    margin: 0;
    padding: 0;
    /* transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55); */
  }
  > p {
    margin: 0;
    font-size: var(--fsS);
    /* line-height: var(--lhM); */
    font-weight: 700;
    color: var(--veryLightGrey);
    /* transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55); */
  }
  &:hover {
    /* box-shadow: 0 4px 7px rgb(99, 136, 137, 0.7); */
    box-shadow: 0 3px 7px rgb(99, 136, 137, 0.7),
      inset 0 2px 7px rgb(99, 136, 137, 0.7),
      inset -0 -2px 7px rgb(99, 136, 137, 0.7);
    > h4 {
      color: var(--darkIndigo);
    }
    > p {
      /* color: rgb(99, 95, 199, 0.7); */
      color: rgb(99, 136, 137, 0.6);
    }
  }
  /* &:active {
    transform: scale(0.96);
  } */
`;
//------------------------------------------------------------------->
const MotionTaskcard = motion.create(StyledTaskCard);
function TaskCard({
  title,
  completedSubTasks,
  totalSubTasks,
  taskIndex,
  task,
  columnIndex,
}) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask({ columnIndex, taskIndex }));
    setToggleDeleteModal(!toggleDeleteModal);
  }
  return (
    <>
      <MotionTaskcard
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50, transition: { duration: 0.35 } }}
        transition={{ type: "spring", duration: 0.5, delay: 0.05 * taskIndex }}
        onClick={() => setIsTaskModalOpen(!isTaskModalOpen)}>
        <h4>{title}</h4>
        <p>
          {completedSubTasks || 0} of {totalSubTasks || 0} subtasks
        </p>
      </MotionTaskcard>
      <AnimatePresence>
        {isTaskModalOpen && (
          <TaskCardModal
            taskIndex={taskIndex}
            columnIndex={columnIndex}
            task={task}
            toggleTaskModal={() => setIsTaskModalOpen(!isTaskModalOpen)}
            toggleDeleteModal={() => setToggleDeleteModal(!toggleDeleteModal)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toggleDeleteModal && (
          <DeleteModal
            modalTitle="task"
            onDelete={() => {
              handleDeleteTask();
            }}
            onCancel={() => {
              setToggleDeleteModal(!toggleDeleteModal);
              setIsTaskModalOpen(!isTaskModalOpen);
            }}>
            Are you sure you want to delete the "{task.title}" task and its
            subtasks? This action cannot be reversed.
          </DeleteModal>
        )}
      </AnimatePresence>
    </>
  );
}

export default TaskCard;
