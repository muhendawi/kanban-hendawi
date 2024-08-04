import styled, { css } from "styled-components";

export const StyledToggleSidebarBtn = styled.div`
  height: 3rem;
  width: 5rem;
  cursor: pointer;
  background-color: var(--darkIndigo);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: fixed;
  bottom: 3rem;
  left: -1.2rem;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover {
    background: var(--hoverIndigo);
  }
  @media (max-width: 768px) {
    left: -20rem;
  }
`;
