import styled from "styled-components";
import { Button } from "../..";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.4rem 1rem 1.5rem;
  background-color: var(--white);
  // laid out the NavBoardTitle and its adjacent Wrapper
  > div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  > div:last-of-type {
    gap: 0.2rem;
  }
  /* Adjusting the nav padding for mobile */
  @media (max-width: 768px) {
    padding: 1rem 0.4rem 1rem 0.8rem;
  }
`;

// nav button - tablet/mobile verison
export const MobileNavBtn = styled(Button)`
  padding: 0.6rem 1rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

// nav button - desktop verison
export const DesktopNavBtn = styled(Button)`
  @media (max-width: 768px) {
    display: none;
    transition: ease 0.3s;
  }
`;
