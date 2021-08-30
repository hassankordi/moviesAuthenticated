import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}from '@angular/forms'
import { MoviesService } from '../movies.service';
import {PostDataService} from '../post-data.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


message;

  
  loginForm = new FormGroup({
   
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required]),
  })


login(){
  console.log(this.loginForm.value)
  if(this.loginForm.valid){

  }
  this._PostDataService.makeLogin(this.loginForm.value).subscribe((x)=>{
    console.log(x)
    this.message = x.message;
    if(x.message == 'success'){
      this._MoviesService.isLogin.next(true);
      this._Router.navigate(['/now-playing'])


    }
  })
}






  constructor(private _PostDataService:PostDataService , private _MoviesService:MoviesService , private _Router:Router) { }


  ngOnInit(): void {
  }

}
