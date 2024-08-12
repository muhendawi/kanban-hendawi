import { StyledSidebar } from "./Sidebar-v1.styled";
import BoardItem from "./BoardItem";
import Header from "./Header.styled";
import LightDarkToggleItem from "./LightDarkToggleItem";
import CreateNewBoard from "./CreateNewBoard";
import Wrapper from "../../universal/Wrapper";
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
import ExModal from "../../forms/ExModal";

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
                  <IconBoard />
                  <BoardName boardName={board.name} />
                </BoardItem>
              ))}
            </Wrapper>
            <CreateNewBoard onClick={() => dispatch(toggleNewBoardModal())} />
          </Wrapper>
          <Wrapper>
            <LightDarkToggleItem />
            <BoardItem onClick={handleToggleSidebar}>
              <IconHideSidebar />
              <BoardName boardName="Hide Sidebar" />
            </BoardItem>
          </Wrapper>
        </Wrapper>
      </StyledSidebar>
      <ExModal
        onClose={() => dispatch(toggleNewBoardModal())}
        isModalOpen={boardsSlice.isNewBoardModalOpen}
      />
    </>
  );
}

export default Sidebar;
