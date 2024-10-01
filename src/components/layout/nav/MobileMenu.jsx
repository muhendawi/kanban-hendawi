import styled, { css } from "styled-components";
import Header from "../sidebar/Header.styled";
import { useSelector } from "react-redux";
import BoardItem from "../sidebar/BoardItem";
import BoardName from "../sidebar/BoardName";
import CreateNewBoard from "../sidebar/CreateNewBoard";
import { useDispatch } from "react-redux";
import LightDarkToggleItem from "../sidebar/LightDarkToggleItem";
import {
  setSelectedBoardIndex,
  toggleNewBoardModal,
} from "../../../store/board/board.slice";
import IconBoard from "../../../assets/IconBoardSVG";
import { motion } from "framer-motion";
//------------------------------------------------------------------->

const StyledMobileMenu = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: -5rem;
  z-index: -101;

  @media (min-width: 768px) {
    opacity: 0;
    top: -1000px;
    z-index: -1000;
  }
  ${({ $isMobileMenuOpen }) =>
    $isMobileMenuOpen &&
    css`
      /* transform: scale(1); */
      z-index: 700;
    `}
`;
const ModalBackdrop = styled.div`
  position: absolute;
  background-color: rgb(255, 255, 255, 0.85);
  top: 0;
  left: 0;
  right: 0;
  bottom: -5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;
const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  max-height: 60%;
  /* padding: 1rem 1rem 1rem 0; */
  padding: 1rem 0;
  border-radius: 0.6rem;
  background-color: var(--white);
  position: absolute;
  top: 3%;
  right: 5%;
  left: 5%;
  box-shadow: 0 5px 8px rgb(0, 0, 0, 0.45), inset 0 1px 3px rgb(0, 0, 0, 0.25),
    inset -0 -1px 3px rgb(0, 0, 0, 0.25);
`;
const BoardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`;
const HideDarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 1rem;
  margin-top: 1rem;
`;
//------------------------------------------------------------------->
const MotionModalBackdrop = motion.create(ModalBackdrop);
const MotionModalContentContainer = motion.create(ModalContentContainer);
function MobileMenu({
  onCloseMobileMenu,
  isMobileMenuOpen,
  onSetNewBoardModal,
}) {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();
  function handleSelectBoardIndex(id) {
    dispatch(setSelectedBoardIndex(id));
  }

  // function handleToggleNewBoardModal() {
  //   dispatch(toggleNewBoardModal());
  // }

  return (
    <>
      <StyledMobileMenu $isMobileMenuOpen={isMobileMenuOpen}>
        <MotionModalBackdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCloseMobileMenu}
        />
        <MotionModalContentContainer
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.2, type: "spring", mass: 0.5 },
          }}>
          <Header>All Boards ({boardsSlice.boards.length})</Header>
          <BoardsContainer>
            {boardsSlice.boards.map((board, index) => (
              <BoardItem
                key={index}
                onClick={() => {
                  handleSelectBoardIndex(index);
                  onCloseMobileMenu();
                }}
                active={index === boardsSlice.selectedBoardIndex}>
                <IconBoard />
                <BoardName boardName={board.name} />
              </BoardItem>
            ))}
          </BoardsContainer>
          <HideDarkContainer>
            <CreateNewBoard
              onClick={() => {
                onCloseMobileMenu();
                onSetNewBoardModal();
              }}
            />
            <LightDarkToggleItem />
          </HideDarkContainer>
        </MotionModalContentContainer>
      </StyledMobileMenu>
    </>
  );
}

export default MobileMenu;
