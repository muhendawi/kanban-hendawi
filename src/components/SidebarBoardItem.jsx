import styled, { css } from "styled-components";
import iconBoard from "../assets/icon-board.svg";
import BoardName from "./BoardName";

//===========================================================>
const StyledSidebarBoardItem = styled.div`
  /* border: 1px solid red; */
  min-height: 3rem;
  width: 100%;
  padding: 0.8rem 1.7rem;
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  & > img {
  }
  &:hover {
    background-color: var(--hoverGrey);
    transition: ease 0.4s;
  }
  /* Just to test the selected board */
  ${({ $active }) =>
    $active &&
    css`
      background-color: var(--darkIndigo);
      & > p {
        color: var(--white);
      }
    `}
`;

const IconBoard = styled.img``;

function SidebarBoardItem({ text, active }) {
  return (
    <StyledSidebarBoardItem $active={active}>
      <IconBoard src={iconBoard} alt="sidebar board icon" />
      <BoardName text={text} />
    </StyledSidebarBoardItem>
  );
}

export default SidebarBoardItem;
