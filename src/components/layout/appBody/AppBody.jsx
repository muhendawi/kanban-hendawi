import StyledAppBody from "./AppBody.styled";
import NoData from "../../../pages/NoData";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import BoardColumn from "./BoardColumn";
import Modal from "../../universal/Modal-v1";
import boardSlice, {
  toggleNewBoardModal,
} from "../../../store/board/board.slice";
import { useDispatch } from "react-redux";

function AppBody() {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();

  return (
    <StyledAppBody>
      {boardsSlice.boards
        .at(boardsSlice.selectedBoardIndex)
        .columns.map((column, index) => (
          <BoardColumn
            key={index}
            columnName={column.name}
            tasksNo={column.tasks.length}>
            {column.tasks.map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                completedSubTasks={0}
                totalSubTasks={task.subtasks.length}
              />
            ))}
          </BoardColumn>
        ))}
      <BoardColumn onClick={() => dispatch(toggleNewBoardModal())}>
        <p>+ New Column</p>
      </BoardColumn>
    </StyledAppBody>
  );
}

export default AppBody;
