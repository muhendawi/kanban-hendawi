import styled from "styled-components";
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
  position: absolute;
  border-radius: 0.6rem;
  top: 5rem;
  right: 1rem;
  z-index: 100;
  box-shadow: 0 10px 20px rgb(99, 95, 199, 0.25);
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
  }
  > div:last-child {
    padding: 5px 70px 5px 20px;
    > span {
      color: var(--darkRedOrange);
      font-size: var(--fsM);
      font-weight: 500;
    }
  }
  @media (min-width: 769px) {
    top: 6rem;
  }
`;
//------------------------------------------------------------------->
const MotionSubMenu = motion.create(StyledSubMenu);
function SubMenu({ firstOption, secondOption, onDelete, onEdit }) {
  return (
    <MotionSubMenu
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 150 }}
      // transition={{ duration: 0.2 }}
    >
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
