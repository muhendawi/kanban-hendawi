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
console.log(initialState.selectedBoardIndex);
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
      // state.boards[state.selectedBoardIndex].columns = [
      //   ...state.boards[state.selectedBoardIndex].columns,
      //   state.boards[state.selectedBoardIndex].columns
      //     .filter((col, index) => index === 0)
      //     .filter(() => {}),
      // ];
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
} = boardsSlice.actions;
