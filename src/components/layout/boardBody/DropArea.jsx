import { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import {
  moveDraggingCard,
  reOrderItemInColumn,
} from "../../../store/board/board.slice";

const DropAreaContainer = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  width: 16rem;
  height: 15px;
  border-radius: 0.5rem;
  transition: all 0.25s ease;
  box-shadow: 0 3px 5px rgb(99, 136, 137, 0.7),
    inset 0 2px 5px rgb(99, 136, 137, 0.7),
    inset -0 -2px 5px rgb(99, 136, 137, 0.7);
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          height: 6rem;
          opacity: 1;
          margin: 10px 0;
        `
      : css`
          opacity: 0;
        `}
`;
const DropAreaInner = styled.div`
  /* border: 1px solid red; */
  border-radius: 0.5rem;
  background-color: transparent;
  transition: all 0.25s ease;
  position: absolute;
  inset: -45% 0 0 0;
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          height: 11rem;
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;
function DropArea({
  targetCardIndex,
  targetColumnIndex,
  draggringCard,
  currentColumnIndex,
  currentCardIndex,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  function showArea() {
    setIsVisible(true);
  }
  function hideArea() {
    setIsVisible(false);
  }

  return (
    <>
      <DropAreaContainer $isVisible={isVisible}>
        <DropAreaInner
          $isVisible={isVisible}
          onDragEnter={() => {
            showArea();
          }}
          onDragLeave={() => {
            hideArea();
          }}
          onDrop={() => {
            if (currentColumnIndex === targetColumnIndex) {
              dispatch(
                reOrderItemInColumn({
                  targetCardIndex: isNaN(targetCardIndex)
                    ? -1
                    : targetCardIndex,
                  currentColumnIndex,
                  currentCardIndex,
                })
              );
            } else {
              dispatch(
                moveDraggingCard({
                  targetCardIndex: isNaN(targetCardIndex)
                    ? 0
                    : targetCardIndex + 1,
                  targetColumnIndex,
                  draggringCard,
                  currentColumnIndex,
                })
              );
            }
            hideArea();
          }}
          onDragOver={(e) => e.preventDefault()}
        />
      </DropAreaContainer>
    </>
  );
}

export default DropArea;
