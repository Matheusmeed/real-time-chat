import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './roomReducer';

const store = configureStore({
  reducer: {
    rooms: roomReducer,
  },
});

export default store;
