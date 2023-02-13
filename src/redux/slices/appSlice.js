import { createSlice } from '@reduxjs/toolkit/';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isAnimating: false,
    isSidebarOpen: true,
  },
  reducers: {
    setIsAnimating: (state, action) => {
      state.isAnimating = action.payload;
    },
    toggleSidebar: (state, action) => {
      if (action.payload === false) {
        state.isSidebarOpen = false;
        return;
      }

      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setIsAnimating, toggleSidebar } = appSlice.actions;

export default appSlice.reducer;
