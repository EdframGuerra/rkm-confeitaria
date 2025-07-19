import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Auth } from './auth';
import { Register } from './register/register';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { 
    path: '', 
    component: Auth 
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
