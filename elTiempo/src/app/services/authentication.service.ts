import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../interfaces/appState.interface';
import { Store } from '@ngrx/store';
import { LogActions } from '../redux/actions/log.actions';
import { RegisterActions } from '../redux/actions/register.actions';
import { HistoricListActions } from '../redux/actions/historiclist.actions';
import { WeatherActions } from '../redux/actions/weather.actions';

@Injectable()
export class AuthenticationService {
  estadoObservable: Observable<AppState>;
  private userCorrect = false;

  private users: User[];

  constructor(private _router: Router, private store: Store<AppState>,
              private logActions: LogActions, private registerActions: RegisterActions,
              private historicListActions: HistoricListActions, private weatherActions: WeatherActions) {
    this.estadoObservable = this.store.select(state => state);
    this.estadoObservable.subscribe((data) => {
      this.users = data.usersList;
    });
  }

  signinUser(user: User) {
    for (const usuario of this.users){
      if (user.email === usuario.email) {
        if (user.password === usuario.password) {
          // Usuario actual debe cambiar en LocalStorage
          this.userCorrect = true;
          this.store.dispatch(this.logActions.login(usuario));
          this._router.navigate(['home']);
        } else {
          this.userCorrect = false;
        }
      }
    }
  }

  signoutUser() {
    this.userCorrect = false;
    this.store.dispatch(this.weatherActions.eraseMunicipe());
    this.store.dispatch(this.historicListActions.cleanList());
    this.store.dispatch(this.logActions.logout());
  }

  public authenticated() {
    return this.userCorrect;
  }

  registerUser(user: User) {
    this.store.dispatch(this.registerActions.register(user));
    this.signinUser(user);
  }

}

