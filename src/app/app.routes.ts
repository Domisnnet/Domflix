import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/card/card.component').then((m) => m.AppCardComponent),
  },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./components/catalog/catalog.component').then((m) => m.CatalogComponent),
  },
];
