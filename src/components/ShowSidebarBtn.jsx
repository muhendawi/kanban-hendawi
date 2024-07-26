import styled from "styled-components";
import { IconBoard } from "./styles/SVGs.styled";
import showSidebarIcon from "../assets/icon-show-sidebar.svg";

const StyledShowSidebarBtn = styled.div`
  height: 3rem;
  width: 5rem;
  cursor: pointer;
  background-color: var(--darkIndigo) !important;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: fixed;
  bottom: 4.5rem;
  left: 0;
  &:hover {
    background-color: var(--hoverIndigo);
  }
`;

function ShowSidebarBtn({ onClick }) {
  return (
    <StyledShowSidebarBtn onClick={onClick}>
      <IconBoard src={showSidebarIcon} alt="show sidebar icon" />
    </StyledShowSidebarBtn>
  );
}

export default ShowSidebarBtn;
