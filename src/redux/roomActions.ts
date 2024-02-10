import { createAction } from '@reduxjs/toolkit';
import { IRoom } from '../shared/types/room';

export const addRoom = createAction<IRoom>('ADD_ROOM');
export const editRoom = createAction<IRoom>('EDIT_ROOM');
export const removeRoom = createAction<number>('REMOVE_ROOM');
