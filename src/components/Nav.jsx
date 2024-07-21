import styled from "styled-components";
import { MainLogo, ThreeDots } from "../styles/SVGs.styled";
import { DesktopBtn, TabletNavBtn } from "../styles/Buttons.styled";
import iconThreeDots from "../assets/icon-vertical-ellipsis.svg";
import logoDark from "../assets/logo-dark.svg";
import { FaPlus } from "react-icons/fa6";

const StyledNav = styled.nav`
  border: 2px solid salmon;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0.7em 0.9em;
  background-color: ${({ theme }) => theme.colors.white};
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <MainLogo src={logoDark} alt="the main logo" />
      <div>
        <DesktopBtn $btnType="primary-l" $padding=".8rem 2rem">
          <FaPlus /> Add New Task
        </DesktopBtn>
        <TabletNavBtn $btnType="primary-l" $padding=".5rem 1rem">
          <FaPlus size={18} />
        </TabletNavBtn>
        <ThreeDots src={iconThreeDots} alt="three-dots-menu" />
      </div>
    </StyledNav>
  );
}

export default Nav;
