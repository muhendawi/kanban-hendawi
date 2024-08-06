import styled from "styled-components";

export const StyledTaskCard = styled.div`
  width: 17.5rem;
  min-height: 5.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(54, 78, 126, 0.102);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem;
  cursor: pointer;
  overflow: auto;
  transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  > h4 {
    font-size: var(--fsM);
    margin: 0;
    padding: 0;
    transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  > p {
    margin: 0;
    font-size: var(--fsS);
    font-weight: 700;
    color: var(--veryLightGrey);
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  &:hover {
    box-shadow: 0 4px 6px rgb(99, 95, 199, 0.6);
    > h4 {
      color: var(--darkIndigo);
    }
    > p {
      color: var(--hoverIndigo);
    }
  }
  &:active {
    transform: scale(0.96);
  }
`;
