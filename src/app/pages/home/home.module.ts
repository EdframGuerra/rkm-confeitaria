import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ContactForm } from './contact.form/contact.form';
import { HighlightsCarousel } from './highlights.carousel/highlights.carousel';
import { Home } from './home';
import { HomeLayout } from './home.layout/home.layout';
import { HomeRoutingModule } from './home.routing.module';
import { TestimonialsSection } from './testimonials.section/testimonials.section';


@NgModule({
  declarations: [
    Home,
    HighlightsCarousel,
    HomeLayout,
    ContactForm,
    TestimonialsSection

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HighlightsCarousel,
    HomeLayout,
    ContactForm,
    TestimonialsSection
  ]
})
export class HomeModule { }
