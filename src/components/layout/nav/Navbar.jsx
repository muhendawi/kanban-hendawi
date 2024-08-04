import { StyledNav, DesktopNavBtn, MobileNavBtn } from "./Navbar.styled";
import { VerticalEllipsis } from "../..";
import { FaPlus } from "react-icons/fa6";
import Wrapper from "../../universal/Wrapper";
import NavBoardItem from "./NavBoardItem";
import { useDispatch } from "react-redux";
import { toggleNewBoardModal } from "../../../store/board/board.slice";
import MobileMenu from "./MobileMenu";
//--------------------------------------------------------------->

function Navbar() {
  const dispatch = useDispatch();
  return (
    <StyledNav>
      <NavBoardItem />

      <Wrapper>
        <DesktopNavBtn
          $variation="primary"
          $size="medium"
          onClick={() => dispatch(toggleNewBoardModal())}>
          + Add New Task
        </DesktopNavBtn>
        <MobileNavBtn
          $variation="primary"
          $size="small"
          onClick={() => dispatch(toggleNewBoardModal())}>
          <FaPlus size={15} />
        </MobileNavBtn>
        <VerticalEllipsis />
      </Wrapper>
      <MobileMenu />
    </StyledNav>
  );
}

export default Navbar;
