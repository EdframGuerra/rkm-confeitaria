import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceTestimonialCard } from '../../../models/interface.testimonial.card';

@Component({
  selector: 'app-testimonials-section',
  standalone:false,
  templateUrl: './testimonials.section.html',
  styleUrls: ['./testimonials.section.ts']
})
export class TestimonialsSection implements OnInit {
  allTestimonials: InterfaceTestimonialCard[] = []; // Todos os depoimentos
  fiveStarTestimonials: InterfaceTestimonialCard[] = []; // Depoimentos filtrados com 5 estrelas

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Dados mockados para os depoimentos (simulando vindo de um backend estático)
    this.allTestimonials = [
      {
        id: 1,
        name: "Mariana S.",
        rating: 5,
        message: "O bolo de chocolate foi o destaque da festa do meu filho! Todo mundo elogiou e pediu o contato da confeitaria. Super recomendo!",
        email: "mariana@example.com"
      },
      {
        id: 2,
        name: "Ricardo L.",
        rating: 5,
        message: "Os cupcakes que encomendei para o aniversário da minha esposa eram lindos e deliciosos. A apresentação foi impecável e o sabor incrível!",
        email: "ricardo@example.com"
      },
      {
        id: 3,
        name: "Ana Paula C.",
        rating: 4, // Este não terá 5 estrelas
        message: "Compro os macarons toda semana para o café da tarde na empresa. Meus colegas adoram e sempre pedem para eu trazer mais. A qualidade é excelente!",
        email: "ana@example.com"
      },
      {
        id: 4,
        name: "João P.",
        rating: 5,
        message: "Os docinhos são maravilhosos! A RKM Confeitaria superou minhas expectativas. Pedirei novamente com certeza.",
        email: "joao@example.com"
      },
      {
        id: 5,
        name: "Carla M.",
        rating: 5,
        message: "Atendimento excelente e produtos de altíssima qualidade. Meus convidados adoraram os brigadeiros gourmet!",
        email: "carla@example.com"
      }
    ];

    // Filtra os 3 últimos depoimentos com 5 estrelas
    this.fiveStarTestimonials = this.allTestimonials
      .filter(t => t.rating === 5)
      .slice(-3); // Pega os 3 últimos (se houver mais de 3)
  }

  /**
   * Navega para a página/formulário de deixar depoimento.
   * (Esta rota será criada posteriormente, por exemplo, /depoimentos/deixar)
   */
  goToLeaveTestimonial(): void {
    this.router.navigate(['/depoimentos/deixar']); // Exemplo de rota
  }
}
