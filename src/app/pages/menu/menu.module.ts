import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar os componentes que serão usados nas rotas filhas da Home
import { ContactForm } from '../home/contact.form/contact.form';
import { HighlightsCarousel } from '../home/highlights.carousel/highlights.carousel';
import { Home } from '../home/home'; // O componente Home (que contém as seções)
import { HomeLayout } from '../home/home.layout/home.layout'; // O componente de layout (o esqueleto)
import { TestimonialsSection } from '../home/testimonials.section/testimonials.section';
import { Menu } from './menu';

const routes: Routes = [
  {
    path: '', // Rota base para /home (ex: rkm-confeitaria.com/home)
    component: HomeLayout, // HomeLayout é o componente principal para esta rota (o pai)
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' }, // Redireciona /home para /home/main
      { path: 'main', component: Home }, // HomeComponent agrupa as seções principais
      // Rotas para seções específicas da Home (se você quiser acessá-las diretamente via URL)
      { path: 'destaques', component: HighlightsCarousel }, // Exemplo: /home/destaques
      { path: 'cardapio-promocional', component: Menu }, // Exemplo: /home/cardapio-promocional
      { path: 'fale-conosco', component: ContactForm }, // Exemplo: /home/fale-conosco
      { path: 'depoimentos-home', component: TestimonialsSection }, // Exemplo: /home/depoimentos-home
      
      // Rotas para páginas completas que estão fora da Home, mas linkadas do Header (serão criadas)
      // { path: 'encomendas', component: OrdersComponent }, // Rota para o carrinho de compras
      // { path: 'depoimentos', component: TestimonialsPageComponent }, // Rota para a página de todos os depoimentos
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configura as rotas filhas para este módulo
  exports: [RouterModule] // Exporta o RouterModule para que as diretivas de roteamento funcionem
})
export class HomeRoutingModule { }
