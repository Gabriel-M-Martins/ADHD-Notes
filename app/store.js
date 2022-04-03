import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import dailyTaskReducer from "./features/dailyTask/dailyTaskSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    dailyTask: dailyTaskReducer,
  },
});
