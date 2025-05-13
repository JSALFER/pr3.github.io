import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'header', 
        pathMatch: 'full'
    },
    {
        path: '', 
        loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
    }
];
