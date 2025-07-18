import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { HighlightsCarousel } from './highlights-carousel/highlights-carousel';


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
    HighlightsCarousel
  ]
})
export class HomeModule { }
