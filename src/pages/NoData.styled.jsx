import styled from "styled-components";

export const StyledNoData = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  & > p {
    font-size: var(--fsL);
    color: var(--veryLightGrey);
    text-align: center;
  }
  @media (max-width: 768px) {
    min-width: 200px;
    padding: 1rem;
  }
`;
