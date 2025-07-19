import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Menu } from './menu';
import { SharedModule } from '../../shared/shared.module';



const routes: Routes = [
  { path: '', component: Menu }
];

@NgModule({
  declarations: [
    Menu
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    Menu,
    SharedModule
  ]
})
export class MenuModule { }
