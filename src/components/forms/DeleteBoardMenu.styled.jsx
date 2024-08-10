import styled, { css } from "styled-components";

const StyledDeleteBoardMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--white);
  padding: 1rem;
  width: 150px;
  height: 100px;
  opacity: 0;
  transform: translateX(+100%);
  position: fixed;
  border-radius: 0.5rem;
  top: 5rem;
  right: 1rem;
  z-index: -100;
  box-shadow: 0 10px 20px rgba(54, 78, 126, 0.25);
  transition: ease-out 0.15s;
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  > div:first-child {
    cursor: pointer;
    align-self: flex-start;
    margin-bottom: 0.3rem;
    > span {
      padding: 10px 40px 10px 10px;
      color: var(--veryLightGrey);
      font-size: var(--fsS);
      font-weight: 600;
    }
  }
  > div:last-child {
    cursor: pointer;
    align-self: flex-start;
    > span {
      padding: 10px 25px 10px 10px;
      color: var(--darkRedOrange);
      font-size: var(--fsS);
      font-weight: 600;
    }
  }
  ${({ $isMenuOpen }) =>
    $isMenuOpen &&
    css`
      opacity: 1;
      transform: translateX(0);
      z-index: 900;
    `}
  @media (min-width: 769px) {
    top: 6rem;
  }
`;

export default StyledDeleteBoardMenu;
