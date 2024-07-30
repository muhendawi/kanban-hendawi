import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = {
  boards: data.boards,
  isSidebarVisible: false,
  selectedItem: 0,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
  },
});

console.log(initialState.boards);

export default boardsSlice.reducer;
export const { toggleSidebar, setSelectedItem } = boardsSlice.actions;
