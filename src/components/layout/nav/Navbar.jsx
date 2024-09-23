import styled from "styled-components";
import { Button } from "../..";
import { VerticalEllipsis } from "../..";
import { FaPlus } from "react-icons/fa6";
import NavBoardItem from "./NavBoardItem";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";
import { memo, useState } from "react";
import SubMenu from "../../modals/SubMenu";
import NewBoardModal from "../../modals/NewBoardModal";
import { useDispatch } from "react-redux";
import { deleteBoard } from "../../../store/board/board.slice";
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

const Navbar = memo(function Navbar({ isNewBoardModal }) {
  const [newTaskModalToggled, setNewTaskModal] = useState(false);
  const [mobileMenuToggled, setMobileMenu] = useState(false);
  const [toggleSubMenu, setToggleSumMenu] = useState(false);
  const [isNewBoardModalOpen, setIsNewBoardModalOpen] = useState(false);
  const dispatch = useDispatch();

  // delete board handler function
  function handleDeleteBoard() {
    dispatch(deleteBoard());
    setToggleSumMenu(!toggleSubMenu);
  }
  return (
    <>
      <StyledNav>
        <NavBoardItem
          onClick={() => {
            setToggleSumMenu(false);
            setMobileMenu(!mobileMenuToggled);
          }}
          isMobileMenuOpen={mobileMenuToggled}
        />
        <div>
          <DesktopNavBtn
            $variation="primary"
            $size="medium"
            onClick={() => {
              setToggleSumMenu(false);
              setNewTaskModal(!newTaskModalToggled);
            }}>
            + Add New Task
          </DesktopNavBtn>
          <MobileNavBtn
            $variation="primary"
            $size="small"
            onClick={() => {
              setMobileMenu(false);
              setToggleSumMenu(false);
              setNewTaskModal(!newTaskModalToggled);
            }}>
            <FaPlus size={15} />
          </MobileNavBtn>
          <VerticalEllipsis
            toggleMenu={() => setToggleSumMenu(!toggleSubMenu)}
          />
        </div>
        {/* the Mobile menu conditional rendering */}
        <AnimatePresence>
          {mobileMenuToggled && (
            <MobileMenu
              onCloseMobileMenu={() => {
                setMobileMenu(!mobileMenuToggled);
              }}
              isMobileMenuOpen={mobileMenuToggled}
              onSetNewBoardModal={() =>
                setIsNewBoardModalOpen(!isNewBoardModal)
              }
            />
          )}
        </AnimatePresence>
        {/* The SubMenu conditional rendering */}
        <AnimatePresence>
          {toggleSubMenu && (
            <SubMenu
              onToggleSubmenu={() => setToggleSumMenu(!toggleSubMenu)}
              firstOption="Edit Board"
              secondOption="Delete Board"
              onEdit={null}
              onDelete={handleDeleteBoard}
            />
          )}
        </AnimatePresence>
      </StyledNav>
      {/* The NewBoardModal conditional rendering */}
      <AnimatePresence>
        {isNewBoardModalOpen && (
          <NewBoardModal
            onClose={() => setIsNewBoardModalOpen(!isNewBoardModalOpen)}
            isModalOpen={isNewBoardModalOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;
