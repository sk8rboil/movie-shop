import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  
  public movieList : any;
  constructor(private api: ApiService){ }
  ngOnInit(): void {
    this.api.getMovie().subscribe(res=>{
      this.movieList = res; //keep Object
      console.log(res);
    })
  }
}
