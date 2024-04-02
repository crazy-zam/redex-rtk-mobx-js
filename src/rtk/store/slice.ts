import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('rtk/fetchTodos', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
  );
  return response.data.slice(0, 10);
});

const postsSlice = createSlice({
  name: 'rtk',
  initialState: {
    counter: 0,
    array: [],
  },
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    clearArray(state) {
      state.array = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.array = payload;
    });
  },
});

const { actions, reducer } = postsSlice;

export const { increment, decrement, clearArray } = actions;

export default reducer;
