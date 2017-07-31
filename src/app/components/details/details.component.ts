import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ActivatedRoute, ParamMap, Router }
from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public movie;
  private movieParams;
  private paramsDetails;

  constructor(
   private service: MainService,
   private route: ActivatedRoute,
   private router: Router,
   private location: Location
  ) { }

  ngOnInit() {
    this.movieParams = this.route.paramMap.subscribe(details => {
      this.paramsDetails = details; this.getMovieDetails(+this.paramsDetails.params['id']);
    });
  }

  ngOnDestroy(){
    this.movieParams.unsubscribe();
  }

  getMovieDetails(id){
    this.service.getMovie(+this.paramsDetails.params['id']).subscribe(res => {
        console.log('res', res);
      });
  }

}
