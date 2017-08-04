import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routing';

import { MainService } from './services/main.service';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { SearchPipe } from './pipes/search.pipe';
import { GenrePipe } from './pipes/genre.pipe';
import { HeaderNoSearchComponent } from './components/header-no-search/header-no-search.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { movieList } from './reducers/app.reducer';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SearchPipe,
    GenrePipe,
    HeaderNoSearchComponent,
    HeroAreaComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      movieList
    }),
    RouterModule.forRoot(
      AppRoutes
    )
  ],
  providers: [MainService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
