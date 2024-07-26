import styled, { css } from "styled-components";
import BoardName from "./BoardName";
import { IconBoard } from "../components/styles/SVGs.styled";

//===========================================================>
const StyledSidebarBoardItem = styled.div`
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
    & > p {
      color: var(--darkIndigo);
    }
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

function SidebarBoardItem({ itemIcon, text, active }) {
  return (
    <StyledSidebarBoardItem $active={active}>
      <IconBoard src={itemIcon} alt="sidebar board icon" />
      <BoardName text={text} />
    </StyledSidebarBoardItem>
  );
}

export default SidebarBoardItem;
