import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing-module';
import { MenuPage } from './menu-page/menu-page';
import { MenuSection } from '../home/menu-section/menu-section';


@NgModule({
  declarations: [
    MenuPage,
    MenuSection
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }
