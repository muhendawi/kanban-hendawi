import { VerticalEllipsis } from "../..";
import { FaPlus } from "react-icons/fa6";
import Wrapper from "../../universal/Wrapper";
import NavBoardTile from "./BoardItem";
import { StyledNav, DesktopNavBtn, MobileNavBtn } from "./Navbar.styled";
//--------------------------------------------------------------->

function Navbar() {
  return (
    <StyledNav>
      <NavBoardTile />
      <Wrapper>
        <DesktopNavBtn $variation="primary" $size="medium">
          <FaPlus size={12} /> Add New Task
        </DesktopNavBtn>
        <MobileNavBtn $variation="primary" $size="small">
          <FaPlus size={15} />
        </MobileNavBtn>
        <VerticalEllipsis />
      </Wrapper>
    </StyledNav>
  );
}

export default Navbar;
