import { memo } from "react";
import styled, { css } from "styled-components";
//------------------------------------------------------------------->

export const StyledBoardItem = styled.div`
  min-height: 3rem;
  width: 90%;
  padding: 0.8rem 1.7rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 5px;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  /* border-radius: 2rem; */
  /* box-shadow: 0 2px 7px rgb(0, 0, 0, 0.45), inset -3px 0 7px rgb(0, 0, 0, 0.45); */

  > svg {
    fill: var(--veryLightGrey);
  }
  &:hover {
    background-color: var(--hoverGrey);
    transition: ease-in 0.1s;
    box-shadow: 0 2px 4px rgb(0, 0, 0, 0.45),
      inset 0 0.1px 3px rgb(0, 0, 0, 0.25),
      inset -0 -0.1px 3px rgb(0, 0, 0, 0.25);
    > p {
      color: var(--darkIndigo);
    }
    > svg {
      fill: var(--darkIndigo);
    }
  }
  /* Just to test the selected board */
  ${({ $active }) =>
    $active &&
    css`
      background-color: var(--darkIndigo);
      transition: ease-in 0.1s;
      /* box-shadow: 0 3px 7px rgb(0, 0, 0, 0.45),
        inset 0 1px 3px rgb(0, 0, 0, 0.25), inset -0 -1px 3px rgb(0, 0, 0, 0.25); */
      box-shadow: 0 2px 4px rgb(0, 0, 0, 0.45),
        inset 0 0.1px 3px rgb(0, 0, 0, 0.25),
        inset -0 -0.1px 3px rgb(0, 0, 0, 0.25);
      > p {
        color: var(--white);
      }
      > svg {
        fill: var(--white);
      }
    `}
`;
//------------------------------------------------------------------->

const BoardItem = memo(function BoardItem({ onClick, active, children }) {
  return (
    <StyledBoardItem $active={active} onClick={onClick}>
      {children}
    </StyledBoardItem>
  );
});

export default BoardItem;
