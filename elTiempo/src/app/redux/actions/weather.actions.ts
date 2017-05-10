import { ERASE_MUNICIPE, UPDATE_MUNICIPE} from '../reducers/weather.reducer';
import { Municipe } from '../../interfaces/municipe.interface';

export class WeatherActions {
  constructor() { }

  updateMunicipe(municipe: Municipe) {
    return { type: UPDATE_MUNICIPE, payload: municipe };
  }

  eraseMunicipe() {
    return { type: ERASE_MUNICIPE };
  }
}
