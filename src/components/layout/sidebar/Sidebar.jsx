import BoardItem from "./BoardItem";
import Header from "./Header.styled";
import LightDarkToggleItem from "./LightDarkToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import IconBoard from "../../../assets/IconBoardSVG";
import IconHideSidebar from "../../../assets/IconHideSidebarSVG";
import { useSelector, useDispatch } from "react-redux";
import BoardName from "./BoardName";
import { setSelectedBoardIndex } from "../../../store/board/board.slice";
import BoardModal from "../../modals/BoardModal";
import styled from "styled-components";
import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
//------------------------------------------------------------------->

const StyledSidebar = styled.aside`
  background-color: var(--white);
  z-index: 2;
  /* border-right: 1.5px solid var(--lightSilver); */
  /* box-shadow: 0 2px 10px rgb(0, 0, 0, 0.45),
    inset 0 -2px 10px rgb(0, 0, 0, 0.45), inset 0 2px 10px rgb(0, 0, 0, 0.45); */
  /* box-shadow: 1px 0 10px rgb(0, 0, 0, 0.45), inset 1px 0 10px rgb(0, 0, 0, 0.45); */
  box-shadow: 0.1px 0 2px rgb(0, 0, 0, 0.25),
    inset 0.1px 0 2px rgb(0, 0, 0, 0.25), inset 0 -0.1px 2px rgb(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    position: fixed;
    left: -1000px;
  }
`;
const SidebarContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 2rem 0;
  > div {
    width: 100%;
  }
`;
const TitleBoardsandCreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BoardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-height: 60vh;
  padding: 0.5rem 0;
  overflow: auto;
`;
const HideDarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;
`;
//------------------------------------------------------------------->
const MotionSidebar = motion.create(StyledSidebar);
const Sidebar = memo(function Sidebar({ toggleSidebar, isSidebarOpened }) {
  const mainStore = useSelector((store) => store.boards);
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
        <SidebarContentContainer>
          <TitleBoardsandCreateContainer>
            <Header>All Boards ({mainStore.boards.length})</Header>
            <BoardsContainer>
              {mainStore.boards.map((board, index) => (
                <BoardItem
                  key={index}
                  onClick={() => handleSelectBoardIndex(index)}
                  active={index === mainStore.selectedBoardIndex}>
                  <IconBoard />
                  <BoardName boardName={board.name} index={index} />
                </BoardItem>
              ))}
            </BoardsContainer>
            <CreateNewBoard
              onClick={() => setIsNewBoardModalOpen(!isNewBoardModalOpen)}
            />
          </TitleBoardsandCreateContainer>
          <HideDarkContainer>
            <LightDarkToggleItem />
            <BoardItem onClick={toggleSidebar}>
              <IconHideSidebar />
              <BoardName boardName="Hide Sidebar" />
            </BoardItem>
          </HideDarkContainer>
        </SidebarContentContainer>
      </MotionSidebar>
      <AnimatePresence>
        {isNewBoardModalOpen && (
          <BoardModal
            onClose={() => setIsNewBoardModalOpen(!isNewBoardModalOpen)}
            isModalOpen={isNewBoardModalOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
});

export default Sidebar;
