import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() searchChange = new EventEmitter();//searchChange

  constructor(
   private service: MainService,
   ) { }

  ngOnInit() {
    Observable.fromEvent(
      this.searchInput.nativeElement, 'keyup'
    )
    .map((event: KeyboardEvent) =>  (<HTMLInputElement>event.target).value
    ).subscribe(value => {
      console.log('value', value);
      //this.searchChange.emit(value);
      this.searchChange.emit('');
      //this.service.filterMovie(value).subscribe(result => this.searchChange.emit(result));
    });
  }


}
