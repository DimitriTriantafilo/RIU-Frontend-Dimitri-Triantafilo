import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        children: [
                {
                    path: 'hero-list',
                    loadComponent: () => 
                    import('./features/super-hero-list/super-hero-list.component').then(m => m.SuperHeroListComponent)
                },
                {
                    path: 'hero-detail/:id',
                    loadComponent: () => 
                    import('./features/super-hero-detail/super-hero-detail.component').then(m => m.SuperHeroDetailComponent)
                },
                {
                    path: 'hero-create',
                    loadComponent: () => 
                    import('./features/super-hero-crud/super-hero-crud.component').then(m => m.SuperHeroCrudComponent)
                },
                {
                    path: 'hero-edit/:id',
                    loadComponent: () => 
                    import('./features/super-hero-crud/super-hero-crud.component').then(m => m.SuperHeroCrudComponent)
                }
        ]
    }
 
];
