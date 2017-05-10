import { Action } from '@ngrx/store';
import { Municipe } from '../../interfaces/municipe.interface';

export const UPDATE_MUNICIPE = 'UPDATE_MUNICIPE';
export const ERASE_MUNICIPE = 'ERASE_MUNICIPE';

const INITIAL_STATE =  { name: '', main: '', description: '', temp: 0, humidity: 0, speed: 0};

export function WeatherReducer(state = INITIAL_STATE, action: Action): Municipe {
  switch (action.type) {
    case UPDATE_MUNICIPE:
      return Object.assign({}, state, action.payload);

    case ERASE_MUNICIPE:
      return Object.assign({}, state, INITIAL_STATE);

    default:
      return state;
  }
}
