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
  overflow: auto;
  > h4 {
    margin: 0;
    padding: 0;
  }
  > p {
    margin: 0;
    font-size: var(--fsS);
    font-weight: 700;
    color: var(--veryLightGrey);
  }
`;
