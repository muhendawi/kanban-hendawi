import { StyledMain } from "./Main.styled";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Wrapper from "../components/universal/Wrapper";
import { DarkLogo } from "../components";
import Navbar from "../components/layout/nav/Navbar";
import AppBody from "../components/layout/appBody/AppBody";
import { useSelector } from "react-redux";

function Main() {
  const isItHidden = useSelector((store) => store.boards.isSidebarVisible);
  return (
    <StyledMain $isItHidden={isItHidden}>
      <Wrapper>
        <DarkLogo />
      </Wrapper>
      <Navbar />
      <Sidebar />
      <AppBody />
    </StyledMain>
  );
}

export default Main;
