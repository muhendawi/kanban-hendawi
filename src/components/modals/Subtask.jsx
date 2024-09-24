import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { checkSubtask } from "../../store/board/board.slice";
import { useSelector } from "react-redux";

//------------------------------------------------------------------->

const StyledSubtask = styled.div`
  cursor: pointer;
  background-color: var(--lightSilver);
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  &:hover {
    background-color: var(--hoverIndigoGreyLight);
  }
`;
const SubaskInput = styled.input`
  /* margin-left: 1rem; */
  cursor: pointer;
  transform: scale(1.2);
  accent-color: var(--darkIndigo);
`;
const SubtaskLabel = styled.span`
  display: inline-block;
  font-size: var(--fsS);
  font-weight: 700;
  ${({ $isChecked }) =>
    $isChecked &&
    css`
      text-decoration: line-through;
      color: var(--veryLightGrey);
    `}
`;
//------------------------------------------------------------------->

function Subtask({ subtaskLabel, columnIndex, taskIndex, subtaskIndex }) {
  const dispatch = useDispatch();
  const isCompleted = useSelector(
    (store) =>
      store.boards.boards[store.boards.selectedBoardIndex].columns[columnIndex]
        .tasks[taskIndex].subtasks[subtaskIndex]?.isCompleted
  );

  return (
    <StyledSubtask
      onClick={() => {
        dispatch(checkSubtask({ columnIndex, taskIndex, subtaskIndex }));
        // handleDispatch(subtaskIndex);
      }}>
      <SubaskInput
        type="checkbox"
        checked={isCompleted}
        onChange={() => null}
      />
      <SubtaskLabel $isChecked={isCompleted}>{subtaskLabel}</SubtaskLabel>
    </StyledSubtask>
  );
}

export default Subtask;
