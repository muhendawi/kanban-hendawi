import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//------------------------------------------------------------------->

const StyledSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  background-color: var(--white);
  width: 200px;
  height: 110px;
  border-radius: 0.6rem;
  z-index: 100;
  box-shadow: 0 10px 20px rgb(99, 95, 199, 0.25);
  position: absolute;
  top: 5.5rem;
  right: 1rem;
  /* box-shadow: 0 10px 20px rgba(54, 78, 126, 0.25); */
  > div {
    cursor: pointer;
    align-self: flex-start;
    margin: 0 auto;
    border-radius: 0.5rem;
    &:active {
      background-color: var(--lightSilver);
    }
  }
  > div:first-child {
    margin-bottom: 0.3rem;
    padding: 5px 90px 5px 20px;
    > span {
      color: var(--veryLightGrey);
      font-size: var(--fsM);
      font-weight: 500;
    }
    &:hover {
      background-color: var(--verylightSliver);
    }
    @media (max-width: 768px) {
      padding-right: 50px;
    }
  }
  > div:last-child {
    padding: 5px 70px 5px 20px;
    > span {
      color: var(--darkRedOrange);
      font-size: var(--fsM);
      font-weight: 500;
    }
    &:hover {
      background-color: var(--verylightSliver);
    }
    @media (max-width: 768px) {
      padding-right: 30px;
    }
  }
  @media (max-width: 768px) {
    width: 150px;
  }
`;
//------------------------------------------------------------------->
const MotionSubMenu = motion.create(StyledSubMenu);
function SubMenu({ firstOption, secondOption, onDelete, onEdit, type }) {
  return (
    <MotionSubMenu
      initial={{ opacity: 0, x: 70, y: type === "task" ? -15 : 0 }}
      animate={{
        opacity: 1,
        x: type === "task" ? 40 : 0,
        y: type === "task" ? -15 : 0,
      }}
      exit={{ opacity: 0, x: 70, transition: { type: "tween" } }}>
      <div onClick={onEdit}>
        <span>{firstOption}</span>
      </div>
      <div onClick={onDelete}>
        <span>{secondOption}</span>
      </div>
    </MotionSubMenu>
  );
}

export default SubMenu;
