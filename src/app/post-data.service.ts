import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {


signUpURL:string = 'https://routeegypt.herokuapp.com/signup';


loginURL:string = 'https://routeegypt.herokuapp.com/signin';

makeSignUp(obj):Observable<any>
{

  return this._HttpClient.post(this.signUpURL,obj);
}


makeLogin(obj):Observable<any>
{

  return this._HttpClient.post(this.loginURL,obj);
}




  constructor(private _HttpClient:HttpClient) { }
}
