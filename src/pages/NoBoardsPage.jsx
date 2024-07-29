import { StyledNoBoardsPage } from "./NoBoardPage.styled";
import { Button } from "../components";
import { FaPlus } from "react-icons/fa6";

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
