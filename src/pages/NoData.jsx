import { Button } from "../components";
import styled from "styled-components";
//------------------------------------------------------------------->

const StyledNoData = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  & > p {
    font-size: var(--fsL);
    color: var(--veryLightGrey);
    text-align: center;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    min-width: 200px;
    padding: 1rem;
  }
`;
//------------------------------------------------------------------->

function NoData({ text, btnText, onClick }) {
  return (
    <StyledNoData>
      <p>{text}</p>
      <Button onClick={onClick} $variation="primary" $size="medium">
        {btnText}
      </Button>
    </StyledNoData>
  );
}

export default NoData;
