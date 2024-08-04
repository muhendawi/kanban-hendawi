import styled from "styled-components";

export const StyledBoardColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > h3 {
    text-transform: initial;
    margin: 0;
    margin-bottom: 0.5rem;
    padding-left: 0;
  }
  &:last-child {
    height: calc(100% - 2.4rem);
    margin-top: 2.4rem;
    border-radius: 0.5rem;
    background-color: var(--verylightSliver);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    /* box-shadow: 0 4px 5px -2px rgba(54, 78, 126, 0.102); */
    box-shadow: 0 4px 6px rgba(54, 78, 126, 0.102);
    > h3 {
      display: none;
    }
    > p {
      font-size: var(--fsXl);
      font-weight: 700;
      color: var(--veryLightGrey);
    }
    &:hover {
      > p {
        color: var(--darkIndigo);
        transition: ease-in 0.2s;
      }
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;
