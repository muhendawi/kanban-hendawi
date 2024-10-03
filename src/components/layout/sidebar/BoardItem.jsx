import { motion } from "framer-motion";
import { memo } from "react";
import styled, { css } from "styled-components";
import IconBoard from "../../../assets/IconBoardSVG";
import BoardName from "./BoardName";
import IconHideSidebar from "../../../assets/IconHideSidebarSVG";
import { HideSidebarIcon } from "../../universal/Icons.styled";
//------------------------------------------------------------------->

export const StyledBoardItem = styled.div`
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
  /* &:hover {
    background-color: var(--hoverGrey);
    transition: ease-in 0.1s;
    box-shadow: 0 2px 4px rgb(0, 0, 0, 0.45),
      inset 0 0.1px 3px rgb(0, 0, 0, 0.25),
      inset -0 -0.1px 3px rgb(0, 0, 0, 0.25);
    > p {
      color: var(--darkIndigo);
    }
    > svg {
      fill: var(--darkIndigo);
    }
  } */
  /* Just to test the selected board */
  > div {
  }
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
const ActiveBackdrop = styled.div`
  height: 3rem;
  width: 92%;
  gap: 0.8rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.7rem;

  /* position: "absolute";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  /* margin-bottom: 5px; */
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: var(--darkIndigo);
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.45), inset 0 0.1px 3px rgb(0, 0, 0, 0.25),
    inset -0 -0.1px 3px rgb(0, 0, 0, 0.25);

  > p {
    color: var(--white);
  }
  > svg {
    fill: var(--white);
  }
`;
//------------------------------------------------------------------->
const StyledBoardItem2 = styled.div`
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

  /* > p {
    color: var(--white);
  }
  > svg {
    fill: var(--white);
  } */
`;
//------------------------------------------------------------------->
// const MotionBoardItem = motion.create(StyledBoardItem);
// const MotionActiveBackdrop = motion.create(ActiveBackdrop);
// const MotionBackdropDiv = motion.create(BackdropDiv);
// const BoardItem = memo(function BoardItem({
//   active,
//   onClick,
//   boardName,
//   type,
// }) {
//   return (
//     <>
//       <MotionBoardItem $active={active} onClick={onClick}>
//         <motion.div layoutId="boardItem">
//           {type === "hideSidebar" ? <IconHideSidebar /> : <IconBoard />}
//           <BoardName boardName={boardName} />
//         </motion.div>
//       </MotionBoardItem>
//     </>
//   );
//   // return (
//   //   <>
//   //     {active ? (
//   //       <MotionActiveBackdrop layoutId="activeBoardItem" onClick={onClick}>
//   //         <IconBoard />
//   //         <BoardName boardName={boardName} />
//   //       </MotionActiveBackdrop>
//   //     ) : (
//   //       <MotionBoardItem layoutId={boardName} onClick={onClick}>
//   //         {type === "hideSidebar" ? <IconHideSidebar /> : <IconBoard />}
//   //         <BoardName boardName={boardName} />
//   //       </MotionBoardItem>
//   //     )}
//   //   </>
//   // );
// });

// export default BoardItem;
const MotionActiveTab = motion.create(StyledActiveTab);
const BoardItem = memo(function BoardItem({
  active,
  onClick,
  boardName,
  type,
}) {
  return (
    <StyledBoardItem2 onClick={onClick} $active={active}>
      {active && (
        <MotionActiveTab
          layoutId="activeTab"
          transition={{
            type: "spring",
            duration: 0.3,
            stiffness: 230,
            mass: 0.3,
          }}
        />
      )}
      <span>
        {type === "hideSidebar" ? <HideSidebarIcon /> : <IconBoard />}
        <StyledBoardName boardName={boardName} />
      </span>
    </StyledBoardItem2>
  );
});

export default BoardItem;
