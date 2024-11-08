import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = {
  boards: data.boards,
  isDarkThemeOn: false,
  isSidebarHidden: false,
  selectedBoardIndex: 0,
  selectedTask: 0,
  isNewBoardModalOpen: false,
  // isNewTaskModalOpen: false,
  // isTaskModalOpen: false,
  // isMobileMenuOpen: false,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setSelectedBoardIndex(state, action) {
      state.selectedBoardIndex = action.payload;
    },
    addNewBoard: {
      prepare(boardName, columns) {
        return { payload: { boardName, columns } };
      },
      reducer(state, action) {
        state.boards.push({
          name: action.payload.boardName,
          columns: action.payload.columns,
        });
      },
    },
    editBoard: {
      prepare(boardName, columns) {
        return { payload: { boardName, columns } };
      },
      reducer(state, action) {
        const currentBoard = state.boards[state.selectedBoardIndex];
        currentBoard.name = action.payload.boardName;
        currentBoard.columns = action.payload.columns;
      },
    },
    deleteBoard(state) {
      state.boards = state.boards.filter(
        (_, index) => index !== state.selectedBoardIndex
      );
      state.selectedBoardIndex = 0;
    },
    deleteTask(state, action) {
      const { columnIndex, taskIndex } = action.payload;
      const board = state.boards.find(
        (_, index) => index === state.selectedBoardIndex
      );
      if (!board) return;
      const column = board.columns.find((_, index) => index === columnIndex);
      if (!column) return;
      column.tasks = column.tasks.filter((_, index) => index !== taskIndex);
    },
    checkSubtask(state, action) {
      const { columnIndex, taskIndex, subtaskIndex } = action.payload;
      const board = state.boards.find(
        (_, index) => index === state.selectedBoardIndex
      );
      if (!board) return;
      const column = board.columns.find((_, index) => index === columnIndex);
      if (!column) return;
      const task = column.tasks.find((_, index) => index === taskIndex);
      if (!task) return;
      task.subtasks[subtaskIndex].isCompleted =
        !task.subtasks[subtaskIndex].isCompleted;
    },
    moveTask(state, action) {
      const { columnIndex, task, taskIndex, selectedOption } = action.payload;
      // removing the task from the current column
      const board = state.boards[state.selectedBoardIndex];
      if (!board) return;
      const column = board.columns[columnIndex];
      if (!column) return;
      // removing the task from its original position first.
      column.tasks = column.tasks.filter((_, index) => index !== taskIndex);
      // adding the task to the new column.
      const newColumn = board.columns.find(
        (col) => col.name === selectedOption
      );
      if (!newColumn) return;
      // const task = column.tasks.find((_, index) => index === taskIndex);
      // if (!task) return;
      newColumn.tasks.push(task);
    },
    addNewTask: {
      prepare(taskId, taskName, description, status, subtasks) {
        return { payload: { taskId, taskName, description, status, subtasks } };
      },
      reducer(state, action) {
        const currentColumn = state.boards[
          state.selectedBoardIndex
        ].columns.find((col) => col.name === action.payload.status);
        currentColumn?.tasks.push({
          taskId: action.payload.taskId,
          title: action.payload.taskName,
          description: action.payload.description,
          status: action.payload.status,
          subtasks: action.payload.subtasks,
        });
      },
    },
    editTask(state, action) {
      const {
        task,
        columnIndex,
        taskName,
        description,
        selectedOption,
        subtasks,
      } = action.payload;
      const column =
        state.boards[state.selectedBoardIndex].columns[columnIndex];
      if (!column) return;
      const currentTask = column.tasks.find((t) => t.taskId === task.taskId);
      if (!currentTask) return;
      currentTask.title = taskName;
      currentTask.description = description;
      currentTask.status = selectedOption;
      currentTask.subtasks = subtasks;

      if (column.name !== selectedOption) {
        column.tasks = column.tasks.filter((t) => t.taskId !== task.taskId);
        const newColumn = state.boards[state.selectedBoardIndex].columns.find(
          (col) => col.name === selectedOption
        );
        if (!newColumn) return;
        // const task = column.tasks.find((_, index) => index === taskIndex);
        // if (!task) return;
        newColumn.tasks.push(currentTask);
      }
    },

    toggleDarkTheme(state) {
      state.isDarkThemeOn = !state.isDarkThemeOn;
    },
    moveDraggingCard(state, action) {
      const {
        targetCardIndex,
        targetColumnIndex,
        draggringCard,
        currentColumnIndex,
      } = action.payload;
      // removing the task from the current column
      const board = state.boards[state.selectedBoardIndex];
      if (!board) return;
      const currentColumn = board.columns[currentColumnIndex];
      if (!currentColumn) return;
      // removing the task from its original position first.
      currentColumn.tasks = currentColumn.tasks.filter(
        (task) => task.taskId !== draggringCard.taskId
      );
      // adding the task to the new column.
      const targetColumn = board.columns[targetColumnIndex];
      if (!targetColumn) return;
      // const task = column.tasks.find((_, index) => index === taskIndex);
      // if (!task) return;
      // if (currentColumnIndex === targetColumnIndex) {
      //   targetColumn.tasks.splice(targetCardIndex, 0, draggringCard);
      // } else {
      //   targetColumn.tasks.splice(targetCardIndex + 1, 0, draggringCard);
      // }
      targetColumn.tasks.splice(targetCardIndex, 0, draggringCard);
    },
  },
});

export default boardsSlice.reducer;
export const {
  setSelectedBoardIndex,
  toggleDarkTheme,
  addNewBoard,
  editBoard,
  deleteBoard,
  deleteTask,
  checkSubtask,
  moveTask,
  addNewTask,
  editTask,
  moveDraggingCard,
} = boardsSlice.actions;
