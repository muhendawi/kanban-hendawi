import { StyledSidebar } from "./Sidebar.styled";
import BoardItem from "./BoardItem";
import Header from "./Header.styled";
import LightDarkToggleItem from "./LightDarkToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import Wrapper from "../../universal/Wrapper";
import ToggleSidebarBtn from "./ToggleSidebarBtn";
import { BoardIcon, HideSidebarIcon } from "../..";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSidebar,
  setSelectedItem,
} from "../../../store/board/board.slice";
import BoardName from "./BoardName";

function Sidebar() {
  const isItHidden = useSelector((store) => store.boards.isSidebarVisible);
  const boardsStore = useSelector((store) => store.boards);
  const dispatch = useDispatch();

  function handleToggleSidebar() {
    dispatch(toggleSidebar());
  }

  function handleBoardItemClick(id) {
    dispatch(setSelectedItem(id));
  }
  console.log(boardsStore.selectedItem);
  return (
    <>
      {isItHidden ? (
        <ToggleSidebarBtn onClick={handleToggleSidebar} />
      ) : (
        <StyledSidebar>
          <Wrapper>
            <Wrapper>
              <Header>All Boards ({boardsStore.boards.length})</Header>
              <Wrapper>
                {boardsStore.boards.map((board, index) => (
                  <BoardItem
                    key={index}
                    onClick={() => handleBoardItemClick(index)}
                    active={index === boardsStore.selectedItem}>
                    <BoardIcon />
                    <BoardName boardName={board.name} />
                  </BoardItem>
                ))}
              </Wrapper>
              <CreateNewBoard />
            </Wrapper>
            <Wrapper>
              <LightDarkToggleItem />
              <BoardItem onClick={handleToggleSidebar}>
                <HideSidebarIcon />
                <BoardName boardName="Hide Sidebar" />
              </BoardItem>
            </Wrapper>
          </Wrapper>
        </StyledSidebar>
      )}
    </>
  );
}

export default Sidebar;
