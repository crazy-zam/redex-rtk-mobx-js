export enum ActionsEnum {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  SET_ARRAY = 'SET_ARRAY',
  CLEAR_ARRAY = 'CLEAR_ARRAY',
}

// export const INCREMENT = 'INCREMENT',               В JavaScript нет поддержки enum,
// export const DECREMENT = 'DECREMENT',               по этому экшены создаются в виде констант
// export const SET_ARRAY = 'SET_ARRAY',
// export const CLEAR_ARRAY = 'CLEAR_ARRAY',

interface IIncrementAction {
  type: ActionsEnum.INCREMENT;
  payload: number;
}
interface IDecrementAction {
  type: ActionsEnum.DECREMENT;
}
export interface IFetchAction {
  type: ActionsEnum.SET_ARRAY;
  payload: [];
}
interface IClearAction {
  type: ActionsEnum.CLEAR_ARRAY;
}
export type ReduxAction =
  | IIncrementAction
  | IDecrementAction
  | IFetchAction
  | IClearAction;

const defaultState = {
  counter: 0,
  array: [],
};
const reduxReducer = (state = defaultState, action: ReduxAction) => {
  switch (action.type) {
    case ActionsEnum.INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case ActionsEnum.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ActionsEnum.SET_ARRAY:
      return { ...state, array: action.payload };
    case ActionsEnum.CLEAR_ARRAY:
      return { ...state, array: [] };
    default:
      return state;
  }
};
export default reduxReducer;
