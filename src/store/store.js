import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./board/board.slice";

const store = configureStore({
  reducer: {
    boards: boardSlice,
  },
});

export default store;
