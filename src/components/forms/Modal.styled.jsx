import styled, { css } from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  top: -5rem;
  bottom: -5rem;
  opacity: 0;
  z-index: -100;
  background-color: rgb(0, 0, 0, 0.45);
  transition: ease-out 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  & div:first-child {
    position: fixed;
    inset: 0;
  }
  & div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 480px;
    max-height: calc(90% - 10rem);
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: var(--white);
    overflow-y: scroll;
    transform: scale(0.7);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    > * {
      width: 100%;
    }
    > h3 {
      margin: 0;
      margin-bottom: 0.8rem;
    }
    > label {
      color: var(--veryLightGrey);
      font-size: var(--fsS);
      font-weight: 700;
      margin-bottom: -0.3rem;
    }
    > input {
      height: 40px;
      border: 1px solid var(--formPlaceholder);
      border-radius: 0.3rem;
      padding: 1rem;
      font-size: var(--fsS);
      font-weight: 500;
      margin-bottom: 1rem;

      &::placeholder {
        color: var(--formPlaceholder);
      }
      &:focus {
        border: 1px solid var(--darkIndigo);
      }
    }

    @media (max-width: 768px) {
      max-width: 343px;
      min-height: 200px;
      padding: 1.5rem;
    }
  }
  ${({ $isModalOpen }) =>
    $isModalOpen &&
    css`
      & div:last-child {
        transform: scale(1);
      }
      opacity: 1;
      z-index: 801;
      /* left: 0; */
    `}
`;

export default StyledModal;
