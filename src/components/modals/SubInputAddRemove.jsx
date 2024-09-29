import styled, { css } from "styled-components";
import { CrossIcon } from "../universal/Icons.styled";
import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";
//------------------------------------------------------------------->

const StyledSubInputAddRemove = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;
const Input = styled.input`
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
      &::placeholder {
        color: var(--darkRedOrange);
      }
    `}
  &:focus {
    border: 1px solid var(--darkIndigo);
  }
`;
//------------------------------------------------------------------->
const MotionSubInputAddRemove = motion.create(StyledSubInputAddRemove);
function SubInputAddRemove({
  defaultValue,
  currentIndex,
  columns,
  onSetColumns,
  elementsToStyle,
  onSetElementsToStyle,
}) {
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
    removeElementToStyleOnTyping();
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
    <MotionSubInputAddRemove
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}>
      <Input
        $shouldStyle={elementsToStyle.includes(currentIndex)}
        className={elementsToStyle.includes(currentIndex) ? "animateIt" : null}
        type="text"
        placeholder="e.g. Todo"
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
    </MotionSubInputAddRemove>
  );
}

export default SubInputAddRemove;
