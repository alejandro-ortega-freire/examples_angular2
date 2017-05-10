import { Component, OnInit } from '@angular/core';
import { User} from '../../redux/interfaces/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/interfaces/appState';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: User;

  constructor(private store: Store<AppState>) {
    this.store.select ( state => state.user ).subscribe(data => this.user = data);
  }

  ngOnInit() {
  }

}
