import styled from "styled-components";
import { ThreeDots } from "./styles/SVGs.styled";
import iconThreeDots from "../assets/icon-vertical-ellipsis.svg";
import Button from "./ui/Button.styled";
import { FaPlus } from "react-icons/fa6";
import Wrapper from "./Wrapper";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.1rem 0.8rem 0.9rem;
  border-bottom: 2px solid var(--lightSilver);
  background-color: var(--white);
  & > div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
`;

// nav button - tablet/mobile verison
const MobileNavBtn = styled(Button)`
  margin-right: 0.3rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

// nav button - desktop verison
const DesktopNavBtn = styled(Button)`
  margin-right: 0.3rem;
  & svg {
    margin-right: 0.2rem;
  }
  @media (max-width: 768px) {
    display: none;
    transition: ease 0.3s;
  }
`;

function NavBar() {
  return (
    <StyledNav>
      <p>Baord Name(placeHolder)</p>
      <Wrapper>
        <DesktopNavBtn $variation="primary" $size="medium">
          <FaPlus size={12} /> Add New Task
        </DesktopNavBtn>
        <MobileNavBtn $variation="primary" $size="small">
          <FaPlus size={15} />
        </MobileNavBtn>
        <ThreeDots src={iconThreeDots} alt="three-dots-menu" />
      </Wrapper>
    </StyledNav>
  );
}

export default NavBar;
