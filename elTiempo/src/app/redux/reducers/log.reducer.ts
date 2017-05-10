import { Action } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const INITIAL_STATE =  { email: '', password: '', municipeBorn: ''};

export function LogReducer(state = INITIAL_STATE, action: Action): User {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, action.payload);

    case LOGOUT:
      return Object.assign({}, state, INITIAL_STATE);

    default:
      return state;
  }
}
