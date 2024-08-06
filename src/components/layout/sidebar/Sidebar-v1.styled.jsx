import styled, { css } from "styled-components";

export const StyledSidebar = styled.aside`
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: var(--white);
  /* position: initial; */
  ${({ $isSidebarHidden }) =>
    $isSidebarHidden &&
    css`
      opacity: 0;
      transform: translateX(-100%);
      position: fixed;
      top: 5rem;
      bottom: 0;
      z-index: 1;
    `}
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem 2rem 0;
    border-right: 2px solid var(--lightSilver);
    > div {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    left: -1000px;
    /* display: none; */
  }
`;
