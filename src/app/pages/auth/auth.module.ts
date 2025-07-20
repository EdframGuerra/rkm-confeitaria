import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Auth } from './auth';
import { Register } from './register/register';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';




@NgModule({
  declarations: [
    Auth,
    Register
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [
    Register
  ]
})
export class AuthModule { }
