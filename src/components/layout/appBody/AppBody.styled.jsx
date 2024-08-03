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

  @media (max-width: 768px) {
    padding: 1.5rem 0.8rem;
  }
`;

export default StyledAppBody;
