import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button } from './components/button/button';
import { IncentiveCard } from './components/incentive.card/incentive.card';
import { ProductCard } from './components/product.card/product.card';

@NgModule({
  declarations: [
    Button,
    ProductCard,
    IncentiveCard
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
    RouterModule
  ]
})
export class SharedModule { }
