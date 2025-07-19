import { Component, OnInit } from '@angular/core';
import { InterfaceRegisterData } from '../../../models/interface.register.data';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {
  // Dados do formulário de cadastro
  registerData: InterfaceRegisterData = {
    name: '',
    email: '',
    phone: ''
  };

  // Estados dos modais
  isTermsModalOpen: boolean = false;
  isRegisterFormModalOpen: boolean = false;

  // Estado de aceite dos termos
  termsAccepted: boolean = false;

  constructor() { }

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
   * Aceita os termos e habilita o botão "Finalizar Cadastro".
   */
  acceptTerms(): void {
    this.termsAccepted = true;
    this.closeTermsModal(); // Fecha o modal de termos
  }

  /**
   * Abre o modal do Formulário de Cadastro.
   */
  openRegisterFormModal(): void {
    this.isRegisterFormModalOpen = true;
  }

  /**
   * Fecha o modal do Formulário de Cadastro.
   */
  closeRegisterFormModal(): void {
    this.isRegisterFormModalOpen = false;
  }

  /**
   * Simula a submissão do formulário de cadastro.
   * Em um projeto real, aqui você enviaria os dados para um serviço de backend.
   */
  submitRegistrationForm(): void {
    console.log('Dados do cadastro:', this.registerData);
    // Lógica para enviar os dados para o backend (simulado)
    // Após o envio, você pode exibir uma mensagem de sucesso e fechar o modal.
    alert('Cadastro realizado com sucesso! Bem-vindo ao Clube de Doces!'); // Usando alert provisoriamente
    this.closeRegisterFormModal();
  }
}
