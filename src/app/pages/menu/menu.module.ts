import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './menu'; // Ajustado para menu.page/menu.page
import { SharedModule } from '../../shared/shared.module'; // Importar SharedModule


@NgModule({
  declarations: [
    Menu // Declarar MenuPage
  ],
  imports: [
    CommonModule,
    SharedModule // Importar SharedModule
  ],
  exports: [
    Menu, // Exportar MenuPage
    SharedModule // Exportar SharedModule
  ]
})
export class MenuModule { }
