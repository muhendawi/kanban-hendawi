import styled from "styled-components";
import BoardName from "./BoardName";
import IconBoard from "../../../assets/IconBoardSVG";
//------------------------------------------------------------------->

const StyledCreateNewBoard = styled.div`
  min-height: 3rem;
  width: 83%;
  padding: 0.8rem 1.7rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background-color: var(--verylightSliver);
  cursor: pointer;
  transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem; */
  border-radius: 2rem;
  box-shadow: 0 3px 7px rgb(0, 0, 0, 0.45), inset 0 1px 3px rgb(0, 0, 0, 0.25),
    inset -0 -1px 3px rgb(0, 0, 0, 0.25);
  > svg {
    fill: var(--darkIndigo);
  }
  > p {
    color: var(--darkIndigo);
  }
  > img {
  }
  &:hover {
    background-color: var(--hoverIndigo);
    transition: ease 0.4s;
  }
  &:active {
    scale: 0.98;
  }
`;

//------------------------------------------------------------------->

function CreateNewBoard({ onClick }) {
  return (
    <StyledCreateNewBoard onClick={onClick}>
      <IconBoard />
      <BoardName boardName="+ Create New Board " />
    </StyledCreateNewBoard>
  );
}

export default CreateNewBoard;
