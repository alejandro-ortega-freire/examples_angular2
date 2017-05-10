import { Component, OnInit } from '@angular/core';
import { User } from '../../redux/interfaces/user';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { UserActions } from '../../redux/actions/userActions';
import { AppState } from '../../redux/interfaces/appState';
import { FormularioC1 } from './class/formulario';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  user: User;
  formularioC1: FormularioC1;

  constructor(private store: Store<AppState>,
              private userActions: UserActions) {
    this.store.select ( state => state.user ).subscribe(data => this.user = data);
  }

  ngOnInit() {
    this.formularioC1 = new FormularioC1();
  }

  save() {
    this.store.dispatch(this.userActions.save(this.formularioC1.controls['nombre'].value, this.formularioC1.controls['apellido'].value));
  }

  clear() {
    this.store.dispatch(this.userActions.clear());
  }
}
