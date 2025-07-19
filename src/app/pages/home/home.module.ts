import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { Home } from './home';
import { HighlightsCarousel } from './highlights.carousel/highlights.carousel';
import { SharedModule } from '../../shared/shared.module';
import { HomeLayout } from './home.layout/home.layout';


@NgModule({
  declarations: [
    Home,
    HighlightsCarousel,
    HomeLayout,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    HighlightsCarousel,
    HomeLayout
  ]
})
export class HomeModule { }
