import Sidebar from "../components/layout/sidebar/Sidebar";
import Navbar from "../components/layout/nav/Navbar";
import BoardsBody from "../components/layout/boardBody/BoardsBody";
import { useSelector } from "react-redux";
import MainLogo from "../components/universal/MainLogo";
import styled, { css } from "styled-components";
//------------------------------------------------------------------->

// StyledMain should only laid out its children not style them
const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 5rem 1fr;

  > nav {
    grid-column: 2/3;
    @media (max-width: 768px) {
      grid-column: 1/3;
    }
  }
  > aside {
    grid-row: 2/3;
  }
  > main {
    ${({ $isSidebarHidden }) =>
      $isSidebarHidden &&
      css`
        grid-column: 1/3;
      `};
    @media (max-width: 768px) {
      grid-column: 1/3;
    }
  }
  @media (max-width: 768px) {
    grid-template-rows: 4rem calc(100vh - 4rem);
  }
`;
//------------------------------------------------------------------->

function Main() {
  const boardsSlice = useSelector((store) => store.boards);
  return (
    <StyledMain $isSidebarHidden={boardsSlice.isSidebarHidden}>
      <MainLogo />
      <Navbar />
      <Sidebar />
      <BoardsBody />
    </StyledMain>
  );
}

export default Main;
