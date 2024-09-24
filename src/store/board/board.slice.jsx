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
    toggleSidebar(state) {
      state.isSidebarHidden = !state.isSidebarHidden;
    },
    setSelectedBoardIndex(state, action) {
      state.selectedBoardIndex = action.payload;
    },
    setSelectedTask(state, action) {
      state.selectedItem = action.payload;
    },
    toggleNewBoardModal(state) {
      // to close the mobile menu when newboard modal is opened
      state.isNewBoardModalOpen = !state.isNewBoardModalOpen;
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
    // toggleNewTaskModal(state) {
    //   state.isNewTaskModalOpen = !state.isNewTaskModalOpen;
    // },
    // toggleMobileMenu(state) {
    //   state.isMobileMenuOpen = !state.isMobileMenuOpen;
    // },
    toggleDarkTheme(state) {
      state.isDarkThemeOn = !state.isDarkThemeOn;
    },
    // addNewBoard(state, payload) {
    //   state.boards.push(payload);
    // },
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
  },
});

export default boardsSlice.reducer;
export const {
  toggleSidebar,
  setSelectedBoardIndex,
  toggleNewBoardModal,
  toggleMobileMenu,
  toggleDarkTheme,
  addNewBoard,
  deleteBoard,
  deleteTask,
  checkSubtask,
} = boardsSlice.actions;
