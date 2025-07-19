import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: 'home',
     pathMatch: 'full'
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth-module').then(m => m.AuthModule) },
  { path: 'cardapio', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



