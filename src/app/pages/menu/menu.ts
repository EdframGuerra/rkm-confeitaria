import { Component, OnInit } from '@angular/core';
import { InterfaceProductCard } from '../../models/interface.produto.card';

@Component({
  selector: 'app-menu',
  standalone:false,
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu implements OnInit {
  allProducts: InterfaceProductCard[] = [];
  selectedProduct: InterfaceProductCard | null = null;

  constructor() { }

  ngOnInit(): void {
    this.allProducts = [
      {
    title: "Bolo de Brigadeiro",
    description: "Delicioso bolo de chocolate com cobertura de brigadeiro cremoso",
    price: 89.90,
    image: "bolo-brigadeiro.jpg"
  },
  {
    title: "Bolo de Cenoura",
    description: "Bolo fofinho de cenoura com cobertura de chocolate",
    price: 79.90,
    image: "bolo-cenoura.jpg"
  },
  {
    title: "Bolo de Red Velvet",
    description: "Bolo aveludado vermelho com recheio de cream cheese",
    price: 120.00,
    image: "bolo-red-velvet.jpg"
  },
  {
    title: "Bolo de Limão",
    description: "Bolo refrescante com raspas de limão e glacê cítrico",
    price: 85.50,
    image: "bolo-limao.jpg"
  },
  {
    title: "Bolo de Morango",
    description: "Bolo branco com recheio e cobertura de morangos frescos",
    price: 95.75,
    image: "bolo-morango.jpg"
  },
  {
    title: "Bolo de Chocolate Belga",
    description: "Bolo super chocolateado com chocolate belga premium",
    price: 135.00,
    image: "bolo-chocolate-belga.jpg"
  },
  {
    title: "Bolo de Coco",
    description: "Bolo macio de coco com cobertura de coco queimado",
    price: 75.00,
    image: "bolo-coco.jpg"
  },
  {
    title: "Bolo de Maracujá",
    description: "Bolo leve com recheio e cobertura de maracujá",
    price: 88.90,
    image: "bolo-maracuja.jpg"
  },
  {
    title: "Bolo de Abacaxi",
    description: "Bolo úmido com pedaços de abacaxi e calda caramelizada",
    price: 82.50,
    image: "bolo-abacaxi.jpg"
  },
  {
    title: "Bolo de Nozes",
    description: "Bolo rico em nozes com toque de canela",
    price: 110.00,
    image: "bolo-nozes.jpg"
  },
  {
    title: "Bolo de Baunilha",
    description: "Bolo clássico de baunilha com glacê simples",
    price: 65.00,
    image: "bolo-baunilha.jpg"
  },
  {
    title: "Bolo de Café",
    description: "Bolo aromático de café com recheio de creme de café",
    price: 92.00,
    image: "bolo-cafe.jpg"
  },
  {
    title: "Bolo de Laranja",
    description: "Bolo cítrico de laranja com calda de laranja",
    price: 78.50,
    image: "bolo-laranja.jpg"
  },
  {
    title: "Bolo de Milho",
    description: "Bolo caseiro de milho cremoso",
    price: 70.00,
    image: "bolo-milho.jpg"
  },
  {
    title: "Bolo de Amêndoas",
    description: "Bolo refinado com farinha de amêndoas e raspas de limão",
    price: 125.00,
    image: "bolo-amendoas.jpg"
  }
    ];
  }

  openProductModal(product: InterfaceProductCard): void {
    this.selectedProduct = product;
  }

  closeProductModal(): void {
    this.selectedProduct = null;
  }

  openWhatsAppOrder(product: InterfaceProductCard): void {
    const phoneNumber = '5571986893011';
    const message = `Olá, gostaria de fazer um pedido do produto: ${product.title} (R$ ${product.price}).`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
