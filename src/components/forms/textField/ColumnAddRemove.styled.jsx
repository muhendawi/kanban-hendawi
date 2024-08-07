import styled from "styled-components";

const StyledColumnAddRemove = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  > input {
    width: 100%;
    height: 40px;
    padding: 1rem;
    border: 1px solid var(--formPlaceholder);
    border-radius: 0.3rem;
    font-size: var(--fsS);
    font-weight: 500;

    &::placeholder {
      color: var(--formPlaceholder);
    }
  }
`;

export default StyledColumnAddRemove;
