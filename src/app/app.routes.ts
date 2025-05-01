import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'book/:id',
    loadComponent: () => import('./book-details/book-details.component').then(m => m.BookDetailsComponent)
  }
];

