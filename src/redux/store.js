import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

export const action = createAction();
export const reducer = createReducer();

export const store = configureStore({
  reducer: {},
});