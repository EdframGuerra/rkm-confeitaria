import { Component } from '@angular/core';
import { InterfaceTestimonialCard } from '../../../models/interface.testimonial.card';
import { InterfaceProductCard } from '../../../models/interface.produto.card';

@Component({
  selector: 'app-home-layout',
  standalone: false,
  templateUrl: './home.layout.html',
  styleUrl: './home.layout.css'
})
export class HomeLayout {
  products: InterfaceProductCard[] = [
  { 
    title: 'Bolo 1',
    description: 'Descrição 1',
    price: 50, 
    image: 'bolo1.png' 
  },
  { 
    title: 'Bolo 2',
    description: 'Descrição 2',
    price: 60, 
    image: 'bolo2.png' 
  },
  { 
    title: 'Bolo 3',
    description: 'Descrição 3',
    price: 70, 
    image: 'bolo3.png' 
  }
];

testimonials: InterfaceTestimonialCard[] = [
    {
      id: 1,
      name: 'Ana Clara',
      rating: 5,
      message: 'O bolo de brigadeiro foi o sucesso da festa! Todos elogiaram.',
    },
    {
      id: 2,
      name: 'Carlos Eduardo',
      rating: 4,
      message: 'Atendimento excelente e a torta de limão estava perfeita!',
    },
    {
      id: 3,
      name: 'Márcia Fernandes',
      rating: 5,
      message: 'Já encomendei várias vezes e sempre superam minhas expectativas!',
    }
  ];

}
