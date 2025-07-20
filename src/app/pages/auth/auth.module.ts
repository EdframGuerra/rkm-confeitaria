import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Auth } from './auth';
import { Register } from './register/register';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: Auth, // Auth é o layout
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' }, // Redireciona para registro por padrão
      { path: 'register', component: Register }, // Rota para o formulário de registro
      // { path: 'admin-login', component: AdminLoginComponent }, // Rota para o login admin
    ]
  }
];

@NgModule({
  declarations: [
    Auth,
    Register
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    Register
  ]
})
export class AuthModule { }



