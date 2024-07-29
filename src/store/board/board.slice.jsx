import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = {
  boards: data.boards,
  isSidebarVisible: false,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
  },
});
console.log(initialState.boards);

export default boardsSlice.reducer;
export const { toggleSidebar } = boardsSlice.actions;
