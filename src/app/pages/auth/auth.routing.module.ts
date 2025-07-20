import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth';
import { Register } from './register/register';

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
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
