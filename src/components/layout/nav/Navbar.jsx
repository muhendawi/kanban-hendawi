import styled from "styled-components";
import { Button } from "../..";
import { VerticalEllipsis } from "../..";
import { FaPlus } from "react-icons/fa6";
import NavBoardItem from "./NavBoardItem";
import MobileMenu from "./MobileMenu";
import NewBoardModal from "../../modals/NewBoardModal";
import { memo, useState } from "react";
import DeleteBoardMenu from "../../modals/DeleteBoardMenu";
//------------------------------------------------------------------->

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.4rem 1rem 1.5rem;
  background-color: var(--white);
  // laid out the NavBoardTitle and its adjacent div
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
const MobileNavBtn = styled(Button)`
  padding: 0.6rem 1rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

// nav button - desktop verison
const DesktopNavBtn = styled(Button)`
  @media (max-width: 768px) {
    display: none;
    transition: ease 0.3s;
  }
`;
//------------------------------------------------------------------->

const Navbar = memo(function Navbar() {
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
      <div>
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
      </div>
      <MobileMenu
        onClick={() => {
          setMobileMenu(!mobileMenuToggled);
        }}
        isMobileMenuOpen={mobileMenuToggled}
      />

      {/* <NewBoardModal
        onClose={() => {
          setNewTaskModal(!newTaskModalToggled);
        }}
        isModalOpen={newTaskModalToggled}>
        New Task 📝
      </NewBoardModal> */}
      <DeleteBoardMenu
        deleteBoardOpened={deleteBoardOpened}
        setDeleteBoard={setDeleteBoard}
      />
    </StyledNav>
  );
});

export default Navbar;
