import styled from "styled-components";
import { CrossIcon } from "../universal/Icons.styled";
//------------------------------------------------------------------->

const StyledColumnAddRemove = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  > input {
    width: 100%;
    height: 40px;
    padding: 1rem;
    border: 1px solid var(--formPlaceholder);
    border-radius: 0.3rem;
    font-size: var(--fsS);
    font-weight: 500;
    outline: none;
    &::placeholder {
      color: var(--formPlaceholder);
    }
    &:focus {
      border: 1px solid var(--darkIndigo);
    }
  }
`;
//------------------------------------------------------------------->

function ColumnAddRemove({ value, currentIndex, column, onSetColumns }) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setFinalInput(enteredValue);
  //   }, 500);
  //   // onSetNewBoard((currBoard) => ({
  //   //   ...currBoard,
  //   //   columns: [...currBoard.columns],
  //   // }));
  // }, [enteredValue, finalInput, itemIndex, , setEnteredValue]);
  function handleRemoveColumn(currIndex) {
    onSetColumns((prevValue) =>
      prevValue.filter((col, index) => index !== currIndex)
    );
  }
  function handleInputChange(currIndex, newValue) {
    onSetColumns((prevState) => {
      const newState = [...prevState];
      const column = newState.find((_, index) => index === currIndex);
      column.name = newValue;
      return newState;
    });
  }
  return (
    <StyledColumnAddRemove>
      <input
        type="text"
        placeholder="e.g. Todo"
        value={value}
        onChange={(e) => handleInputChange(currentIndex, e.target.value)}
      />
      <CrossIcon onRemove={() => handleRemoveColumn(currentIndex)} />
    </StyledColumnAddRemove>
  );
}

export default ColumnAddRemove;
