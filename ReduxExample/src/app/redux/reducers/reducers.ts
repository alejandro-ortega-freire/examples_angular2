import { CounterReducer } from './counterReducer';
import { ActionReducer, combineReducers, State } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { environment } from '../../../environments/environment.prod';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from '../interfaces/appState';
import { UserReducer } from './userReducer';
import { storeFreeze } from 'ngrx-store-freeze';

const reducers = {
  counter: CounterReducer,
  user: UserReducer
};

const developmentReducer: ActionReducer<State<AppState>> = compose(
  // Congela el Store mientras se realizan el resto de funciones
  storeFreeze,
  // Establece la sincronización con el LocalStorage
  localStorageSync(['counter', 'user'], true),
  combineReducers)(reducers);

const productionReducer: ActionReducer<State<AppState>> = compose(
  localStorageSync(['counter', 'user'], true),
  combineReducers)(reducers);

export function reducer(state: State<AppState>, action: any) {
  // Se diferencia si estás en modo de producción o desarrollo
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
};

// SI NO SE HACE DIFERENCIACIÓN ENTRE AMBOS ESTADOS (development y production) con
// EXPORTAR LA SEGUNDA CONSTANTE ES SUFICIENTE, DEJANDO INNECESESARIOS LOS MÓDULOS
// DE environment y storeFreeze

// export function reducer(state: State<AppState>, action: any) {
//     return productionReducer(state, action);
// };
