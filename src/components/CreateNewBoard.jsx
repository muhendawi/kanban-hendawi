import styled from "styled-components";
import iconBoard from "../assets/icon-board.svg";
import { IconBoard } from "../components/styles/SVGs.styled";
import BoardName from "./BoardName";

const StyledCreateNewBoard = styled.div`
  min-height: 3rem;
  width: 100%;
  padding: 0.8rem 1.7rem;
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  & > p {
    color: var(--darkIndigo);
  }
  & > img {
  }
  &:hover {
    background-color: var(--hoverGrey);
    transition: ease 0.4s;
  }
`;

function CreateNewBoard() {
  return (
    <StyledCreateNewBoard>
      <IconBoard src={iconBoard} alt="sidebar board icon" />
      <BoardName text="+ Create New Board " />
    </StyledCreateNewBoard>
  );
}

export default CreateNewBoard;
