import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { WeatherActions } from '../redux/actions/weather.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/appState.interface';
import { Municipe } from '../interfaces/municipe.interface';
import { HistoricListActions } from '../redux/actions/historiclist.actions';

export const LIST_MUNICIPES: string[] = ['Adeje', 'Arona', 'Guia de Isora', 'Guimar', 'Icod de los Vinos', 'La Orotava', 'Los Realejos',
  'Santa Cruz de Tenerife', 'Tacoronte', 'Vilaflor'];

@Injectable()
export class WeatherService {
  apiKey = 'b7ce629a4ef02fd598da63afaeb2b501';
  url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private _http: Http, private store: Store<AppState>,
              private weatherActions: WeatherActions, private historicListActions: HistoricListActions) {
  }

  getMunicipeInformation(municipeName: string): Observable<any> {
    return this._http.get(this.url + municipeName + '&APPID=' + this.apiKey + '&units=metric')
      .map(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  update(municipe: Municipe) {
    this.store.dispatch(this.weatherActions.updateMunicipe(municipe));
  }

  addMunicipe(municipe: Municipe) {
    this.store.dispatch(this.historicListActions.addMunicipeList(municipe));
  }
}

