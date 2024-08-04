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

import {
  toggleSidebar,
  setSelectedBoardIndex,
} from "../../../store/board/board.slice";
import NewBoardModal from "../../forms/NewBoardModal";
import { useState } from "react";

function Sidebar() {
  const isSidebarHidden = useSelector((store) => store.boards.isSidebarHidden);
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();
  const [newBoardModalToggled, setNewBoardModal] = useState(false);

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
            <CreateNewBoard
              onClick={() => setNewBoardModal(!newBoardModalToggled)}
            />
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
      <NewBoardModal
        onClick={() => setNewBoardModal(!newBoardModalToggled)}
        isNewBoardModalOpen={newBoardModalToggled}>
        New Board 🎲
      </NewBoardModal>
    </>
  );
}

export default Sidebar;
