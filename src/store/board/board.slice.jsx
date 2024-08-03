import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = {
  boards: data.boards,
  isSidebarHidden: false,
  selectedBoardIndex: 0,
  selectedTask: 0,
  isNewBoardModalOpen: false,
  isNewTaskModalOpen: false,
  isTaskModalOpen: false,
  isMobileMenuOpen: false,
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
      state.isNewBoardModalOpen = !state.isNewBoardModalOpen;
      // to close the mobile menu when newboard modal is opened
      state.isMobileMenuOpen = false;
    },
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export default boardsSlice.reducer;
export const {
  toggleSidebar,
  setSelectedBoardIndex,
  toggleNewBoardModal,
  toggleMobileMenu,
} = boardsSlice.actions;
