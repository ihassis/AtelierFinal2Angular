import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // ← Add this!
import { MovieService } from '../services/movie.service';
import Movie from '../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: Movie = this.movieService.movies[0];
  nbrStars: number = 2;
  starsArray: Array<number> = Array(this.nbrStars).fill(0).map((_, i) => i);
  isWatched: boolean = false;
  @Output() view = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<void>();
  @Output() rate = new EventEmitter<number>();

  constructor(private movieService: MovieService) { }

  updateStars() {
    this.starsArray = Array(this.nbrStars).fill(0).map((_, i) => i);
    this.rate.emit(this.nbrStars);
  }
  onAdd() {
    if (this.nbrStars + 1 <= 5) {
      this.nbrStars += 1;
      this.updateStars()
      this.movieService.updateRating(this.movie.id, 1);
    }
  }
  onSub() {
    if (this.nbrStars - 1 >= 1) {
      this.nbrStars -= 1;
      this.updateStars()
      this.movieService.updateRating(this.movie.id, -1);
    }
  }
  onView() {
    this.isWatched = !this.isWatched;
    this.view.emit(this.isWatched);
    this.movieService.toggleWatched(this.movie.id);
  }
  onDelete() {
    this.movieService.deleteMovie(this.movie.id);
    this.delete.emit();
  }

}
