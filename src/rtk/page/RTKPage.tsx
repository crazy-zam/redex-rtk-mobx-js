import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from './rtkPage.module.css';
import { increment, decrement, clearArray, fetchTodos } from '../store/slice';

import { useAppDispatch } from '../hooks/useAppDispatch';
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const RTKPage = () => {
  const dispatch = useAppDispatch();
  const reduxStore = useTypedSelector((state) => state);
  return (
    <div className={styles.page}>
      <div>Count {reduxStore.counter}</div>
      <div>
        <button onClick={() => dispatch(increment(2))}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>

      <br />
      <div>
        <button onClick={() => dispatch(fetchTodos())}>FetchArray</button>
        <button onClick={() => dispatch(clearArray())}>clearArray</button>
      </div>

      {reduxStore.array.map((todo: ITodo) => {
        return <div>{todo.title}</div>;
      })}
    </div>
  );
};

export default RTKPage;
