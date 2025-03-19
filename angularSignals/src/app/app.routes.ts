import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'ejemplo1',
        loadComponent: () => import('./components/ejemplo1/ejemplo1.component').then ( c => c.Ejemplo1Component)
    },

    {
        path: 'ejemplo2',
        loadComponent: () => import('./components/ejemplo2/ejemplo2.component').then ( c => c.Ejemplo2Component)
    },

    {
        path: 'ejemplo3',
        loadComponent: () => import('./components/ejemplo3/ejemplo3.component').then ( c => c.Ejemplo3Component)
    },

];
