import reduxReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({ reducer: reduxReducer });

export type RootState = ReturnType<typeof reduxReducer>;

export type AppDispatch = typeof store.dispatch;
