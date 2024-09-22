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
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
//------------------------------------------------------------------->

const StyledSidebar = styled.aside`
  background-color: var(--white);
  z-index: 2;
  /* ${({ $isSidebarHidden }) =>
    $isSidebarHidden &&
    css`
      opacity: 0;
      transform: translateX(-100%);
      position: fixed;
      top: 5rem;
      bottom: 0;
    `} */
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
const MotionSidebar = motion.create(StyledSidebar);
const Sidebar = memo(function Sidebar({ toggleSidebar, isSidebarOpened }) {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();
  const [isNewBoardModalOpen, setIsNewBoardModalOpen] = useState(false);
  function handleSelectBoardIndex(id) {
    dispatch(setSelectedBoardIndex(id));
  }
  return (
    <>
      <MotionSidebar
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300, transition: { duration: 0.2 } }}>
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
            <CreateNewBoard
              onClick={() => setIsNewBoardModalOpen(!isNewBoardModalOpen)}
            />
          </div>
          <div>
            <LightDarkToggleItem />
            <BoardItem onClick={toggleSidebar}>
              <IconHideSidebar />
              <BoardName boardName="Hide Sidebar" />
            </BoardItem>
          </div>
        </div>
      </MotionSidebar>
      <AnimatePresence>
        {isNewBoardModalOpen && (
          <NewBoardModal
            onClose={() => setIsNewBoardModalOpen(!isNewBoardModalOpen)}
            isModalOpen={isNewBoardModalOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
});

export default Sidebar;
