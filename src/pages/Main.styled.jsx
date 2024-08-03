import styled, { css } from "styled-components";

// StyledMain should only laid out its children not style them
export const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 5rem calc(100vh - 5rem);
  > nav {
    grid-column: 2/3;
    @media (max-width: 768px) {
      grid-column: 1/3;
    }
  }
  > aside {
    grid-row: 2/3;
  }
  > main {
    ${({ $isItHidden }) =>
      $isItHidden &&
      css`
        grid-column: 1/3;
      `};
    @media (max-width: 768px) {
      grid-column: 1/3;
    }
  }
  @media (max-width: 768px) {
    grid-template-rows: 4rem calc(100vh - 4rem);
  }
`;
