import styled, { css } from "styled-components";

export const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: auto calc(100vh - 4.7rem);
  & > nav {
    background-color: var(--white);
    grid-column: 2/3;
    @media (max-width: 768px) {
      grid-column: 1/3;
    }
  }
  & > aside {
    background-color: var(--white);
    grid-row: 2/3;
  }
  & > div {
    border-right: 2px solid var(--lightSilver);
    background-color: var(--white);
    grid-column: 1/2;
    display: flex;
    justify-content: flex-start;
    padding: 0 1.7rem;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
  & > main {
    ${({ $isItHidden }) =>
      $isItHidden
        ? css`
            grid-column: 1/3;
          `
        : css`
            grid-column: 2/3;
          `}
  }
`;
