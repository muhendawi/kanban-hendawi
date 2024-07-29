import { StyledSidebar } from "./Sidebar.styled";
import BoardItem from "./BoardItem";
import Header from "./Header.styled";
import LightDarkToggleItem from "./LightDarkToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import Wrapper from "../../universal/Wrapper";
import { useState } from "react";
import ToggleSidebarBtn from "./ToggleSidebarBtn";
import { BoardIcon, HideSidebarIcon } from "../..";

function Sidebar() {
  const [isSidebarHidden, setIsSidebareHidden] = useState(false);
  return (
    <>
      {isSidebarHidden ? (
        <ToggleSidebarBtn
          onClick={() => setIsSidebareHidden(!isSidebarHidden)}
        />
      ) : (
        <StyledSidebar>
          <Wrapper>
            <Wrapper>
              <Header>All Boards ({3})</Header>
              <Wrapper>
                <BoardItem text="Platform Launch" active={true}>
                  <BoardIcon />
                </BoardItem>
                <BoardItem text="Marketing Plan">
                  <BoardIcon />
                </BoardItem>
                <BoardItem text="Roadmap">
                  <BoardIcon />
                </BoardItem>
              </Wrapper>
              <CreateNewBoard />
            </Wrapper>
            <Wrapper>
              <LightDarkToggleItem />
              <BoardItem
                text="Hide Sidebar"
                onClick={() => setIsSidebareHidden(!isSidebarHidden)}>
                <HideSidebarIcon />
              </BoardItem>
            </Wrapper>
          </Wrapper>
        </StyledSidebar>
      )}
    </>
  );
}

export default Sidebar;
