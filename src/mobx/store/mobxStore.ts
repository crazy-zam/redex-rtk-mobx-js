import axios from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

class mobxStore {
  counter = 0;
  array: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  increment = (payload: number) => {
    this.counter = this.counter + payload;
  };
  decrement = () => {
    this.counter = this.counter - 1;
  };
  fetchArray = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    const responseArray: [] = response.data.slice(0, 10);
    runInAction(() => {
      this.array.push(...responseArray);
    });
  };
  clearArray = () => {
    this.array = [];
  };
}

export default new mobxStore();
