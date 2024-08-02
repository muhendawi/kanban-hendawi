import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  height: 150%;
  opacity: 0;
  z-index: -100;
  background-color: rgb(0, 0, 0, 0.45) !important;
  transform: scale(0.5);
  transition: all 0.45s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  & div:first-child {
    position: fixed;
    inset: 0;
  }
  & div:last-child {
    position: absolute;
    inset: 25%;
    margin: auto;
    width: 480px;
    padding: 32px;
    min-height: 450px;
    border-radius: 0.5rem;
    background-color: var(--white);
    @media (max-width: 768px) {
      max-width: 343px;
    }
  }
  ${({ $isNewBoardOpen }) =>
    $isNewBoardOpen &&
    css`
      opacity: 1;
      transform: scale(1);
      z-index: 800;
      /* left: 0; */
    `}
`;
