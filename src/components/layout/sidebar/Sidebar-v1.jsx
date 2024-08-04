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
import { toggleNewBoardModal } from "../../../store/board/board.slice";
import {
  toggleSidebar,
  setSelectedBoardIndex,
} from "../../../store/board/board.slice";
import Modal from "../../forms/Modal";

function Sidebar() {
  const isSidebarHidden = useSelector((store) => store.boards.isSidebarHidden);
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();

  function handleToggleSidebar() {
    dispatch(toggleSidebar());
  }

  function handleSelectBoardIndex(id) {
    dispatch(setSelectedBoardIndex(id));
  }

  return (
    <>
      {isSidebarHidden && (
        <ToggleSidebarBtn
          onClick={handleToggleSidebar}
          isSidebarHidden={isSidebarHidden}
        />
      )}
      <StyledSidebar $isSidebarHidden={isSidebarHidden}>
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
            <CreateNewBoard onClick={() => dispatch(toggleNewBoardModal())} />
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
      <Modal
        onClick={() => dispatch(toggleNewBoardModal())}
        isModalOpen={boardsSlice.isNewBoardModalOpen}>
        New Board 🎲
      </Modal>
    </>
  );
}

export default Sidebar;
