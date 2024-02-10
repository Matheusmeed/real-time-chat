import { createReducer } from '@reduxjs/toolkit';
import { addRoom, editRoom, removeRoom } from './roomActions';
import { IRoom } from '../shared/types/room';
import { initialRooms } from '../shared/util/initialRooms';

const initialState: IRoom[] = initialRooms;

const roomReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addRoom, (state, action) => {
      state.push(action.payload);
    })
    .addCase(editRoom, (state, action) => {
      const index = state.findIndex((room) => room.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    })
    .addCase(removeRoom, (state, action) => {
      return state.filter((room) => room.id !== action.payload);
    });
});

export default roomReducer;
