import styled, { css } from "styled-components";
import Header from "../sidebar/Header.styled";
import getRandomHexColor from "../../../utils/randomColorGenerator";
import { motion } from "framer-motion";
//------------------------------------------------------------------->

export const StyledBoardColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > h3 {
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 0.5rem;
    padding-left: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    > span {
      background-color: var(--darkIndigo);
      width: 10px;
      height: 10px;
      border-radius: 50%;

      /* border: 1px solid salmon; */
    }
  }
  &:last-child {
    height: calc(100% - 2.5rem);
    margin-top: 2.3rem;
    border-radius: 0.5rem;
    background-color: var(--verylightSliver);
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 4px 6px rgba(54, 78, 126, 0.102);
    /* position: relative; */
    > h3 {
      display: none;
    }
    > p {
      position: sticky;
      top: 40vh;
      font-size: var(--fsXl);
      font-weight: 700;
      color: var(--veryLightGrey);
    }
    &:hover {
      > p {
        color: var(--darkIndigo);
        transition: ease-in 0.2s;
      }
    }
    &:active {
      transform: scale(0.97);
    }
  }
`;
//------------------------------------------------------------------->
const MotionBoardColumn = motion.create(StyledBoardColumn);
function BoardColumn({ onClick, columnName, tasksNo, children }) {
  // const color = getRandomHexColor();
  return (
    <MotionBoardColumn onClick={onClick}>
      <Header>
        <span></span>
        {columnName} ({tasksNo})
      </Header>
      {children}
    </MotionBoardColumn>
  );
}

export default BoardColumn;
