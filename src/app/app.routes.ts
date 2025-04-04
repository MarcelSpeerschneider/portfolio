import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { routeDebugGuard } from './guards/route-debug.guard';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        canActivate: [routeDebugGuard]
    },
    {
        path: '**',
        redirectTo: ''
    },


];