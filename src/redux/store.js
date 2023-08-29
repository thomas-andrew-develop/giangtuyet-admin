import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './blogs';

const store = configureStore({
  reducer: {
    blogs: blogsSlice.reducer,
  },
});

export default store;
