import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice';

const rtkStore = configureStore({
  reducer: reducer,
});

export default rtkStore;

