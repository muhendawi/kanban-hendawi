import { motion } from "framer-motion";
import styled from "styled-components";
import TaskCardModal from "../../modals/TaskCardModal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../store/board/board.slice";
import DeleteModal from "../../modals/DeleteModal";
import TaskModal from "../../modals/TaskModal";
//------------------------------------------------------------------->

export const StyledTaskCard = styled.div`
  width: 17.5rem;
  min-height: 5.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.25), inset 0 0.1px 2px rgb(0, 0, 0, 0.25),
    inset -0 -0.1px 2px rgb(0, 0, 0, 0.25);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem;
  cursor: pointer;
  overflow: auto;

  transition: font-color, color 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  > h4 {
    font-size: var(--fsM);
    line-height: var(--lhM);
    color: var(--darkBlack);
    margin: 0;
    padding: 0;
  }
  > p {
    margin: 0;
    font-size: var(--fsS);
    font-weight: 700;
    color: var(--veryLightGrey);
  }
  &:hover {
    box-shadow: 0 3px 5px rgb(99, 136, 137, 0.7),
      inset 0 2px 5px rgb(99, 136, 137, 0.7),
      inset -0 -2px 5px rgb(99, 136, 137, 0.7);
    > h4 {
      color: var(--darkIndigo);
    }
    > p {
      color: rgb(99, 136, 137, 0.6);
    }
  }
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
  parentRef,
}) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [toggleEditTaskModal, setToggleEditTaskModal] = useState(false);

  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask({ columnIndex, taskIndex }));
    setToggleDeleteModal(!toggleDeleteModal);
  }
  return (
    <>
      <MotionTaskcard
        layout
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: -50,
          transition: { duration: 0.3 },
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0.05 * taskIndex,
        }}
        drag
        whileDrag={{ scale: 0.9 }}
        // dragConstraints={parentRef}
        // dragMomentum={false}
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
            toggleEditModal={() => setToggleEditTaskModal(!toggleEditTaskModal)}
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
      <AnimatePresence>
        {toggleEditTaskModal && (
          <TaskModal
            onClose={() => setToggleEditTaskModal(!toggleEditTaskModal)}
            isModalOpen={toggleEditTaskModal}
            type="edit"
            task={task}
            columnIndex={columnIndex}
            toggleTaskModal={() => setIsTaskModalOpen(!isTaskModalOpen)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default TaskCard;
