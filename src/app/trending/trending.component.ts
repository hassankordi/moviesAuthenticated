import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  imgSrc="https://image.tmdb.org/t/p/w500"
  moviesArray;
  getMovie(){
  
  
    this._MoviesService.gettrending().subscribe((res)=>{
      this.moviesArray = res.results;
      console.log(res)
      
    },(err)=>{
      console.log(err)
    })
  }
  
    constructor(private _MoviesService:MoviesService) { this.getMovie()}

  ngOnInit(): void {
  }

}
