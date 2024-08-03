import styled from "styled-components";

export const StyledNavBoardItem = styled.div`
  cursor: pointer;
  /* here we used !important because in Navbar.styled is the parent and override the gap */
  gap: 0.5rem !important;
  height: 3rem;
  @media (min-width: 769px) {
    & img {
      display: none;
    }
  }
`;
