import styled, { css } from "styled-components";
import { CrossIcon } from "../universal/Icons.styled";
import { useAnimate } from "framer-motion";
//------------------------------------------------------------------->

const StyledColumnAddRemove = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  > input {
    width: 100%;
    height: 40px;
    padding: 1rem;
    border-radius: 0.3rem;
    font-size: var(--fsS);
    font-weight: 500;
    outline: none;
    border: 1px solid var(--formPlaceholder);
    &::placeholder {
      color: var(--formPlaceholder);
    }
    ${({ $shouldStyle }) =>
      $shouldStyle &&
      css`
        border: 1px solid var(--darkRedOrange);
        text-align: end;
        &::placeholder {
          color: var(--darkRedOrange);
        }
      `}
    &:focus {
      border: 1px solid var(--darkIndigo);
    }
  }
`;
//------------------------------------------------------------------->

function ColumnAddRemove({
  defaultValue,
  currentIndex,
  columns,
  onSetColumns,
  elementsToStyle,
  onSetElementsToStyle,
}) {
  console.log(columns);
  console.log(elementsToStyle);

  function removeElementToStyleOnTyping() {
    // REMOVE the elementToStyle when typing on it, when on focus
    onSetElementsToStyle((currValue) =>
      currValue.filter((ele) => ele !== currentIndex)
    );
  }

  function handleRemoveColumn(currIndex) {
    onSetColumns((prevValue) =>
      prevValue.filter((_, index) => index !== currIndex)
    );
  }
  function handleInputChange(currIndex, newValue) {
    onSetColumns((prevState) => {
      const newState = [...prevState];
      const column = newState.find((_, index) => index === currIndex);
      column.name = newValue;
      return newState;
    });
    // REMOVE the elementToStyle when typing on it, when on focus
    onSetElementsToStyle((currValue) =>
      currValue.filter((ele) => ele !== currentIndex)
    );
    removeElementToStyleOnTyping();
  }

  return (
    <StyledColumnAddRemove
      $shouldStyle={elementsToStyle.includes(currentIndex)}>
      <input
        className={elementsToStyle.includes(currentIndex) ? "shakeIt" : null}
        type="text"
        placeholder={
          elementsToStyle.includes(currentIndex)
            ? "Can't be empty"
            : "e.g. Todo"
        }
        value={defaultValue}
        onBlur={() => {
          columns.forEach((ele, index) => {
            if (ele.name.trim() === "") {
              if (elementsToStyle.includes(index)) return;
              onSetElementsToStyle((currArray) => [...currArray, index]);
            }
          });
        }}
        onFocus={removeElementToStyleOnTyping}
        onChange={(e) => {
          handleInputChange(currentIndex, e.target.value);
        }}
      />
      <CrossIcon onRemove={() => handleRemoveColumn(currentIndex)} />
    </StyledColumnAddRemove>
  );
}

export default ColumnAddRemove;
