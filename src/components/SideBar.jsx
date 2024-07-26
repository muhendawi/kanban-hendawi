import styled from "styled-components";
import SidebarBoardItem from "./SidebarBoardItem";
import SidebarHeader from "./SidebarHeader";
import ToggleItem from "./ToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import iconBoard from "../assets/icon-board.svg";
import iconHideSidebar from "../assets/icon-hide-sidebar.svg";
import Wrapper from "./Wrapper";
import { useState } from "react";
import ShowSidebarBtn from "./ShowSidebarBtn";

const StyledSidebar = styled.aside`
  height: 100%;
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.5rem 2rem 0;
    border-right: 2px solid var(--lightSilver);
    > div {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
  transition: ease 0.4s;
`;

function SideBar() {
  const [isSidebarHidden, setIsSidebareHidden] = useState(false);
  return (
    <>
      {isSidebarHidden ? (
        <ShowSidebarBtn onClick={() => setIsSidebareHidden(!isSidebarHidden)} />
      ) : (
        <StyledSidebar>
          <Wrapper>
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
              <SidebarBoardItem
                itemIcon={iconHideSidebar}
                text="Hide Sidebar"
                onClick={() => setIsSidebareHidden(!isSidebarHidden)}
              />
            </Wrapper>
          </Wrapper>
        </StyledSidebar>
      )}
    </>
  );
}

export default SideBar;
