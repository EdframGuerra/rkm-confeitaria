import { Component} from '@angular/core';
import { Product } from '../../../models/product';


@Component({
  selector: 'app-menu-section',
  standalone: false,
  templateUrl: './menu-section.html',
  styleUrl: './menu-section.css',
})
export class MenuSection{
  allProducts: Product[] = [
    {
      name: 'Pastel de Carne',
      description: 'Recheado com carne moída e tempero especial.',
      image: 'pastel-carne.jpg',
      price: 7.5,
      servings: 1,
    },
    {
      name: 'Pastel de Queijo',
      description: 'Muito queijo e crocância irresistível.',
      image: 'pastel-queijo.jpg',
      price: 6.0,
      servings: 1,
    },
    {
      name: 'Pastel de Frango',
      description: 'Frango desfiado com requeijão cremoso.',
      image: 'pastel-frango.jpg',
      price: 7.0,
      servings: 1,
    },
    // Adicione mais produtos conforme necessário
  ];

  selectedProduct: Product | null = null;

  chunkProducts(size: number): Product[][] {
    const chunks: Product[][] = [];
    for (let i = 0; i < this.allProducts.length; i += size) {
      chunks.push(this.allProducts.slice(i, i + size));
    }
    return chunks;
  }

  openProductModal(product: Product): void {
    this.selectedProduct = product;
  }

  closeProductModal(): void {
    this.selectedProduct = null;
  }
}