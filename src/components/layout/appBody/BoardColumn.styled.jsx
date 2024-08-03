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
        transition: ease-in 0.3s;
      }
    }
  }
`;
