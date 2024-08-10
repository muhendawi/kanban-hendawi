import { StyledNav, DesktopNavBtn, MobileNavBtn } from "./Navbar.styled";
import { VerticalEllipsis } from "../..";
import { FaPlus } from "react-icons/fa6";
import Wrapper from "../../universal/Wrapper";
import NavBoardItem from "./NavBoardItem";
import MobileMenu from "./MobileMenu";
import ExModal from "../../forms/ExModal";
import { useState } from "react";
import DeleteBoardMenu from "../../forms/DeleteBoardMenu";
//--------------------------------------------------------------->

function Navbar() {
  const [newTaskModalToggled, setNewTaskModal] = useState(false);
  const [mobileMenuToggled, setMobileMenu] = useState(false);
  const [deleteBoardOpened, setDeleteBoard] = useState(false);
  return (
    <StyledNav>
      <NavBoardItem
        onClick={() => {
          setDeleteBoard(false);
          setMobileMenu(!mobileMenuToggled);
        }}
        isMobileMenuOpen={mobileMenuToggled}
      />
      <Wrapper>
        <DesktopNavBtn
          $variation="primary"
          $size="medium"
          onClick={() => {
            setDeleteBoard(false);
            setNewTaskModal(!newTaskModalToggled);
          }}>
          + Add New Task
        </DesktopNavBtn>
        <MobileNavBtn
          $variation="primary"
          $size="small"
          onClick={() => {
            setMobileMenu(false);
            setDeleteBoard(false);
            setNewTaskModal(!newTaskModalToggled);
          }}>
          <FaPlus size={15} />
        </MobileNavBtn>
        <VerticalEllipsis
          toggleDeleteBoardMenu={() => setDeleteBoard(!deleteBoardOpened)}
        />
      </Wrapper>
      <MobileMenu
        onClick={() => {
          setMobileMenu(!mobileMenuToggled);
        }}
        isMobileMenuOpen={mobileMenuToggled}
      />

      <ExModal
        onClose={() => {
          setNewTaskModal(!newTaskModalToggled);
        }}
        isModalOpen={newTaskModalToggled}>
        New Task 📝
      </ExModal>
      <DeleteBoardMenu
        deleteBoardOpened={deleteBoardOpened}
        setDeleteBoard={setDeleteBoard}
      />
    </StyledNav>
  );
}

export default Navbar;
