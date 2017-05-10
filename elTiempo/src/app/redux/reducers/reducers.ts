import { ActionReducer, combineReducers, State } from '@ngrx/store';
import { LogReducer } from './log.reducer';
import { AppState } from '../../interfaces/appState.interface';
import { environment } from '../../../environments/environment.prod';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';
import { RegisterReducer } from './register.reducer';
import { WeatherReducer } from './weather.reducer';
import { HistoricListReducer } from './historiclist.reducer';

const reducers = {
  userActual: LogReducer,
  usersList: RegisterReducer,
  municipeActual: WeatherReducer,
  historicList: HistoricListReducer
};

const developmentReducer: ActionReducer<State<AppState>> = compose(
  // Congela el Store mientras se realizan el resto de funciones
  storeFreeze,
  // Establece la sincronización con el LocalStorage
  localStorageSync(['userActual', 'usersList', 'municipeActual', 'historicList'], true),
  combineReducers)(reducers);

const productionReducer: ActionReducer<State<AppState>> = compose(
  localStorageSync(['userActual', 'usersList', 'municipeActual', 'historicList'], true),
  combineReducers)(reducers);

export function reducer(state: State<AppState>, action: any) {
  // Se diferencia si estás en modo de producción o desarrollo
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
};
