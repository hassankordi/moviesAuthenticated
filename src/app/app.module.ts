import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&display=swap');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayingComponent } from './playing/playing.component';
import { TrendingComponent } from './trending/trending.component';
import { PopularComponent } from './popular/popular.component';
import { TopratedComponent } from './toprated/toprated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegestrationComponent,
    LoginComponent,
    NavbarComponent,
    PlayingComponent,
    TrendingComponent,
    PopularComponent,
    TopratedComponent,
    UpcomingComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


 // RouterModule