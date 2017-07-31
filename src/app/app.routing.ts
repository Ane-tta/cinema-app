import { Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

export const AppRoutes: Routes = [
  {
    path: 'movie/',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'movie/:id',
    component: DetailsComponent
  },
  {
    path: '',
    component: ListComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
