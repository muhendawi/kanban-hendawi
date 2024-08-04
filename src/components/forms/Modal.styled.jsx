import styled, { css } from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  top: -5rem;
  bottom: -5rem;
  opacity: 0;
  z-index: -100;
  background-color: rgb(0, 0, 0, 0.45);
  transform: scale(0.8);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  & div:first-child {
    position: fixed;
    inset: 0;
  }
  & div:last-child {
    position: absolute;
    inset: 30%;
    margin: auto;
    max-width: 480px;
    padding: 32px;
    min-height: 300px;
    border-radius: 0.5rem;
    background-color: var(--white);
    overflow: auto;
    @media (max-width: 768px) {
      max-width: 343px;
      inset: 0;
      height: 60%;
    }
  }
  ${({ $isModalOpen }) =>
    $isModalOpen &&
    css`
      opacity: 1;
      transform: scale(1);
      z-index: 801;
      /* left: 0; */
    `}
`;

export default StyledModal;