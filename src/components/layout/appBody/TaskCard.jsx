import { StyledTaskCard } from "./TaskCard.styled";

function TaskCard({ title, completedSubTasks, totalSubTasks }) {
  return (
    <StyledTaskCard>
      <h4>{title}</h4>
      <p>
        {completedSubTasks || 0} of {totalSubTasks || 0} subtasks
      </p>
    </StyledTaskCard>
  );
}

export default TaskCard;
