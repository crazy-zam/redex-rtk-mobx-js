import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice';

const rtkStore = configureStore({
  reducer: reducer,
});

export default rtkStore;

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof rtkStore.dispatch;
