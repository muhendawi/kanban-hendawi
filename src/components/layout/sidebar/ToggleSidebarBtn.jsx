import { motion } from "framer-motion";
import { ShowSidebarIcon } from "../../universal/Icons.styled";
import styled from "styled-components";
//------------------------------------------------------------------->

const StyledToggleSidebarBtn = styled.div`
  height: 3rem;
  width: 5rem;
  cursor: pointer;
  background-color: var(--darkIndigo);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  /* box-shadow: 0 2px 7px rgb(0, 0, 0, 0.45), inset -5px 0 5px rgb(0, 0, 0, 0.45); */
  box-shadow: 0 3px 7px rgb(0, 0, 0, 0.45), inset 0 1px 3px rgb(0, 0, 0, 0.25),
    inset -0 -1px 3px rgb(0, 0, 0, 0.25);
  z-index: 3;
  position: fixed;
  bottom: 2rem;
  left: -1.2rem;
  &:hover {
    background: var(--hoverIndigo);
  }
  @media (max-width: 768px) {
    left: -20rem;
  }
`;
//------------------------------------------------------------------->
const MotionToggleSidebarBtn = motion.create(StyledToggleSidebarBtn);
function ToggleSidebarBtn({ onClick, isSidebarHidden }) {
  return (
    <MotionToggleSidebarBtn
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      $isSidebarHidden={isSidebarHidden}
      onClick={onClick}>
      <ShowSidebarIcon />
    </MotionToggleSidebarBtn>
  );
}

export default ToggleSidebarBtn;
