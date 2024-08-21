import BoardItem from "./BoardItem";
import Header from "./Header.styled";
import LightDarkToggleItem from "./LightDarkToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import ToggleSidebarBtn from "./ToggleSidebarBtn";
import IconBoard from "../../../assets/IconBoardSVG";
import IconHideSidebar from "../../../assets/IconHideSidebarSVG";
import { useSelector, useDispatch } from "react-redux";
import BoardName from "./BoardName";
import { toggleNewBoardModal } from "../../../store/board/board.slice";
import {
  toggleSidebar,
  setSelectedBoardIndex,
} from "../../../store/board/board.slice";
import NewBoardModal from "../../modals/NewBoardModal";
import styled, { css } from "styled-components";
import { memo } from "react";
//------------------------------------------------------------------->

const StyledSidebar = styled.aside`
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: var(--white);
  z-index: 2;
  ${({ $isSidebarHidden }) =>
    $isSidebarHidden &&
    css`
      opacity: 0;
      transform: translateX(-100%);
      position: fixed;
      top: 5rem;
      bottom: 0;
    `}
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem 2rem 0;
    border-right: 2px solid var(--lightSilver);
    > div {
      width: 100%;
    }
    > div:first-of-type {
      > div:first-of-type {
        width: 100%;
        max-height: 60vh;
        overflow: auto;
      }
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    left: -1000px;
  }
`;
//------------------------------------------------------------------->

const Sidebar = memo(function Sidebar() {
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
        <div>
          <div>
            <Header>All Boards ({boardsSlice.boards.length})</Header>
            <div>
              {boardsSlice.boards.map((board, index) => (
                <BoardItem
                  key={index}
                  onClick={() => handleSelectBoardIndex(index)}
                  active={index === boardsSlice.selectedBoardIndex}>
                  <IconBoard />
                  <BoardName boardName={board.name} />
                </BoardItem>
              ))}
            </div>
            <CreateNewBoard onClick={() => dispatch(toggleNewBoardModal())} />
          </div>
          <div>
            <LightDarkToggleItem />
            <BoardItem onClick={handleToggleSidebar}>
              <IconHideSidebar />
              <BoardName boardName="Hide Sidebar" />
            </BoardItem>
          </div>
        </div>
      </StyledSidebar>
      <NewBoardModal
        onClose={() => dispatch(toggleNewBoardModal())}
        isModalOpen={boardsSlice.isNewBoardModalOpen}
      />
    </>
  );
});

export default Sidebar;
