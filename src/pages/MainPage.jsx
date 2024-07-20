import styled from "styled-components";
import StyledButton from "../styles/StyledButton.styled";
const StyledMainPage = styled.div`
  /* display: grid;
  grid-template-columns: 200px 1fr;
  & div {
  } */
`;

function MainPage() {
  return (
    <StyledMainPage>
      <StyledButton $btnType="destructive">Hello</StyledButton>
    </StyledMainPage>
  );
}

export default MainPage;
