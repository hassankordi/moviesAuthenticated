import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
import {Observable} from 'rxjs'
import {Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  checkLogin;

  logOut(){
    this._MoviesService.isLogin.next(false);
    this._Router.navigate(['/login'])

  }
  
  

  constructor(private _MoviesService:MoviesService ,private _Router:Router) { 
    // this.checkLogin = _MoviesService.isLogin
    _MoviesService.isLogin.subscribe((x)=>{
      this.checkLogin = x ;
    })
  }

  ngOnInit(): void {
  }

}
