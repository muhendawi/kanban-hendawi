import styled from "styled-components";
import { motion } from "framer-motion";
import { VerticalEllipsis } from "../universal/Icons.styled";
import { useState } from "react";
import SubMenu from "../modals/SubMenu";
import { deleteTask } from "../../store/board/board.slice";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Subtask from "./Subtask";
import { useSelector } from "react-redux";
import ConfirmDelete from "../modals/ConfirmDelete";
//------------------------------------------------------------------->

const StyledTaskCardModal = styled.div`
  position: fixed;
  inset: 0;
  top: -5rem;
  bottom: -5rem;
  z-index: 100;
  /* backdrop-filter: blur(0.5px); */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
const ModalBackdrop = styled.div`
  background-color: rgb(0, 0, 0, 0.45);
  position: fixed;
  inset: 0;
`;
const ModalContentContainer = styled.div`
  /* border: 3px solid salmon; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 480px;
  max-height: calc(90% - 10rem);
  padding: 2rem;
  border-radius: 0.6rem;
  background-color: var(--white);
  overflow-y: auto;
  overflow: visible;
  box-shadow: 0 5px 15px rgb(99, 95, 199, 0.3);
  z-index: 801;
  position: relative;
  @media (max-width: 768px) {
    max-width: 343px;
    min-height: 200px;
    padding: 1.5rem;
  }
`;
const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > img {
    padding-right: 2px;
    padding-left: 9.5px;
  }
`;
const ModalTitle = styled.h3`
  font-size: calc(var(--fsL) - 0.5px);
  margin: 0;
  line-height: 1.5;
  letter-spacing: 0.1px;
`;
const ModalDescription = styled.p`
  color: var(--veryLightGrey);
  font-size: calc(var(--fsM) - 1.5px);
  line-height: 1.7;
  letter-spacing: 0.1px;
  font-weight: 500;
`;
const SubtasksHeader = styled.h3`
  text-transform: none;
  letter-spacing: normal;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-left: 0;
  font-size: calc(var(--fsS) + 1px);
  color: var(--veryLightGrey);
`;
//------------------------------------------------------------------->

const MotionTaskcardModal = motion.create(StyledTaskCardModal);
function TaskCardModal({
  task,
  toggleTaskModal,
  toggleDeleteModal,
  taskIndex,
  columnIndex,
}) {
  const [toggleSubmenu, setToggleSubmenu] = useState(false);

  const subtasks = useSelector(
    (store) =>
      store.boards.boards[store.boards.selectedBoardIndex].columns[columnIndex]
        .tasks[taskIndex].subtasks
  );

  return (
    <>
      <MotionTaskcardModal
        onClick={() => setToggleSubmenu(false)}
        $isTaskcardModalOpen={toggleSubmenu}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 50,
          transition: { duration: 0.2, type: "spring", mass: 0.5 },
        }}>
        <ModalBackdrop onClick={toggleTaskModal} />
        <ModalContentContainer>
          <ModalTitleContainer>
            <ModalTitle>{task.title}</ModalTitle>
            <VerticalEllipsis
              toggleMenu={(e) => {
                e.stopPropagation();
                setToggleSubmenu(!toggleSubmenu);
              }}
            />
          </ModalTitleContainer>
          {task.description.trim() && (
            <ModalDescription>{task.description}</ModalDescription>
          )}
          <SubtasksHeader>
            Subtasks ({" "}
            {task.subtasks.filter((sub) => sub.isCompleted === true).length} of{" "}
            {task.subtasks.length} )
          </SubtasksHeader>
          {/* looping to view subtasks */}
          {subtasks.map((sub, index) => (
            <Subtask
              key={index}
              subtaskLabel={sub?.title}
              columnIndex={columnIndex}
              taskIndex={taskIndex}
              subtaskIndex={index}
            />
          ))}
          <AnimatePresence>
            {toggleSubmenu && (
              <SubMenu
                type="task"
                firstOption="Edit Task"
                secondOption="Delete Task"
                onDelete={() => {
                  toggleTaskModal();
                  toggleDeleteModal();
                }}
              />
            )}
          </AnimatePresence>
        </ModalContentContainer>
      </MotionTaskcardModal>
    </>
  );
}

export default TaskCardModal;
