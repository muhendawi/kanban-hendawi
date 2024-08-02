import styled from "styled-components";

const StyledAppBody = styled.main`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: grid;
  grid-auto-columns: 18rem;
  grid-auto-flow: column;
  gap: 1rem;
  overflow: auto;
  > div:last-of-type {
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

export default StyledAppBody;
