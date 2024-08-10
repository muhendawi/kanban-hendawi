import styled, { css } from "styled-components";

const StyledDeleteBoardMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--white);
  width: 200px;
  height: 110px;
  opacity: 0;
  transform: translateX(+100%);
  position: fixed;
  border-radius: 0.5rem;
  top: 5rem;
  right: 1rem;
  z-index: -100;
  box-shadow: 0 10px 20px rgba(54, 78, 126, 0.25);
  transition: ease-out 0.15s;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  > div:first-child {
    cursor: pointer;
    align-self: flex-start;
    margin-bottom: 0.3rem;
    padding: 5px 90px 5px 20px;
    > span {
      color: var(--veryLightGrey);
      font-size: var(--fsM);
      font-weight: 500;
    }
  }
  > div:last-child {
    cursor: pointer;
    align-self: flex-start;
    padding: 5px 70px 5px 20px;
    > span {
      color: var(--darkRedOrange);
      font-size: var(--fsM);
      font-weight: 500;
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
