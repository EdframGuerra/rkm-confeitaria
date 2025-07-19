import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InterfaceProduct } from '../../../models/interface.product';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product.card.html',
  styleUrl: './product.card.css'
})
export class ProductCard {
  @Input() product!: InterfaceProduct;

  @Output() onDetailsClick = new EventEmitter<InterfaceProduct>();
  @Output() onOrderClick = new EventEmitter<InterfaceProduct>();

  // Métodos simplificados
  showDetails() {
    this.onDetailsClick.emit(this.product);
  }

  makeOrder() {
    this.onOrderClick.emit(this.product);
  }
}
