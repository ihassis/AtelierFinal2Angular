import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/movie.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private movieService: MovieService) { }
  onSugg() {
    this.movieService.addRandomMovie();
  }

}
