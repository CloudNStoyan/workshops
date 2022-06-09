import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './tasksSlice';
import { humanSlice } from './humansSlice';

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans: humanSlice.reducer
  }
});
