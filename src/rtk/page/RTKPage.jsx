import { useDispatch, useSelector } from 'react-redux';
import styles from './rtkPage.module.css';
import { increment, decrement, clearArray, fetchTodos } from '../store/slice';

const RTKPage = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);
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

      {reduxStore.array.map((todo, ind) => {
        return <div key={ind}>{todo.title}</div>;
      })}
    </div>
  );
};

export default RTKPage;
