import styled from "styled-components";
import SidebarBoardItem from "./SidebarBoardItem";
import SidebarHeader from "./SidebarHeader";
import ToggleItem from "./ToggleItem";

const StyledSidebar = styled.aside`
  padding: 1.5rem 1.5rem 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid var(--lightSilver);

  & > img {
    margin-top: 0.5rem;
  }
  & > h3 {
    align-self: flex-start;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

function SideBar() {
  return (
    <StyledSidebar>
      <SidebarHeader>All Boards ({3})</SidebarHeader>
      <SidebarBoardItem text="Platform Launch" active={true} />
      <SidebarBoardItem text="Marketing Plan" />
      <SidebarBoardItem text="Roadmap" />
      <ToggleItem />
    </StyledSidebar>
  );
}

export default SideBar;
