import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  movies:any;

  constructor( private service:MoviesService ) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe(res=>this.movies=res);
  }

}
