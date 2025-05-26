import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hero-list', // Redirige la ruta vacía a 'hero-list'
    pathMatch: 'full', // Asegura que solo redirija cuando la ruta es exactamente vacía
  },
  {
    path: '',
    children: [
      {
        path: 'hero-list',
        loadComponent: () =>
          import('./features/super-hero-list/super-hero-list.component').then(
            (m) => m.SuperHeroListComponent
          ),
      },
      {
        path: 'hero-create',
        loadComponent: () =>
          import('./features/super-hero-crud/super-hero-crud.component').then(
            (m) => m.SuperHeroCrudComponent
          ),
      },
      {
        path: 'hero-edit/:id',
        loadComponent: () =>
          import('./features/super-hero-crud/super-hero-crud.component').then(
            (m) => m.SuperHeroCrudComponent
          ),
        data: {
          renderMode: 'ssr',
        },
      },

      {
        path: '**',
        loadComponent: () =>
          import('./features/not-found/not-found.component').then(
            (m) => m.NotFoundComponent
          ),
      },
    ],
  },
];
