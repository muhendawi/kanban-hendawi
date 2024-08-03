import styled from "styled-components";

const StyledNavBoardTitle = styled.h2`
  font-size: calc(var(--fsXl) - 2px);
  margin: 0;
  @media (max-width: 320px) {
    /*IPhone portrait and smaller. You can probably stop on 320px*/
    font-size: calc(var(--fsL));
  }
`;

export default StyledNavBoardTitle;
