import Sidebar from "../components/layout/sidebar/Sidebar";
import Navbar from "../components/layout/nav/Navbar";
import BoardsBody from "../components/layout/boardBody/BoardsBody";
import { useSelector } from "react-redux";
import MainLogo from "../components/universal/MainLogo";
import styled, { css } from "styled-components";
import ToggleSidebarBtn from "../components/layout/sidebar/ToggleSidebarBtn";
import { toggleSidebar } from "../store/board/board.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { flushSync } from "react-dom";
import { motion } from "framer-motion";
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
  /* > div {
    grid-column: 1/3;
    display: flex;
    width: 100%;
    height: 100%;
    > aside {
      width: 280px;
    }
  } */
  > aside {
    grid-row: 2/3;
  }
  > main {
    grid-column: 2/3;
    ${({ $isSidebarExit }) =>
      $isSidebarExit &&
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
  const [isSideBarOpened, setIsSidebarOpened] = useState(true);
  const [isSidebarExitComplete, setIsSidebarExitComplete] = useState(false);
  console.log(isSideBarOpened, isSidebarExitComplete);
  return (
    <StyledMain $isSidebarExit={isSidebarExitComplete}>
      <MainLogo />
      <Navbar />

      <AnimatePresence
        onExitComplete={() => setIsSidebarExitComplete(!isSideBarOpened)}>
        {isSideBarOpened ? (
          <Sidebar
            key="sidebar"
            toggleSidebar={() => setIsSidebarOpened(!isSideBarOpened)}
            isSidebarOpened={isSideBarOpened}
          />
        ) : (
          <ToggleSidebarBtn
            key="toggleBtn"
            onClick={() => {
              setIsSidebarOpened(!isSideBarOpened);
              setIsSidebarExitComplete(false);
            }}
            isSidebarHidden={isSideBarOpened}
          />
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
        {isSideBarOpened && (
          <ToggleSidebarBtn
            onClick={() => setIsSidebarOpened(!isSideBarOpened)}
            isSidebarHidden={isSideBarOpened}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isSideBarOpened && (
          <Sidebar
            toggleSidebar={() => setIsSidebarOpened(!isSideBarOpened)}
            isSidebarOpened={isSideBarOpened}
          />
        )}
      </AnimatePresence> */}
      <BoardsBody />
    </StyledMain>
  );
}

export default Main;
