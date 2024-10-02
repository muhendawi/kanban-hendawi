import { motion } from "framer-motion";
import { flushSync } from "react-dom";
import styled, { css } from "styled-components";
import { Button } from "../universal/Button.styled";
import { AnimatePresence } from "framer-motion";
import SubInputAddRemove from "./SubInputAddRemove";
import { useAnimate } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { stagger } from "framer-motion";
import { addNewTask, editTask } from "../../store/board/board.slice";
import uuid from "react-uuid";

//------------------------------------------------------------------->
const StyledTaskModal = styled.div`
  position: fixed;
  inset: 0;
  top: -5rem;
  bottom: -5rem;
  z-index: 801;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  ${({ $isModalOpen }) =>
    $isModalOpen &&
    css`
      & div:last-child {
        transform: scale(1);
      }
      opacity: 1;
      z-index: 801;
    `}
`;
const ModalBackdrop = styled.div`
  background-color: rgb(255, 255, 255, 0.85);
  position: fixed;
  inset: 0;
`;
const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 480px;
  max-height: calc(90% - 10rem);
  padding: 2.5rem 2rem;
  border-radius: 0.6rem;
  background-color: var(--white);
  overflow-y: scroll;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.45), inset 0 1px 5px rgb(0, 0, 0, 0.25),
    inset -0 -1px 5px rgb(0, 0, 0, 0.25);
  > * {
    width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 343px;
    min-height: 200px;
    padding: 2rem 1.5rem;
  }
`;
const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.8rem;
  color: var(--darkBlack);
`;
const InputLabel = styled.label`
  color: var(--veryLightGrey);
  font-size: var(--fsS);
  font-weight: 700;
  margin-bottom: -0.3rem;
`;
const TaskNameInput = styled.input`
  height: 40px;
  border: 1px solid var(--formPlaceholder);
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: calc(var(--fsS) + 1px);
  font-weight: 500;
  margin-bottom: 1rem;
  outline: none;
  &::placeholder {
    color: var(--formPlaceholder);
  }
  ${({ $shouldStyle }) =>
    $shouldStyle &&
    css`
      border: 1px solid var(--darkRedOrange);
      &::placeholder {
        color: var(--darkRedOrange);
      }
    `}
  &:focus {
    border: 1px solid var(--darkIndigo);
  }
`;

