import { createSlice } from "@reduxjs/toolkit";

export const dailyTaskSlice = createSlice({
  name: "dailyTask",
  initialState: {
    dailyTasks: [],
    lastKey: -1,
  },
  reducers: {
    addDailyTask: (state, action) => {
      state.dailyTasks.push(action.payload);
      state.lastKey += 1;
    },
    removeDailyTask: (state, action) => {
      state.dailyTasks.splice(action.payload);
      state.lastKey -= 1;
    },
  },
});

export const { addDailyTask, removeDailyTask } = dailyTaskSlice.actions;

export default dailyTaskSlice.reducer;
