import { StyledMainPage } from "./MainPage.styled";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Wrapper from "../components/universal/Wrapper";
import { DarkLogo } from "../components";
import Navbar from "../components/layout/nav/Navbar";
import AppBody from "../components/layout/appBody/AppBody";
import { useSelector } from "react-redux";

function MainPage() {
  const isItHidden = useSelector((store) => store.boards.isSidebarVisible);
  return (
    <StyledMainPage $isItHidden={isItHidden}>
      <Wrapper>
        <DarkLogo />
      </Wrapper>
      <Navbar />
      <Sidebar />
      <AppBody />
    </StyledMainPage>
  );
}

export default MainPage;
