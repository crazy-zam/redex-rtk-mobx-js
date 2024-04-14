export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_ARRAY = 'SET_ARRAY';
export const CLEAR_ARRAY = 'CLEAR_ARRAY';

const defaultState = {
  counter: 0,
  array: [],
};
const reduxReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case SET_ARRAY:
      return { ...state, array: action.payload };
    case CLEAR_ARRAY:
      return { ...state, array: [] };
    default:
      return state;
  }
};
export default reduxReducer;
