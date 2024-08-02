import { StyledSidebar } from "./Sidebar-v1.styled";
import BoardItem from "./BoardItem";
import Header from "./Header.styled";
import LightDarkToggleItem from "./LightDarkToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import Wrapper from "../../universal/Wrapper";
import ToggleSidebarBtn from "./ToggleSidebarBtn";
import { BoardIcon, HideSidebarIcon } from "../..";
import { useSelector, useDispatch } from "react-redux";
import BoardName from "./BoardName";
import Modal from "../../universal/Modal-v1";
import {
  toggleSidebar,
  setSelectedBoardIndex,
  toggleNewBoardModal,
} from "../../../store/board/board.slice";

function Sidebar() {
  const isSidebarVisible = useSelector(
    (store) => store.boards.isSidebarVisible
  );
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();

  function handleToggleSidebar() {
    dispatch(toggleSidebar());
  }

  function handleSelectBoardIndex(id) {
    dispatch(setSelectedBoardIndex(id));
  }

  function handleToggleModal() {
    dispatch(toggleNewBoardModal());
  }
  console.log(boardsSlice.selectedBoardIndex);
  return (
    <>
      <ToggleSidebarBtn onClick={handleToggleSidebar} />
      <StyledSidebar $isSidebarVisible={isSidebarVisible}>
        <Wrapper>
          <Wrapper>
            <Header>All Boards ({boardsSlice.boards.length})</Header>
            <Wrapper>
              {boardsSlice.boards.map((board, index) => (
                <BoardItem
                  key={index}
                  onClick={() => handleSelectBoardIndex(index)}
                  active={index === boardsSlice.selectedBoardIndex}>
                  <BoardIcon />
                  <BoardName boardName={board.name} />
                </BoardItem>
              ))}
            </Wrapper>
            <CreateNewBoard onClick={handleToggleModal} />
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
    </>
  );
}

export default Sidebar;
