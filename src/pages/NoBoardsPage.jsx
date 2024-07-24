import styled from "styled-components";
import Button from "../components/ui/Button.styled";
import { FaPlus } from "react-icons/fa6";

const StyledNoBoardsPage = styled.div`
  height: 100vh;
  margin: 0 auto;
  width: 100vw;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  & > p {
    font-size: var(--fsXl);
    color: var(--veryLightGrey);
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 400px;
    padding: 1rem;
  }
`;

function NoBoardsPage() {
  return (
    <StyledNoBoardsPage>
      <p>There are no boards available. Create a new board to get started</p>
      <Button $variation="primary" $size="large">
        <FaPlus /> Add New Board
      </Button>
    </StyledNoBoardsPage>
  );
}

export default NoBoardsPage;
