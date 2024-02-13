import { createReducer } from '@reduxjs/toolkit';
import { addRoom, editRoom, removeRoom, addMessage } from './roomActions';
import { IRoom } from '../shared/types/room';
import { initialRooms } from '../shared/util/initialRooms';
import { generateRandomCode } from '../shared/functions/generateRoomCode';

const initialState: IRoom[] = initialRooms;

const roomReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addRoom, (state, action) => {
      const existingCodes = state.map((room) => room.roomCode);

      state.push({
        ...action.payload,
        id: state.length + 1,
        roomCode: generateRandomCode(existingCodes),
      });
    })
    .addCase(editRoom, (state, action) => {
      const index = state.findIndex((room) => room.id === action.payload.id);
      if (index !== -1) {
        const existingCodes = state
          .filter((room, i) => i !== index)
          .map((room) => room.roomCode);

        state[index] = {
          ...action.payload,
          roomCode: generateRandomCode(existingCodes),
        };
      }
    })
    .addCase(removeRoom, (state, action) => {
      return state.filter((room) => room.id !== action.payload);
    })
    .addCase(addMessage, (state, action) => {
      const { roomId, message, roomCode } = action.payload;
      const index = state.findIndex(
        (room) => room.id === roomId || room.roomCode === roomCode
      );
      if (index !== -1) {
        state[index] = {
          ...state[index],
          messages: [...state[index].messages, message],
        };
      }
    });
});

export default roomReducer;
