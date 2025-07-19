import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button } from './components/button/button';
import { IncentiveCard } from './components/incentive.card/incentive.card';
import { ProductCard } from './components/product.card/product.card';
import { TestimonialCard } from './components/testimonial.card/testimonial.card';

@NgModule({
  declarations: [
    Button,
    ProductCard,
    IncentiveCard,
    TestimonialCard
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Button,
    ProductCard,
    IncentiveCard,
    CommonModule,
    RouterModule,
    TestimonialCard
  ]
})
export class SharedModule { }
