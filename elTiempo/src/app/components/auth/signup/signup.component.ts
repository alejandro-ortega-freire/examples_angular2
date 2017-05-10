import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { NgForm } from '@angular/forms';
import { LIST_MUNICIPES } from '../../../services/weather.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  listMunicipes = LIST_MUNICIPES;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const municipio = form.value.dropdownMenuMunicipes;
    this.authService.registerUser({email: email, password: password, municipeBorn: municipio});
  }

}
