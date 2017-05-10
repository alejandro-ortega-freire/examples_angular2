import { Component, OnInit } from '@angular/core';
import { LIST_MUNICIPES, WeatherService } from '../../../services/weather.service';
import { Municipe } from '../../../interfaces/municipe.interface';
import { Store } from '@ngrx/store';
import { AppState} from '../../../interfaces/appState.interface';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  listMunicipes = LIST_MUNICIPES;
  userActual: User;
  municipeSelected: Municipe;
  listHistoricMunicipes: Municipe[];

  constructor(private _weatherService: WeatherService, private store: Store<AppState>) {
    this.store.select(state => state.municipeActual).subscribe(municipeActual => this.municipeSelected = municipeActual);
    this.store.select(state => state.userActual).subscribe(userActual => this.userActual = userActual);
    this.store.select(state => state.historicList).subscribe(listHistoricMunicipes => this.listHistoricMunicipes = listHistoricMunicipes);
  }

  ngOnInit() {
    if (this.municipeSelected.name === '') {
      this.onTouchMunicipe(this.userActual.municipeBorn);
    }
  }

  onTouchMunicipe(municipe: string) {
    this._weatherService.getMunicipeInformation(municipe).subscribe(
      data => {
        this.municipeSelected = {
          name: data.name,
          main: data.weather[0].main,
          description: data.weather[0].description,
          temp: data.main.temp,
          humidity: data.main.humidity,
          speed: data.wind.speed
        };
        this._weatherService.update(this.municipeSelected);
        if (this.listHistoricMunicipes.find(option => option.name === this.municipeSelected.name) === undefined) {
          this._weatherService.addMunicipe(this.municipeSelected);
        }
      }
    );
  }
}

