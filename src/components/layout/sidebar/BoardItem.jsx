import { memo } from "react";
import styled, { css } from "styled-components";
//------------------------------------------------------------------->

export const StyledBoardItem = styled.div`
  min-height: 3rem;
  width: 100%;
  padding: 0.8rem 1.7rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  > svg {
    fill: var(--veryLightGrey);
  }
  &:hover {
    background-color: var(--hoverGrey);
    transition: ease-in 0.4s;
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
      transition: ease-in 0.3s;
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
