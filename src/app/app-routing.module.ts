import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PathGuard } from './path.guard';
import { PlayingComponent } from './playing/playing.component';
import { PopularComponent } from './popular/popular.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { TopratedComponent } from './toprated/toprated.component';
import { TrendingComponent } from './trending/trending.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/login',pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'regestration',component:RegestrationComponent},
   {path:'now-playing',component:PlayingComponent ,canActivate:[PathGuard]},
   {path:'popular',component:PopularComponent ,canActivate:[PathGuard]},
   {path:'trending',component:TrendingComponent ,canActivate:[PathGuard]},
   {path:'topRated',component:TopratedComponent ,canActivate:[PathGuard]},
   {path:'upcoming',component:UpcomingComponent ,canActivate:[PathGuard]},
   {path:'movieDetails/:id',component:MovieDetailsComponent ,canActivate:[PathGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// Component,