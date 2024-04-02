import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from './reduxPage.module.css';
import {
  decrementAction,
  incrementAction,
  clearArrayAction,
} from '../store/actionCreators';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchArray } from '../asyncActions/asyncAction';
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const ReduxPage = () => {
  const dispatch = useAppDispatch();
  const reduxStore = useTypedSelector((state) => state);
  return (
    <div className={styles.page}>
      <div>Count {reduxStore.counter}</div>
      <div>
        <button onClick={() => dispatch(incrementAction(2))}>increment</button>
        <button onClick={() => dispatch(decrementAction())}>decrement</button>
      </div>

      <br />
      <div>
        <button onClick={() => dispatch(fetchArray())}>FetchArray</button>
        <button onClick={() => dispatch(clearArrayAction())}>clearArray</button>
      </div>

      {reduxStore.array.map((todo: ITodo) => {
        return <div>{todo.title}</div>;
      })}
    </div>
  );
};

export default ReduxPage;
