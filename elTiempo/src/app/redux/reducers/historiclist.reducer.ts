import { Action } from '@ngrx/store';
import { Municipe } from '../../interfaces/municipe.interface';

export const ADD_MUNICIPE = 'ADD_MUNICIPE';
export const CLEAN_LIST = 'CLEAN_LIST';

const INITIAL_STATE: Municipe[] =  [];

export function HistoricListReducer(state = INITIAL_STATE, action: Action): Municipe[] {
  switch (action.type) {
    case ADD_MUNICIPE:
      return state.concat([action.payload]);

    case CLEAN_LIST:
      return INITIAL_STATE;

    default:
      return state;
  }
}
