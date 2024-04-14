import { INCREMENT,CLEAR_ARRAY,DECREMENT,SET_ARRAY } from './reducer';

export const incrementAction = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decrementAction = () => ({ type: DECREMENT });

export const fetchArrayAction = (payload) => ({
  type: SET_ARRAY,
  payload: payload,
});

export const clearArrayAction = () => ({ type: CLEAR_ARRAY });
