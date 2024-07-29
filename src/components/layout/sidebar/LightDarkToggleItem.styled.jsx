import styled from "styled-components";

export const StyledLightDarkToggleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background-color: var(--lightSilver);
  width: 95%;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.4rem;
  &:active {
    /* outline: none; */
    /* touch-action: none; */
  }
  & > div {
    display: flex;
    align-items: center;
    height: 3rem;
    margin-left: -0.3rem;
  }
`;
