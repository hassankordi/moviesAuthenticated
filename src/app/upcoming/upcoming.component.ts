import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {


  imgSrc="https://image.tmdb.org/t/p/w500"
  moviesArray;
  getMovie(){
  
  
    this._MoviesService.getUpcoming().subscribe((res)=>{
      this.moviesArray = res.results;
      // console.log(res)
      
    },(err)=>{
      console.log(err)
    })
  }
  
    constructor(private _MoviesService:MoviesService) { this.getMovie()}

  ngOnInit(): void {
  }

}
