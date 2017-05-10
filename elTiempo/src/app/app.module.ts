import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import {APP_ROUTING} from './app.routes';

// Services
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { WeatherService } from './services/weather.service';

// Redux
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/reducers/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LogActions } from './redux/actions/log.actions';
import { WeatherActions } from './redux/actions/weather.actions';
import { RegisterActions } from './redux/actions/register.actions';
import { HistoricListActions } from './redux/actions/historiclist.actions';


import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { WeatherComponent } from './components/home/weather/weather.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    WeatherComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({ maxAge: 5 }),
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    WeatherService,
    LogActions,
    RegisterActions,
    WeatherActions,
    HistoricListActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
