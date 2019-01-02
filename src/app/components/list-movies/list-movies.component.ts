import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
@Component({
selector: 'list-movies',
templateUrl: './list-movies.component.html',
styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
public movies: Movie[];
constructor() {
this.movies = [
new Movie("Avengers", "Some description", "https://image.tmdb.org/t/p/w370_and_h556_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg"),
new Movie("Thor", "Some description", "https://image.tmdb.org/t/p/w370_and_h556_bestv2/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg"),
new Movie("Spiderman", "Some description"),
]
}
  ngOnInit() {
  }

}