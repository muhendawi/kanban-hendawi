import { StyledSidebar } from "./Sidebar.styled";
import BoardItem from "./BoardItem";
import Header from "./Header.styled";
import LightDarkToggleItem from "./LightDarkToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import Wrapper from "../../universal/Wrapper";
import ToggleSidebarBtn from "./ToggleSidebarBtn";
import { BoardIcon, HideSidebarIcon } from "../..";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../../store/board/board.slice";

function Sidebar() {
  const isItHidden = useSelector((store) => store.boards.isSidebarVisible);
  const dispatch = useDispatch();
  function handleToggleSidebar() {
    dispatch(toggleSidebar());
  }

  return (
    <>
      {isItHidden ? (
        <ToggleSidebarBtn onClick={handleToggleSidebar} />
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
              <BoardItem text="Hide Sidebar" onClick={handleToggleSidebar}>
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
