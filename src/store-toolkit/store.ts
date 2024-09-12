import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import todoSlice from "./slices/todo-slice";

const store = configureStore({
   reducer: {
      /** Đây là nơi import các slices */
      counterState: counterSlice,
      todoState: todoSlice,
   },
});

export default store;
