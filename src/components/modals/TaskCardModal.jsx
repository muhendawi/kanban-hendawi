import styled from "styled-components";
import { motion } from "framer-motion";
import { VerticalEllipsis } from "../universal/Icons.styled";
import { useState } from "react";
import SubMenu from "../modals/SubMenu";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Subtask from "./Subtask";
import { useSelector } from "react-redux";
import { moveTask } from "../../store/board/board.slice";

//------------------------------------------------------------------->

const StyledTaskCardModal = styled.div`
  position: fixed;
  inset: 0;
  top: -5rem;
  bottom: -5rem;
  z-index: 100;
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
const ModalBackdrop = styled.div`
  background-color: rgb(255, 255, 255, 0.85);
  /* rgb(99, 95, 199, 0.3) */

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
  padding: 2.5rem 2rem;
  border-radius: 0.6rem;
  background-color: var(--white);
  overflow-y: auto;
  overflow: visible;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.45), inset 0 1px 5px rgb(0, 0, 0, 0.25),
    inset -0 -1px 5px rgb(0, 0, 0, 0.25);
  /* z-index: 801; */
  position: relative;
  @media (max-width: 768px) {
    max-width: 343px;
    min-height: 200px;
    padding: 2rem 1.7rem;
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
  margin-bottom: 0.5rem;
  padding-left: 0;
  font-size: calc(var(--fsS) + 1px);
  color: var(--veryLightGrey);
`;
const Select = styled.select`
  cursor: pointer;
  border: 1px solid var(--formPlaceholder);
  outline-color: var(--darkIndigo);
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.3rem;
  font-size: calc(var(--fsM) - 2px);
  font-weight: 500;
  /* appearance: none; */
  background-image: url("../../assets/icon-chevron-down.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  /* width: 100%;
  padding: 8px 16px;
  border: 1px solid #828fa340;
  border-radius: 10px;
  appearance: none;
  background-image: url("../../assets/icon-chevron-down.svg");
  background-repeat: no-repeat;
  background-position: right 16px; */
`;
const Option = styled.option``;
//------------------------------------------------------------------->

const MotionTaskcardModal = motion.create(StyledTaskCardModal);
function TaskCardModal({
  task,
  toggleTaskModal,
  toggleDeleteModal,
  toggleEditModal,
  taskIndex,
  columnIndex,
}) {
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const subtasks = useSelector(
    (store) =>
      store.boards.boards[store.boards.selectedBoardIndex].columns[columnIndex]
        .tasks[taskIndex]?.subtasks
  );
  const mainStore = useSelector((store) => store.boards);
  const activeBoardColumns =
    mainStore.boards[mainStore.selectedBoardIndex].columns;

  const [selectedOption, setSelectedOption] = useState(
    activeBoardColumns[columnIndex].name
  );
  const dispatch = useDispatch();

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
          transition: { duration: 0.2, type: "tween" },
        }}>
        <ModalBackdrop
          onClick={() => {
            toggleTaskModal();
            if (selectedOption === activeBoardColumns[columnIndex].name) return;
            dispatch(
              moveTask({ columnIndex, task, taskIndex, selectedOption })
            );
          }}
        />
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
          {subtasks?.map((sub, index) => (
            <Subtask
              key={index}
              subtaskLabel={sub?.title}
              columnIndex={columnIndex}
              taskIndex={taskIndex}
              subtaskIndex={index}
            />
          ))}
          <SubtasksHeader>Current Status</SubtasksHeader>
          <Select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}>
            {activeBoardColumns.map((col, index) => (
              <Option key={index} value={col.name}>
                {col.name}
              </Option>
            ))}
          </Select>
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
                onEdit={() => {
                  toggleTaskModal();
                  toggleEditModal();
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
