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
