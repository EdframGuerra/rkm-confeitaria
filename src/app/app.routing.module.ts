import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
   {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'cardapio', // <-- ADICIONAR ESTA ROTA AQUI
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule)
  }
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  exports: [
    RouterModule,
    SharedModule
  ]
})
export class AppRoutingModule { }



