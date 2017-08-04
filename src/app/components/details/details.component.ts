import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ActivatedRoute, ParamMap }
from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public pageIsReady = false;
  public movie;
  
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  
  constructor(
   private service: MainService,
   private route: ActivatedRoute,
   private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) => 
          this.service.getMovie(+params.get('id'))
        )
        .takeUntil(this.ngUnsubscribe)
        .subscribe(movie => {
          this.movie = movie;
          this.pageIsReady = true;
          this.store.dispatch({type: 'SEE_A_MOVIE'});
        });
  }
  
  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
