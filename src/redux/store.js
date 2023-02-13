import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/redux/slices/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
