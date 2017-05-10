import { Action } from '@ngrx/store';
import { User } from '../interfaces/user';

export const SAVE = 'SAVE';
export const CLEAR = 'CLEAR';

const INITIAL_STATE = { nombre: '', apellido: '' };

export function UserReducer(state = INITIAL_STATE, action: Action): User {
  switch (action.type) {
    case SAVE:
      return Object.assign({}, state, action.payload);

    case CLEAR:
      return Object.assign({}, state, INITIAL_STATE);

    default:
      return state;
  }
}
