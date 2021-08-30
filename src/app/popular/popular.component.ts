import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  imgSrc="https://image.tmdb.org/t/p/w500"
  moviesArray;
  getMovie(){
  
  
    this._MoviesService.getpopular().subscribe((res)=>{
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
