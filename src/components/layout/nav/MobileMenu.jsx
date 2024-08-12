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
} from "../../../store/board/board.slice";
import IconBoard from "../../../assets/IconBoardSVG";

function MobileMenu({ onClick, isMobileMenuOpen }) {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();

  function handleSelectBoardIndex(id) {
    dispatch(setSelectedBoardIndex(id));
  }

  function handleToggleNewBoardModal() {
    dispatch(toggleNewBoardModal());
  }

  // function handleToggleMobileMenu() {
  //   dispatch(toggleMobileMenu());
  // }

  return (
    <StyledMobileMenu $isMobileMenuOpen={isMobileMenuOpen}>
      <Wrapper onClick={onClick}></Wrapper>
      <Wrapper>
        <Header>All Boards ({boardsSlice.boards.length})</Header>
        <Wrapper>
          {boardsSlice.boards.map((board, index) => (
            <BoardItem
              key={index}
              onClick={() => {
                handleSelectBoardIndex(index);
                onClick();
              }}
              active={index === boardsSlice.selectedBoardIndex}>
              <IconBoard />
              <BoardName boardName={board.name} />
            </BoardItem>
          ))}
        </Wrapper>
        <CreateNewBoard
          onClick={() => {
            onClick();
            handleToggleNewBoardModal();
          }}
        />
        <LightDarkToggleItem />
      </Wrapper>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
