import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from '../../redux/actions/counterActions';
import {AppState} from '../../redux/interfaces/appState';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cuentaActual: number;
  counterObservable: Observable<number>;

  constructor(private store: Store<AppState>, private counterActions: CounterActions) {
    this.counterObservable = this.store.select((state) => {
      return state.counter.cantidad;
    });
  }

  ngOnInit() {
    this.counterObservable.subscribe((data) => {
      this.cuentaActual = data;
    });
  }

  increment() {
    this.store.dispatch(this.counterActions.increment());
  }

  decrement() {
    this.store.dispatch(this.counterActions.decrement());
  }

  resetCountToZero() {
    this.store.dispatch(this.counterActions.resetCount());
  }
}
