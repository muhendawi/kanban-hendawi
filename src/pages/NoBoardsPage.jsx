import styled from "styled-components";
import { DesktopBtn } from "../styles/Buttons.styled";
import { FaPlus } from "react-icons/fa6";

const StyledNoBoardsPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  & > p {
    font-size: ${({ theme }) => theme.sizes.fsXl};
    color: ${({ theme }) => theme.colors.grey};
  }
`;

function NoBoardsPage() {
  return (
    <StyledNoBoardsPage>
      <p>There are no boards available. Create a new board to get started</p>
      <DesktopBtn $btnType="primary-l">
        <FaPlus /> Add New Board
      </DesktopBtn>
    </StyledNoBoardsPage>
  );
}

export default NoBoardsPage;
