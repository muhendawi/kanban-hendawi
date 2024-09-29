import { useState } from "react";
import styled, { css } from "styled-components";
import SubInputAddRemove from "./SubInputAddRemove";
import { Button } from "../universal/Button.styled";
import { useDispatch } from "react-redux";
import { useAnimate, stagger, motion } from "framer-motion";
import {
  addNewBoard,
  setSelectedBoardIndex,
} from "../../store/board/board.slice";
import { useSelector } from "react-redux";
import { flushSync } from "react-dom";
import { AnimatePresence } from "framer-motion";
//------------------------------------------------------------------->

const StyledNewBoardModal = styled.div`
  position: fixed;
  inset: 0;
  top: -5rem;
  bottom: -5rem;
  z-index: 801;
  background-color: rgb(0, 0, 0, 0.45);
  /* backdrop-filter: blur(0.5px); */
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
      /* left: 0; */
    `}
`;

const ModalBackdrop = styled.div`
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
  padding: 2rem;
  border-radius: 0.6rem;
  background-color: var(--white);
  overflow-y: scroll;
  box-shadow: 0 5px 15px rgb(99, 95, 199, 0.3);
  > * {
    width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 343px;
    min-height: 200px;
    padding: 1.5rem;
  }
`;
const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.8rem;
`;
const InputLabel = styled.label`
  color: var(--veryLightGrey);
  font-size: var(--fsS);
  font-weight: 700;
  margin-bottom: -0.3rem;
`;
const BoardNameInput = styled.input`
  height: 40px;
  border: 1px solid var(--formPlaceholder);
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: var(--fsS);
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
    `}
  &:focus {
    border: 1px solid var(--darkIndigo);
  }
`;
//------------------------------------------------------------------->
const MotionModal = motion.create(StyledNewBoardModal);
const MotionBoardNameInput = motion.create(BoardNameInput);
function NewBoardModal({ onClose, isModalOpen }) {
  const boardsSlice = useSelector((store) => store.boards.boards);
  const dispatch = useDispatch();
  const [boardName, setBoardName] = useState("");
  const [isBoardNameEmpty, setIsBoardNameEmpty] = useState(false);
  const [columns, setColumns] = useState([
    { name: "Todo", tasks: [] },
    { name: "Doing", tasks: [] },
  ]);
  const [elementsToStyle, setElementsToStyle] = useState([]);

  const [scope, animate] = useAnimate();
  console.log(scope);

  function submit() {
    // this check to validate the boardName input
    if (boardName.trim() === "") setIsBoardNameEmpty(true);
    // validating the empty columns inputs
    columns.forEach((ele, index) => {
      if (ele.name.trim() === "") {
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
      boardName.trim() !== "" &&
      columns.every((col) => col.name.trim() !== "")
    ) {
      dispatch(addNewBoard(boardName, columns));
      dispatch(setSelectedBoardIndex(boardsSlice.length));
      onClose();
      setTimeout(() => {
        setColumns([
          { name: "Todo", tasks: [] },
          { name: "Doing", tasks: [] },
        ]);
        setBoardName("");
      }, 400);
    }

    animate(
      ".shakeIt, .animateIt",
      { x: [-12, 0, 12, 0] },
      { type: "spring", duration: 0.3, stiffness: 5000, delay: stagger(0.05) }
    );
    return;
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
          // RESETTING state after 300ms
          setTimeout(() => {
            setColumns([
              { name: "Todo", tasks: [] },
              { name: "Doing", tasks: [] },
            ]);
            setBoardName("");
            setIsBoardNameEmpty(false);
            setElementsToStyle([]);
          }, 300);
        }}
      />
      <ModalContentContainer ref={scope}>
        <Title>Add new Board</Title>
        <InputLabel htmlFor="bName">Board Name</InputLabel>
        <BoardNameInput
          $shouldStyle={isBoardNameEmpty}
          className={!boardName.trim() ? "shakeIt" : null}
          placeholder="e.g. Web Design"
          type="text"
          id="bName"
          value={boardName}
          onFocus={() => setIsBoardNameEmpty(false)}
          onBlur={() => {
            if (boardName.trim() === "") setIsBoardNameEmpty(true);
          }}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <InputLabel>Board Columns</InputLabel>
        <AnimatePresence>
          {columns.map((column, index) => (
            <SubInputAddRemove
              key={index}
              defaultValue={column.name}
              currentIndex={index}
              columns={columns}
              onSetColumns={setColumns}
              elementsToStyle={elementsToStyle}
              onSetElementsToStyle={setElementsToStyle}
            />
          ))}
        </AnimatePresence>

        <Button
          $variation="primary"
          $size="formSpecific"
          onClick={() => {
            setColumns([...columns, { name: "", tasks: [] }]);
          }}>
          + Add New Column
        </Button>
        <Button $variation="primary" $size="formSpecific" onClick={submit}>
          Create New Board
        </Button>
      </ModalContentContainer>
    </MotionModal>
  );
}

export default NewBoardModal;
