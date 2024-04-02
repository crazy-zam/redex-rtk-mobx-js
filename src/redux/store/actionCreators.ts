import { ActionsEnum, IFetchAction } from './reducer';

export const incrementAction = (payload: number) => ({
  type: ActionsEnum.INCREMENT,
  payload,
});

export const decrementAction = () => ({ type: ActionsEnum.DECREMENT });

export const fetchArrayAction = (payload: []): IFetchAction => ({
  type: ActionsEnum.SET_ARRAY,
  payload: payload,
});

export const clearArrayAction = () => ({ type: ActionsEnum.CLEAR_ARRAY });
