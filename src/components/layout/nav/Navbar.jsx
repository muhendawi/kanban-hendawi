import { StyledNav, DesktopNavBtn, MobileNavBtn } from "./Navbar.styled";
import { VerticalEllipsis } from "../..";
import { FaPlus } from "react-icons/fa6";
import Wrapper from "../../universal/Wrapper";
import NavBoardItem from "./NavBoardItem";
import MobileMenu from "./MobileMenu";
import NewTaskModal from "../../forms/NewTaskModal";
import { useState } from "react";
//--------------------------------------------------------------->

function Navbar() {
  const [newTaskModalToggled, setNewTaskModal] = useState(false);
  const [mobileMenuToggled, setMobileMenu] = useState(false);
  return (
    <StyledNav>
      <NavBoardItem
        onClick={() => setMobileMenu(!mobileMenuToggled)}
        isMobileMenuOpen={mobileMenuToggled}
      />
      <Wrapper>
        <DesktopNavBtn
          $variation="primary"
          $size="medium"
          onClick={() => setNewTaskModal(!newTaskModalToggled)}>
          + Add New Task
        </DesktopNavBtn>
        <MobileNavBtn
          $variation="primary"
          $size="small"
          onClick={() => setNewTaskModal(!newTaskModalToggled)}>
          <FaPlus size={15} />
        </MobileNavBtn>
        <VerticalEllipsis />
      </Wrapper>
      <MobileMenu
        onClick={() => setMobileMenu(!mobileMenuToggled)}
        isMobileMenuOpen={mobileMenuToggled}
      />
      <NewTaskModal
        onClick={() => {
          setMobileMenu(false);
          setNewTaskModal(!newTaskModalToggled);
        }}
        isNewTaskOpen={newTaskModalToggled}>
        New Task 📝
      </NewTaskModal>
    </StyledNav>
  );
}

export default Navbar;
