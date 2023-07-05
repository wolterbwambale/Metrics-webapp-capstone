import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from './home/HomePageSlice';

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
});

export default store;
