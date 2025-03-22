import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinkShortenerComponent } from './link-shortener/link-shortener.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'link',
        component: LinkShortenerComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];