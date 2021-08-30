import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
// test(data){
  
//   this._MoviesService.getMoveiDetails(data).subscribe((x)=>{
//     // console.log(x)
//   })
// }

  


imgSrc="https://image.tmdb.org/t/p/w500"
moviesArray;
getMovie(){


  this._MoviesService.getNowPlaying().subscribe((res)=>{
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
