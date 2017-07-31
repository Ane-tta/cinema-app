import { Component, OnInit, OnChanges } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  public movieList;

  constructor(private database: MainService){}

  ngOnInit() {
    this.getMovieList();
  }
  ngOnChanges(changes) {
    console.log('ngOnChanges', changes);
  }

  getMovieList(){
    this.database.getMovies().subscribe(movies => {
      this.movieList = movies;
      console.log(this.movieList);
    });
  }

  onSearch(value){
    console.log('onSearch', value);
  }

}
