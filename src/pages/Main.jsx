import { StyledMain } from "./Main.styled";
import Sidebar from "../components/layout/sidebar/Sidebar-v1";
import Wrapper from "../components/universal/Wrapper";
import { DarkLogo } from "../components";
import Navbar from "../components/layout/nav/Navbar";
import AppBody from "../components/layout/appBody/AppBody";
import { useSelector } from "react-redux";
import Modal from "../components/universal/Modal-v2";

function Main() {
  const boardsSlice = useSelector((store) => store.boards);
  return (
    <StyledMain $isItHidden={boardsSlice.isSidebarVisible}>
      <Wrapper>
        <DarkLogo />
      </Wrapper>
      <Navbar />
      <Sidebar />
      <AppBody />
      <Modal>
        <p>hello</p>
      </Modal>
    </StyledMain>
  );
}

export default Main;
