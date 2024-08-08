import styled, { css } from "styled-components";

export const StyledBoardItem = styled.div`
  min-height: 3rem;
  width: 100%;
  padding: 0.8rem 1.7rem;
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  &:hover {
    background-color: var(--hoverGrey);
    > p {
      color: var(--darkIndigo);
    }
    transition: ease-in 0.4s;
  }
  /* Just to test the selected board */
  ${({ $active }) =>
    $active &&
    css`
      background-color: var(--darkIndigo);
      transition: ease-in 0.3s;
      & > p {
        color: var(--white);
      }
    `}
`;
