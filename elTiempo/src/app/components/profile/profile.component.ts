import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../interfaces/appState.interface';
import { User } from '../../interfaces/user.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  actualUser: User;
  first_name = '';
  last_name = '';

  constructor(private store: Store<AppState>) {
    this.store.select(state => state.userActual).subscribe(user => this.actualUser = user);
  }

  ngOnInit() {
    // this.actualUser = JSON.parse(localStorage.getItem('logActual'));
  }


}
