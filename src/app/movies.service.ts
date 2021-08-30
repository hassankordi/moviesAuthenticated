import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  

url:string='https://api.themoviedb.org/3/movie/now_playing?';
key='api_key=c81c1b2c557bd90ec43cb538843151ee'

getNowPlaying():Observable<any>
{

 return this._HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c81c1b2c557bd90ec43cb538843151ee')
}
getpopular():Observable<any>{
  return this._HttpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=c81c1b2c557bd90ec43cb538843151ee')
}
gettrending():Observable<any>{
  return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=c81c1b2c557bd90ec43cb538843151ee')
}
gettopRated():Observable<any>{
  return this._HttpClient.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c81c1b2c557bd90ec43cb538843151ee')
}
getUpcoming():Observable<any>{
  return this._HttpClient.get(' https://api.themoviedb.org/3/movie/upcoming?api_key=c81c1b2c557bd90ec43cb538843151ee')
}

getMoveiDetails(id):Observable<any>
{

return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c81c1b2c557bd90ec43cb538843151ee`)

}

isLogin = new BehaviorSubject(false);


  constructor(private _HttpClient:HttpClient) { }
}
