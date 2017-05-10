import { DECREMENT, INCREMENT, RESET_COUNT } from '../reducers/counterReducer';

export class CounterActions {

  constructor() { }

  increment() {
    return { type: INCREMENT };
  }

  decrement() {
    return { type: DECREMENT };
  }

  resetCount() {
    return { type: RESET_COUNT };
  }
}
