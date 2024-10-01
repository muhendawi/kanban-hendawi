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
import DeleteModal from "../../modals/DeleteModal";
import MainLogo from "../../universal/MainLogo";
import NewTaskModal from "../../modals/NewTaskModal";
//------------------------------------------------------------------->

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.4rem 1rem 1.5rem;
  background-color: var(--white);
  /* box-shadow: 0 2px 10px rgb(0, 0, 0, 0.45), inset 0 -1px 3px rgb(0, 0, 0, 0.45); */
  /* box-shadow: 0 3px 7px rgb(0, 0, 0, 0.45), inset 0 1px 3px rgb(0, 0, 0, 0.25),
    inset -0 -1px 3px rgb(0, 0, 0, 0.25); */
  /* box-shadow: 0 1px 10px rgb(0, 0, 0, 0.45),
    inset 0 -1px 10px rgb(0, 0, 0, 0.45); */
  box-shadow: 0.1px 0 2px rgb(0, 0, 0, 0.25),
    inset 0 -0.1px 2px rgb(0, 0, 0, 0.25);
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
const NewTaskBtnMobile = styled(Button)`
  padding: 0.6rem 1rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

// nav button - desktop verison
const NewTaskBtnDesktop = styled(Button)`
  @media (max-width: 768px) {
    display: none;
    transition: ease 0.3s;
  }
`;
//------------------------------------------------------------------->

const Navbar = memo(function Navbar({ isNewBoardModal }) {
  const [toggleNewTaskModal, setToggleNewTaskModal] = useState(false);
  const [mobileMenuToggled, setMobileMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);
  const [isNewBoardModalOpen, setIsNewBoardModalOpen] = useState(false);
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const dispatch = useDispatch();

  // delete board handler function
  function handleDeleteBoard() {
    dispatch(deleteBoard());
    setToggleDeleteModal(!toggleDeleteModal);
  }
  return (
    <>
      <MainLogo />
      <StyledNav>
        <NavBoardItem
          onClick={() => {
            setToggleSubMenu(false);
            setMobileMenu(!mobileMenuToggled);
          }}
          isMobileMenuOpen={mobileMenuToggled}
        />
        <div>
          <NewTaskBtnDesktop
            $variation="primary"
            $size="medium"
            onClick={() => {
              setToggleSubMenu(false);
              setToggleNewTaskModal(!toggleNewTaskModal);
            }}>
            + Add New Task
          </NewTaskBtnDesktop>
          <NewTaskBtnMobile
            $variation="primary"
            $size="small"
            onClick={() => {
              setMobileMenu(false);
              setToggleSubMenu(false);
              setToggleNewTaskModal(!toggleNewTaskModal);
            }}>
            <FaPlus size={15} />
          </NewTaskBtnMobile>
          <VerticalEllipsis
            toggleMenu={() => {
              if (mobileMenuToggled) return;
              setToggleSubMenu(!toggleSubMenu);
            }}
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
              onToggleSubmenu={() => setToggleSubMenu(!toggleSubMenu)}
              firstOption="Edit Board"
              secondOption="Delete Board"
              onEdit={null}
              onDelete={() => {
                setToggleDeleteModal(!toggleDeleteModal);
                setToggleSubMenu(!toggleSubMenu);
              }}
            />
          )}
        </AnimatePresence>
      </StyledNav>
      <AnimatePresence>
        {toggleDeleteModal && (
          <DeleteModal
            modalTitle="board"
            onDelete={handleDeleteBoard}
            onCancel={() => setToggleDeleteModal(!toggleDeleteModal)}>
            Are you sure you want to delete this board? This action will remove
            all columns and tasks and cannot be reversed.
          </DeleteModal>
        )}
      </AnimatePresence>
      {/* The NewBoardModal conditional rendering */}
      <AnimatePresence>
        {toggleNewTaskModal && (
          <NewTaskModal
            onClose={() => setToggleNewTaskModal(!toggleNewTaskModal)}
            isModalOpen={toggleNewTaskModal}
          />
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;
