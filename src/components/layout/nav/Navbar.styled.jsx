import styled from "styled-components";
import { Button } from "../..";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.1rem 0.8rem 0.9rem;
  background-color: var(--white);
  & > div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
`;

// nav button - tablet/mobile verison
export const MobileNavBtn = styled(Button)`
  margin-right: 0.3rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

// nav button - desktop verison
export const DesktopNavBtn = styled(Button)`
  margin-right: 0.3rem;
  & svg {
    margin-right: 0.2rem;
  }
  @media (max-width: 768px) {
    display: none;
    transition: ease 0.3s;
  }
`;
