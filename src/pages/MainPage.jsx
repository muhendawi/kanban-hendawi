import styled from "styled-components";
import Nav from "../components/Nav";
const StyledMainPage = styled.div`
  /* display: grid;
  grid-template-columns: 200px 1fr;
  & div {
  } */
`;

function MainPage() {
  return (
    <StyledMainPage>
      <Nav />
    </StyledMainPage>
  );
}

export default MainPage;
