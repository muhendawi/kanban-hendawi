import styled from "styled-components";
import SidebarBoardItem from "./SidebarBoardItem";
import SidebarHeader from "./SidebarHeader";
import ToggleItem from "./ToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import iconBoard from "../assets/icon-board.svg";
import iconHideSidebar from "../assets/icon-hide-sidebar.svg";
import Wrapper from "./Wrapper";

const StyledSidebar = styled.aside`
  padding: 1.5rem 1.5rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid var(--lightSilver);

  @media (max-width: 768px) {
    display: none;
  }
`;

function SideBar() {
  return (
    <StyledSidebar>
      <Wrapper>
        <SidebarHeader>All Boards ({3})</SidebarHeader>
        <Wrapper>
          <SidebarBoardItem
            itemIcon={iconBoard}
            text="Platform Launch"
            active={true}
          />
          <SidebarBoardItem itemIcon={iconBoard} text="Marketing Plan" />
          <SidebarBoardItem itemIcon={iconBoard} text="Roadmap" />
        </Wrapper>
        <CreateNewBoard />
      </Wrapper>
      <Wrapper>
        <ToggleItem />
        <SidebarBoardItem itemIcon={iconHideSidebar} text="Hide Sidebar" />
      </Wrapper>
    </StyledSidebar>
  );
}

export default SideBar;
