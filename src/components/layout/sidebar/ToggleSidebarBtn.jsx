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
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover {
    background: var(--hoverIndigo);
  }
  &:active {
    transform: translateX(-80%);
  }
  @media (max-width: 768px) {
    left: -20rem;
  }
`;
//------------------------------------------------------------------->

function ToggleSidebarBtn({ onClick, isSidebarHidden }) {
  return (
    <StyledToggleSidebarBtn
      $isSidebarHidden={isSidebarHidden}
      onClick={onClick}>
      <ShowSidebarIcon />
    </StyledToggleSidebarBtn>
  );
}

export default ToggleSidebarBtn;