const Description = styled.textarea`
  border: 1px solid var(--formPlaceholder);
  border-radius: 0.3rem;
  font-size: calc(var(--fsS) + 1px);
  font-weight: 500;
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  outline: none;
  &::placeholder {
    color: var(--formPlaceholder);
  }
  &:focus {
    border: 1px solid var(--darkIndigo);
  }
`;
const Select = styled.select`
  cursor: pointer;
  outline-color: var(--darkIndigo);
  border: 1px solid var(--formPlaceholder);
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.3rem;
  font-size: calc(var(--fsM) - 2px);
  font-weight: 500;
  /* appearance: none; */
  /* background-image: url("../../assets/icon-chevron-down.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%; */
`;
const Option = styled.option``;
//------------------------------------------------------------------->
const MotionModal = motion.create(StyledTaskModal);
function TaskModal({
  onClose,
  toggleTaskModal,
  isModalOpen,
  type,
  task,
  columnIndex,
}) {
  const mainStore = useSelector((store) => store.boards);
  const activeBoardColumns =
    mainStore.boards[mainStore.selectedBoardIndex].columns;
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(() => {
    if (type === "edit") {
      return task.title;
    } else {
      return "";
    }
  });
  const [isTaskNameEmpty, setIsTaskNameEmpty] = useState(false);
  const [subtasks, setSubtasks] = useState(() => {
    if (type === "edit") {
      return task.subtasks.map((subtask) => ({ ...subtask }));
    } else {
      return [
        { title: "", isCompleted: false, subtaskId: uuid() },
        { title: "", isCompleted: false, subtaskId: uuid() },
      ];
    }
  });
  const [description, setDescription] = useState("");
  const [elementsToStyle, setElementsToStyle] = useState([]);
  const [scope, animate] = useAnimate();
  // Select and option state
  const [selectedOption, setSelectedOption] = useState(() => {
    if (type === "edit") {
      return activeBoardColumns[columnIndex].name;
    } else {
      return activeBoardColumns[0].name;
    }
  });

  // const [isStateChange, setStateChange] = useState(false);
  // useEffect(()=>{
  //   if(taskName)
  // },[])
  function resetSubtasks() {
    setSubtasks([
      { title: "", isCompleted: false, subtaskId: uuid() },
      { title: "", isCompleted: false, subtaskId: uuid() },
    ]);
  }
  function submit() {
    // this check to validate the boardName input
    if (taskName.trim() === "") setIsTaskNameEmpty(true);
    // validating the empty subtasks inputs
    subtasks.forEach((ele, index) => {
      if (ele.title.trim() === "") {
        // this check to prevent adding the same index again
        if (elementsToStyle.includes(index)) return;
        // adding the empty index to elementsToStyle array
        flushSync(() => {
          setElementsToStyle((currArray) => [...currArray, index]);
        });
      }
    });
    // this check prevent dispatching empty data/inputs
    if (
      taskName.trim() !== "" &&
      subtasks.every((task) => task.title.trim() !== "")
    ) {
      if (type === "edit") {
        dispatch(
          editTask({
            task,
            columnIndex,
            taskName,
            description,
            selectedOption,
            subtasks,
          })
        );
      } else {
        dispatch(
          addNewTask(uuid(), taskName, description, selectedOption, subtasks)
        );
      }
      onClose();
      setTimeout(() => {
        resetSubtasks();
        setTaskName("");
      }, 300);
    } else {
      animate(
        ".shakeIt, .animateIt",
        { x: [-12, 0, 12, 0] },
        { type: "spring", duration: 0.3, stiffness: 5000, delay: stagger(0.05) }
      );
      return;
    }
  }

  return (
    <MotionModal
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 40,
        transition: { duration: 0.2, type: "spring", mass: 0.5 },
      }}
      $isModalOpen={isModalOpen}>
      <ModalBackdrop
        onClick={() => {
          onClose();
          if (type == "edit") {
            toggleTaskModal();
          }
          // RESETTING state after 300ms
          setTimeout(() => {
            resetSubtasks();
            setTaskName("");
            setIsTaskNameEmpty(false);
            setElementsToStyle([]);
          }, 300);
        }}
      />
      <ModalContentContainer ref={scope}>
        <Title>{type === "edit" ? "Edit Task" : "Add New Task"}</Title>
        <InputLabel htmlFor="bName">Task Name</InputLabel>
        <TaskNameInput
          $shouldStyle={isTaskNameEmpty}
          className={!taskName.trim() ? "shakeIt" : null}
          placeholder="e.g. Take coffee break"
          type="text"
          id="bName"
          value={taskName}
          onFocus={() => setIsTaskNameEmpty(false)}
          onBlur={() => {
            if (taskName.trim() === "") setIsTaskNameEmpty(true);
          }}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <InputLabel>Description</InputLabel>
        <Description
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputLabel>Subtasks</InputLabel>
        <AnimatePresence>
          {subtasks?.map((subtask, index) => (
            <SubInputAddRemove
              key={subtask.subtaskId}
              currentIndex={index}
              defaultValue={subtask.title}
              subInputType="task"
              elements={subtasks}
              onSetElements={setSubtasks}
              elementsToStyle={elementsToStyle}
              onSetElementsToStyle={setElementsToStyle}
            />
          ))}
        </AnimatePresence>

        <Button
          $variation="secondary"
          $size="formSpecific"
          onClick={() => {
            setSubtasks([
              ...subtasks,
              {
                title: "",
                isCompleted: false,
                subtaskId: uuid(),
              },
            ]);
          }}>
          + Add New Subtask
        </Button>
        <InputLabel>Status</InputLabel>
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
        <Button $variation="primary" $size="formSpecific" onClick={submit}>
          {type === "edit" ? "Save Changes" : "Create Task"}
        </Button>
      </ModalContentContainer>
    </MotionModal>
  );
}

export default TaskModal;
