import { Municipe } from '../../interfaces/municipe.interface';
import { ADD_MUNICIPE, CLEAN_LIST } from '../reducers/historiclist.reducer';

export class HistoricListActions {

  constructor() { }

  addMunicipeList(municipe: Municipe) {
    return { type: ADD_MUNICIPE, payload: municipe };
  }

  cleanList() {
    return { type: CLEAN_LIST };
  }
}
