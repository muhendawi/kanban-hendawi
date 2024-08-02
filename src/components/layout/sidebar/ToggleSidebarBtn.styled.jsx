import styled from "styled-components";

export const StyledToggleSidebarBtn = styled.div`
  height: 3rem;
  width: 5rem;
  cursor: pointer;
  background-color: var(--darkIndigo) !important;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: fixed;
  bottom: 3rem;
  left: -1.2rem; //
  &:hover {
    background: var(--hoverIndigo) !important;
  }
`;
