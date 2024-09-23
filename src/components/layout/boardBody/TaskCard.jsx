import { motion } from "framer-motion";
import styled from "styled-components";
//------------------------------------------------------------------->

export const StyledTaskCard = styled.div`
  width: 17.5rem;
  min-height: 5.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(54, 78, 126, 0.102);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem;
  z-index: 1;
  cursor: pointer;
  overflow: auto;

  transition: font-color, color 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  > h4 {
    font-size: var(--fsM);
    line-height: var(--lhM);
    margin: 0;
    padding: 0;
    /* transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55); */
  }
  > p {
    margin: 0;
    font-size: var(--fsS);
    /* line-height: var(--lhM); */
    font-weight: 700;
    color: var(--veryLightGrey);
    /* transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55); */
  }
  &:hover {
    box-shadow: 0 4px 7px rgb(99, 95, 199, 0.5);
    > h4 {
      color: var(--darkIndigo);
    }
    > p {
      color: rgb(99, 95, 199, 0.7);
    }
  }
  &:active {
    transform: scale(0.96);
  }
`;
//------------------------------------------------------------------->
const MotionTaskcard = motion.create(StyledTaskCard);
function TaskCard({ title, completedSubTasks, totalSubTasks, index }) {
  return (
    <MotionTaskcard
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.05 * index }}>
      <h4>{title}</h4>
      <p>
        {completedSubTasks || 0} of {totalSubTasks || 0} subtasks
      </p>
    </MotionTaskcard>
  );
}

export default TaskCard;