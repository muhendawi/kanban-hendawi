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
  /* transform: scale(0.5); */
  > div:first-child {
    position: absolute;
    background-color: rgb(255, 255, 255, 0.85);
    top: 0;
    left: 0;
    right: 0;
    bottom: -5rem;
    @media (min-width: 768px) {
      display: none;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    max-height: 60%;
    padding: 1rem 1rem 1rem 0;
    border-radius: 0.6rem;
    background-color: var(--white);
    position: absolute;
    top: 3%;
    right: 5%;
    left: 5%;
    box-shadow: 0 5px 15px rgb(0, 0, 0, 0.45);
    > div:first-of-type {
      overflow: auto;
    }
  }
  /* ${({ $isMobileMenuOpen }) =>
    $isMobileMenuOpen &&
    css`
      > div:last-child {
        transform: translateX(0);
      }
    `} */
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
//------------------------------------------------------------------->

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCloseMobileMenu}
        />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.2, type: "spring", mass: 0.5 },
          }}>
          <Header>All Boards ({boardsSlice.boards.length})</Header>
          <div>
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
          </div>
          <CreateNewBoard
            onClick={() => {
              onCloseMobileMenu();
              onSetNewBoardModal();
            }}
          />
          <LightDarkToggleItem />
        </motion.div>
      </StyledMobileMenu>
    </>
  );
}

export default MobileMenu;
