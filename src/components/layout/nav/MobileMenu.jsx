import StyledMobileMenu from "./MobileMenu.styled";
import Header from "../sidebar/Header.styled";
import Wrapper from "../../universal/Wrapper";
import { useSelector } from "react-redux";
import BoardItem from "../sidebar/BoardItem";
import { BoardIcon } from "../../index";
import BoardName from "../sidebar/BoardName";
import CreateNewBoard from "../sidebar/CreateNewBoard";
import { useDispatch } from "react-redux";
import LightDarkToggleItem from "../sidebar/LightDarkToggleItem";
import {
  setSelectedBoardIndex,
  toggleNewBoardModal,
  toggleMobileMenu,
} from "../../../store/board/board.slice";

function MobileMenu() {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();

  function handleSelectBoardIndex(id) {
    dispatch(setSelectedBoardIndex(id));
  }

  function handleToggleModal() {
    dispatch(toggleNewBoardModal());
  }

  function handleToggleMobileMenu() {
    dispatch(toggleMobileMenu());
  }
  console.log(boardsSlice.isMobileMenuOpen);
  return (
    <StyledMobileMenu $isMobileMenuOpen={boardsSlice.isMobileMenuOpen}>
      <Wrapper onClick={handleToggleMobileMenu}></Wrapper>
      <Wrapper>
        <Header>All Boards ({boardsSlice.boards.length})</Header>
        {boardsSlice.boards.map((board, index) => (
          <BoardItem
            key={index}
            onClick={() => handleSelectBoardIndex(index)}
            active={index === boardsSlice.selectedBoardIndex}>
            <BoardIcon />
            <BoardName boardName={board.name} />
          </BoardItem>
        ))}
        <CreateNewBoard onClick={handleToggleModal} />
        <LightDarkToggleItem />
      </Wrapper>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
