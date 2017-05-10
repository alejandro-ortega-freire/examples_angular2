import { Action } from '@ngrx/store';
import { Counter } from '../interfaces/counter';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET_COUNT = 'RESET_COUNT';

const INITIAL_STATE =  { cantidad: 0 };

export function CounterReducer(state = INITIAL_STATE, action: Action): Counter {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { cantidad : state.cantidad + 1 });

    case DECREMENT:
      return Object.assign({}, state, { cantidad : state.cantidad - 1 });

    case RESET_COUNT:
      return Object.assign({}, state, INITIAL_STATE);

    default:
      return state;
  }
}


