import styled from "styled-components";
//------------------------------------------------------------------->

export const StyledBoardName = styled.p`
  font-size: var(--fsM);
  color: var(--veryLightGrey);
  font-weight: 700;
  margin-top: 0;
  flex: 1;
`;
//------------------------------------------------------------------->

function BoardName({ boardName }) {
  return <StyledBoardName>{boardName}</StyledBoardName>;
}

export default BoardName;
