import styled from "styled-components";

export const StyledNoBoardsPage = styled.div`
  height: 100vh;
  margin: 0 auto;
  width: 100vw;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  & > p {
    font-size: var(--fsXl);
    color: var(--veryLightGrey);
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 400px;
    padding: 1rem;
  }
`;
