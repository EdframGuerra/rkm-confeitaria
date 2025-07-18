import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { HighlightsCarousel } from './highlights-carousel/highlights-carousel';
import { MenuSection } from './menu-section/menu-section';


@NgModule({
  declarations: [
    Home,
    HighlightsCarousel   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule   
  ],
  exports: [
    HighlightsCarousel,
    MenuSection
  ]
})
export class HomeModule { }
