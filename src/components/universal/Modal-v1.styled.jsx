import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  opacity: 0;
  z-index: -100;
  transform: scale(0.5);
  background-color: rgb(0, 0, 0, 0.5) !important;
  /* transform: translateX(-100%); */
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  & div:last-child {
    border: 1px solid red;
    /* z-index: 900; */
    position: absolute;
    left: 35%;
    /* margin: 0 auto; */
    width: 480px;
    padding: 32px;
    height: 450px;
    /* opacity: 1; */
    border-radius: 0.5rem;
    background-color: var(--white);
    @media (max-width: 768px) {
      width: 343px;
    }
  }
  ${({ $isNewBoardOpen }) =>
    $isNewBoardOpen &&
    css`
      opacity: 1;
      transform: scale(1);
      /* transform: translateX(0); */
      z-index: 800;
      left: 0;
      /* height: 100vh;
      width: 100vw; */
    `}
`;
