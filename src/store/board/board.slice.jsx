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
    // toggleNewTaskModal(state) {
    //   state.isNewTaskModalOpen = !state.isNewTaskModalOpen;
    // },
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    toggleDarkTheme(state) {
      state.isDarkThemeOn = !state.isDarkThemeOn;
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
} = boardsSlice.actions;
