import { createSlice } from "@reduxjs/toolkit";

export const dailyTaskSlice = createSlice({
  name: "dailyTask",
  initialState: {
    dailyTasks: [],
  },
  reducers: {
    addDailyTask: (state, action) => {
      state.dailyTasks.push(action.payload);
    },
    removeDailyTask: (state, action) => {
      state.dailyTasks.splice(action.payload);
    },
  },
});

export const { addDailyTask, removeDailyTask } = dailyTaskSlice.actions;

export default dailyTaskSlice.reducer;
