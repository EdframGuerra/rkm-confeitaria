import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Menu } from './menu';


const routes: Routes = [
      { path: '', component: Menu } // Rota padrão para /cardapio exibe MenuPage
    ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
   exports: [RouterModule]
})
export class MenuRoutingModule { }
