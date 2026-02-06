import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import Movie from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  constructor(private movieService: MovieService) {
  }
  get movies(): Movie[] {
    return this.movieService.movies;
  }

  ngOnInit() {
    const movies = this.movieService.movies;
    console.log(movies);
  }
}
