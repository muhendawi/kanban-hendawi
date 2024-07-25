import styled from "styled-components";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { MainLogo } from "../components/styles/SVGs.styled";
import logoDark from "../assets/logo-dark.svg";
import Wrapper from "../components/Wrapper";

const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: auto calc(100vh - 5rem);
  & > nav {
    background-color: var(--white);
    grid-column: 2/3;
    @media (max-width: 768px) {
      grid-column: 1/3;
    }
  }
  & > aside {
    background-color: var(--white);
    grid-row: 2/3;
  }
  & > div {
    border-right: 2px solid var(--lightSilver);
    background-color: var(--white);
    grid-column: 1/2;
    display: flex;
    justify-content: flex-start;
    padding: 0 1.7rem;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

function MainPage() {
  return (
    <StyledMainPage>
      <Wrapper>
        <MainLogo src={logoDark} alt="mainLogo" />
      </Wrapper>
      <NavBar />
      <SideBar />
    </StyledMainPage>
  );
}

export default MainPage;
