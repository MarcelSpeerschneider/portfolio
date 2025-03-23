import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinkShortenerComponent } from './link-shortener/link-shortener.component';
import { routeDebugGuard } from './guards/route-debug.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        canActivate: [routeDebugGuard]
    },
    {
        path: 'linktest',
        component: LinkShortenerComponent,
        canActivate: [routeDebugGuard]
    },
    {
        path: '**',
        redirectTo: ''
    },


];