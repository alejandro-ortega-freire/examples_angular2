import { Component, OnInit } from '@angular/core';
import { Municipe } from '../../../interfaces/municipe.interface';
import {LIST_MUNICIPES, WeatherService} from '../../../services/weather.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces/appState.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  listHistoricMunicipes: Municipe[];
  municipeSelected: Municipe;

  constructor(private _weatherService: WeatherService, private store: Store<AppState>) {
    this.store.select(state => state.historicList).subscribe(listHistoricMunicipes => this.listHistoricMunicipes = listHistoricMunicipes);
    this.store.select(state => state.municipeActual).subscribe(municipeActual => this.municipeSelected = municipeActual);
  }

  ngOnInit() {
  }

  onTouchMunicipeCarousel(municipe: Municipe) {
    this._weatherService.getMunicipeInformation(municipe.name).subscribe( data => {
      this.municipeSelected = {
        name: data.name,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        humidity: data.main.humidity,
        speed: data.wind.speed
      };
      this._weatherService.update(this.municipeSelected);
    });
  }
}



