import { useState } from "react";
import styled, { css } from "styled-components";
import ColumnAddRemove from "./ColumnAddRemove";
import { Button } from "../universal/Button.styled";
import { useDispatch } from "react-redux";
import { addNewBoard } from "../../store/board/board.slice";
//------------------------------------------------------------------->

const StyledNewBoardModal = styled.div`
  position: fixed;
  inset: 0;
  top: -5rem;
  bottom: -5rem;
  opacity: 0;
  z-index: -100;
  background-color: rgb(0, 0, 0, 0.45);
  /* backdrop-filter: blur(0.5px); */
  transition: ease-out 0.15s;
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  > div:first-child {
    position: fixed;
    inset: 0;
  }
  > div:last-child {
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
    /* box-shadow: 0 4px 10px rgb(99, 95, 199, 0.5); */
    transform: scale(0.7);
    transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    > * {
      width: 100%;
    }
    > h3 {
      margin: 0;
      margin-bottom: 0.8rem;
    }
    > label {
      color: var(--veryLightGrey);
      font-size: var(--fsS);
      font-weight: 700;
      margin-bottom: -0.3rem;
    }
    > input {
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
      &:focus {
        border: 1px solid var(--darkIndigo);
      }
    }

    @media (max-width: 768px) {
      max-width: 343px;
      min-height: 200px;
      padding: 1.5rem;
    }
  }
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
//------------------------------------------------------------------->

function NewBoardModal({ onClose, isModalOpen }) {
  const [boardName, setBoardName] = useState("");
  const [columns, setColumns] = useState([
    { name: "Todo", tasks: [] },
    { name: "Doing", tasks: [] },
  ]);
  const dispatch = useDispatch();

  console.log(columns);
  console.log(boardName);

  return (
    <StyledNewBoardModal $isModalOpen={isModalOpen}>
      <div
        onClick={() => {
          onClose();
          setTimeout(() => {
            setColumns([
              { name: "Todo", tasks: [] },
              { name: "Doing", tasks: [] },
            ]);
            setBoardName("");
          }, 400);
        }}></div>
      <div>
        <h3>Add new Board</h3>
        <label htmlFor="bName">Board Name</label>
        <input
          placeholder="e.g. Web Design"
          type="text"
          id="bName"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <label>Board Columns</label>
        {/* {Array.from({ length: columnsNo }).map((index) => (
          <ColumnAddRemove key={index} itemIndex={index} />
        ))} */}
        {columns.map((column, index) => (
          <ColumnAddRemove
            key={index}
            value={column.name}
            currentIndex={index}
            column={column}
            onSetColumns={setColumns}
            // onChange={handleInputChange}
            // handleRemoveColumn={() => handleRemoveColumn(column.id)}
          />
        ))}
        <Button
          $variation="primary"
          $size="formSpecific"
          onClick={() => setColumns([...columns, { name: "", tasks: [] }])}>
          + Add New Column
        </Button>
        <Button
          $variation="primary"
          $size="formSpecific"
          onClick={() => {
            dispatch(addNewBoard(boardName, columns));
            onClose();
            setTimeout(() => {
              setColumns([
                { name: "Todo", tasks: [] },
                { name: "Doing", tasks: [] },
              ]);
              setBoardName("");
            }, 400);
          }}>
          Create New Board
        </Button>
      </div>
    </StyledNewBoardModal>
  );
}

export default NewBoardModal;
