import { StyledNav, DesktopNavBtn, MobileNavBtn } from "./Navbar.styled";
import { VerticalEllipsis } from "../..";
import { FaPlus } from "react-icons/fa6";
import Wrapper from "../../universal/Wrapper";
import NavBoardItem from "./NavBoardItem";
import MobileMenu from "./MobileMenu";
import ExModal from "../../forms/ExModal";
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
          onClick={() => {
            setMobileMenu(false);
            setNewTaskModal(!newTaskModalToggled);
          }}>
          <FaPlus size={15} />
        </MobileNavBtn>
        <VerticalEllipsis />
      </Wrapper>
      <MobileMenu
        onClick={() => setMobileMenu(!mobileMenuToggled)}
        isMobileMenuOpen={mobileMenuToggled}
      />
      <ExModal
        onClick={() => {
          setNewTaskModal(!newTaskModalToggled);
        }}
        isModalOpen={newTaskModalToggled}>
        New Task 📝
      </ExModal>
    </StyledNav>
  );
}

export default Navbar;
