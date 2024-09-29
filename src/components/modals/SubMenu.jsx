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
  box-shadow: 0 10px 20px rgb(0, 0, 0, 0.45);
  position: absolute;
  top: 6rem;
  right: 1rem;
  /* box-shadow: 0 10px 20px rgba(54, 78, 126, 0.25); */
  @media (max-width: 768px) {
    top: 5rem;
    width: 160px;
  }
`;
const EditDelete = styled.div`
  cursor: pointer;
  align-self: flex-start;
  border-radius: 0.5rem;
  margin: 0 auto;
  width: 90%;
  padding: 5px 20px;

  &:active {
    background-color: var(--lightSilver);
  }
`;
const Edit = styled(EditDelete)`
  &:hover {
    background-color: var(--verylightSliver);
  }
  @media (max-width: 768px) {
    padding-right: 50px;
  }
`;
const Delete = styled(EditDelete)`
  &:hover {
    background-color: var(--verylightSliver);
  }
  @media (max-width: 768px) {
    padding-right: 30px;
  }
`;
const TextSpan = styled.span`
  color: var(
    ${({ $textColor }) =>
      $textColor === "edit" ? "--veryLightGrey" : "--darkRedOrange"}
  );
  font-size: calc(var(--fsM) - 1px);
  font-weight: 600;
`;
const Hr = styled.hr`
  width: 70%;
  margin: 0.2rem auto;
  border: none;
  border-top: 1px solid var(--verylightSliver);
`;
//------------------------------------------------------------------->
const MotionSubMenu = motion.create(StyledSubMenu);
function SubMenu({ firstOption, secondOption, onDelete, onEdit, type }) {
  return (
    <MotionSubMenu
      initial={{
        opacity: 0,
        y: type === "task" ? -35 : -20,
        x: type === "task" ? 40 : 0,
      }}
      animate={{
        opacity: 1,
        y: type === "task" ? -15 : 0,
        // transition: { duration: 0.2 },
      }}
      exit={{
        opacity: 0,
        y: type === "task" ? -45 : -30,
        transition: { type: "tween" },
      }}>
      <Edit onClick={onEdit}>
        <TextSpan $textColor="edit">{firstOption}</TextSpan>
      </Edit>
      <Hr />
      <Delete onClick={onDelete}>
        <TextSpan>{secondOption}</TextSpan>
      </Delete>
    </MotionSubMenu>
  );
}

export default SubMenu;
