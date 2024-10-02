import styled from "styled-components";
import NavBoardTitle from "./NavBoardTitle.styled/";
import { ChevronDownIcon, MobileLogo } from "../..";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { memo } from "react";
//------------------------------------------------------------------->

export const StyledNavBoardItem = styled.div`
  /* here we used !important because in Navbar.styled is the parent and override the gap */
  gap: 0.5rem !important;
  height: 3rem;
  @media (min-width: 769px) {
    & img {
      display: none;
    }
  }
  @media (max-width: 320px) {
    /*IPhone portrait and smaller. You can probably stop on 320px*/
    gap: 0.3rem !important;
  }
`;

//------------------------------------------------------------------->

const NavBoardItem = memo(function NavBoardItem({ onClick, isMobileMenuOpen }) {
  const boardsSlice = useSelector((store) => store.boards);
  const boardName = boardsSlice.boards.at(boardsSlice.selectedBoardIndex)?.name;
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(
      boardName.split("").map((letter) => ({
        letter: letter,
        letterId: uuid(),
      }))
    );
  }, [boardName]);

  return (
    <StyledNavBoardItem>
      <MobileLogo isMobileMenutoggled={isMobileMenuOpen} onClick={onClick} />
      <NavBoardTitle>
        {letters.map((le, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                type: "spring",
                duration: 0.3,
                delay: 0.05 * index,
              },
            }}
            key={le.letterId}>
            {le.letter}
          </motion.span>
        ))}
      </NavBoardTitle>
      <ChevronDownIcon
        isMobileMenutoggled={isMobileMenuOpen}
        onClick={onClick}
      />
    </StyledNavBoardItem>
  );
});

export default NavBoardItem;
