import { Dispatch } from 'react';
import { IFetchAction } from '../store/reducer';
import { fetchArrayAction } from '../store/actionCreators';
import axios from 'axios';

export const fetchArray = () => {
  return async (dispatch: Dispatch<IFetchAction>) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    const responseArray: [] = response.data.slice(0, 10);

    dispatch(fetchArrayAction(responseArray));
  };
};
