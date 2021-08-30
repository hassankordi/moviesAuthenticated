import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {

  
  imgSrc="https://image.tmdb.org/t/p/w500"
  moviesArray;
  getMovie(){
  
  
    this._MoviesService.gettopRated().subscribe((res)=>{
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
