import { StyledMainPage } from "./MainPage.styled";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Wrapper from "../components/universal/Wrapper";
import { DarkLogo } from "../components";
import Navbar from "../components/layout/nav/Navbar";

function MainPage() {
  return (
    <StyledMainPage>
      <Wrapper>
        <DarkLogo />
      </Wrapper>
      <Navbar />
      <Sidebar />
      {/* <AppBody /> */}
    </StyledMainPage>
  );
}

export default MainPage;
