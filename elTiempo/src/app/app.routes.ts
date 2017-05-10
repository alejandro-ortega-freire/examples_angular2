import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuardService ]},
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuardService ]},
  { path: '**', pathMatch: 'full', redirectTo: 'signin'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
