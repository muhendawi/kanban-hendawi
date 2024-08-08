import styled, { css } from "styled-components";

// StyledMain should only laid out its children not style them
export const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 5rem 1fr;

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
    ${({ $isSidebarHidden }) =>
      $isSidebarHidden &&
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
