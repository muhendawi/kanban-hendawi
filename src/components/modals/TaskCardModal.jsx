import styled from "styled-components";
import Header from "../layout/sidebar/Header.styled";
import { motion } from "framer-motion";
import { VerticalEllipsis } from "../universal/Icons.styled";
import { useState } from "react";
import SubMenu from "../modals/SubMenu";
import { deleteTask } from "../../store/board/board.slice";
import { useDispatch } from "react-redux";

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
  > div:first-child {
    background-color: rgb(0, 0, 0, 0.45);
    position: fixed;
    inset: 0;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 480px;
    max-height: calc(90% - 10rem);
    padding: 2rem;
    border-radius: 0.6rem;
    background-color: var(--white);
    overflow-y: scroll;
    box-shadow: 0 5px 15px rgb(99, 95, 199, 0.3);
    z-index: 801;

    > div:first-child {
      /* border: 1px solid slateblue; */
      display: flex;
      justify-content: space-between;
      align-items: center;

      > h3 {
        /* border: 1px solid saddlebrown; */
        font-size: var(--fsL);
        margin: 0;
      }
      > svg {
        /* border: 1px solid salmon; */
      }
    }
    > * {
      width: 100%;
    }

    > h3 {
      /* border: 1px solid salmon; */
      padding-left: 0;
      font-size: calc(var(--fsS) + 1px);
      text-transform: none;
      letter-spacing: normal;
    }
    > p {
      color: var(--veryLightGrey);
      font-size: var(--fsM);
      line-height: 1.2;
    }
    @media (max-width: 768px) {
      max-width: 343px;
      min-height: 200px;
      padding: 1.5rem;
    }
  }
`;

const MotionTaskcardModal = motion.create(StyledTaskCardModal);
function TaskCardModal({ task, onCloseModal, taskIndex, columnIndex }) {
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTask({ columnIndex, taskIndex }));
    onCloseModal();
  }
  console.log(columnIndex, taskIndex);
  return (
    <>
      <MotionTaskcardModal
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 50,
          transition: { duration: 0.2, type: "spring", mass: 0.5 },
        }}>
        <div onClick={onCloseModal}></div>
        <div>
          <div>
            <h3>{task.title}</h3>
            <VerticalEllipsis
              toggleMenu={() => setToggleSubmenu(!toggleSubmenu)}
            />
          </div>
          {task.description.trim() && <p>{task.description}</p>}
          <Header>
            Subtasks (
            {task.subtasks.filter((sub) => sub.isCompleted === true).length} of{" "}
            {task.subtasks.length})
          </Header>
        </div>
      </MotionTaskcardModal>
      {toggleSubmenu && (
        <SubMenu
          firstOption="Edit Task"
          secondOption="Delete Task"
          onDelete={() => {
            handleDeleteTask();
            setToggleSubmenu(!toggleSubmenu);
          }}
        />
      )}
    </>
  );
}

export default TaskCardModal;
