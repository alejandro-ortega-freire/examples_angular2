import { Action } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

export const REGISTER = 'REGISTER';

const INITIAL_STATE: User[] =  [];

export function RegisterReducer(state = INITIAL_STATE, action: Action): User[] {
  switch (action.type) {
    case REGISTER:
      return state.concat([action.payload]);

    default:
      return state;
  }
}
