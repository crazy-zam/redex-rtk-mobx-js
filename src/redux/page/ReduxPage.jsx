import { useDispatch, useSelector } from 'react-redux';
import styles from './reduxPage.module.css';
import {
  decrementAction,
  incrementAction,
  clearArrayAction,
} from '../store/actionCreators';
import { fetchArray } from '../asyncActions/asyncAction';

const ReduxPage = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);
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

      {reduxStore.array.map((todo, ind) => {
        return <div key={ind}>{todo.title}</div>;
      })}
    </div>
  );
};

export default ReduxPage;
