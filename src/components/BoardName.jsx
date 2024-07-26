import styled from "styled-components";

const StyledBoardName = styled.p`
  font-size: var(--fsM);
  color: var(--veryLightGrey);
  font-weight: 700;
  margin-top: 0;
`;

function BoardName({ text }) {
  return <StyledBoardName>{text}</StyledBoardName>;
}

export default BoardName;
