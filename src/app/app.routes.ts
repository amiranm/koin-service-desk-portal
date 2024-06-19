import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" }, //landing page
    { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: '', loadChildren: () => import('./pages/login-email-filled/login-email-filled.module').then(m => m.LoginEmailFilledModule) },
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: '', loadChildren: () => import('./pages/ideas-intake/ideas-intake.module').then(m => m.IdeasIntakeModule) },
];
