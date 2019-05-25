import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//
// const appRoutes: Routes = [
//
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { //LazyLoad
//     path: '',
//     component: PagesComponent,
//     canActivate: [LoginGuardGuard],
//     loadChildren: './pages/pages.module#PagesModule'
//   },
//   { path: '**', component: NopagefoundComponent },
//
// ];
//
// export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
