import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-incentive-card',
  standalone: false,
  templateUrl: './incentive.card.html',
  styleUrl: './incentive.card.css'
})
export class IncentiveCard implements OnInit {
  
  // Estados dos modais
  isTermsModalOpen: boolean = false;
  // Removido: isRegisterFormModalOpen: boolean = false; // Não é mais necessário, pois redirecionamos.

  // Estado de aceite dos termos
  termsAccepted: boolean = false;

  constructor(private router: Router) { } // Injetar Router

  ngOnInit(): void {
    // Lógica de inicialização, se necessária.
  }

  /**
   * Abre o modal de Termos e Condições.
   */
  openTermsModal(): void {
    this.isTermsModalOpen = true;
  }

  /**
   * Fecha o modal de Termos e Condições.
   */
  closeTermsModal(): void {
    this.isTermsModalOpen = false;
  }

  /**
   * Aceita os termos e habilita o botão "Cadastre-se".
   */
  acceptTerms(): void {
    this.termsAccepted = true;
    this.closeTermsModal(); // Fecha o modal de termos
  }

  /**
   * Redireciona para a página de cadastro (/auth/register).
   * Chamado ao clicar no botão "Cadastre-se".
   */
  goToRegisterPage(): void {
    
  }

  // Removido: openRegisterFormModal(), closeRegisterFormModal(), submitRegistrationForm()
  // Não são mais necessários, pois o formulário de cadastro está em outra página.
}
