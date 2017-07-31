import { Injectable } from '@angular/core';
import { GenreType, genreType } from './movie.model';
import { MOVIES } from './movie.mock-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MainService {

  movieList:any[] = MOVIES;

  getMovies(): Observable<any> {
    return Observable.of(this.movieList);
  }

  getMovie(id): Observable<any> {
    let selectedMovie = this.movieList.filter(movie => movie.id === id);
    //console.log('getMovie', selectedMovie[0]);
    //return selectedMovie[0];

    /*let selectedMovie = this.movieList.filter(movie => {
      new RegExp(id, 'gi').test(movie.id);
    });*/

    console.log('getMovie', selectedMovie[0]);
    return Observable.of(selectedMovie[0]);

    //return selectedMovie[0];
  }

  filterMovie(name: string = ''): Observable<string> {
    let filteredMovies = name ? this.movieList.filter(movie => new RegExp(name, 'gi').test(movie.name)) : '';
    console.log('filteredMovies', filteredMovies);
    return Observable.of(filteredMovies);
  }

}
