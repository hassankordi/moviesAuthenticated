import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  imgSrc="https://image.tmdb.org/t/p/w500"
  details;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) {

    let movieId= _ActivatedRoute.snapshot.params.id;
    _MoviesService.getMoveiDetails(movieId).subscribe((x)=>{
      this.details = x;

      console.log(x.id)
    })

   }

  ngOnInit(): void {
  }

}
