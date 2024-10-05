import { motion } from "framer-motion";
import { memo } from "react";
import styled, { css } from "styled-components";
import IconBoard from "../../../assets/IconBoardSVG";
import BoardName from "./BoardName";
import { HideSidebarIcon } from "../../universal/Icons.styled";
//------------------------------------------------------------------->

export const StyledBoardItemForMobile = styled.div`
  /* border: 1px solid salmon; */
  min-height: 3rem;
  width: 92%;
  padding: 0.8rem 1.7rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 5px;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: relative;

  svg {
    fill: var(--veryLightGrey);
  }
  /* Just to test the selected board */
  ${({ $active }) =>
    $active &&
    css`
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      background-color: var(--darkIndigo);
      box-shadow: 0 2px 4px rgb(0, 0, 0, 0.45),
        inset 0 0.1px 3px rgb(0, 0, 0, 0.25),
        inset -0 -0.1px 3px rgb(0, 0, 0, 0.25);
      > p {
        color: var(--white);
      }
      > svg {
        fill: var(--white);
      }
    `}
`;

//------------------------------------------------------------------->
const StyledBoardItemForSidebar = styled.div`
  min-height: 3rem;
  width: 92%;
  padding: 0.8rem 1.7rem;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  > span {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    /* mix-blend-mode: exclusion; */
    > svg {
      fill: ${({ $active }) =>
        $active ? css`var(--white)` : css`var(--veryLightGrey)`};
    }
    > p {
      color: ${({ $active }) =>
        $active ? css`var(--white)` : css`var(--veryLightGrey)`};
    }
  }
`;

const StyledBoardName = styled(BoardName)`
  position: relative;
`;
const StyledActiveTab = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.7rem;
  gap: 0.8rem;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: var(--darkIndigo);
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.45), inset 0 0.1px 3px rgb(0, 0, 0, 0.25),
    inset -0 -0.1px 3px rgb(0, 0, 0, 0.25);
`;
//------------------------------------------------------------------->

const MotionActiveTab = motion.create(StyledActiveTab);
const BoardItem = memo(function BoardItem({
  active,
  onClick,
  boardName,
  type,
  children,
}) {
  return (
    <>
      {type === "mobileMenu" ? (
        <StyledBoardItemForMobile onClick={onClick} $active={active}>
          {children}
        </StyledBoardItemForMobile>
      ) : (
        <StyledBoardItemForSidebar onClick={onClick} $active={active}>
          {active && (
            <MotionActiveTab
              layoutId="activeTab"
              transition={{
                type: "spring",
                duration: 0.2,
                stiffness: 150,
                mass: 0.3,
              }}
            />
          )}
          <span>
            {type === "hideSidebar" ? <HideSidebarIcon /> : <IconBoard />}
            <StyledBoardName boardName={boardName} />
          </span>
        </StyledBoardItemForSidebar>
      )}
    </>
  );
});

export default BoardItem;
