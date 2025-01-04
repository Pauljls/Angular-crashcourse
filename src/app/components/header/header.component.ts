import { Component, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <button class="text-xl" routerLink="/">My store</button>
      <!--PODERMOS USAR CONTENIDO DINAMICO USANDO [] EN HTML-->
      <div class="indicator">
      <span class="indicator-item badge badge-secondary bg-slate-400 border border-slate-400">{{cartService.cart().length}}</span> 
      <app-primary-button
      routerLink="/cart"
      label="Cart" >
      <svg class="text-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </app-primary-button>
      </div>

    </div>
  `,
  styles: ''
})
export class HeaderComponent {
  //AQUI PUEDES ASIGNAR UN VALOR QUE IRA A LA PROPIEDAD DEL COMPONENTE PIRMARY BUTTON
  //cart = input('Prueba')
  cartService = inject(CartService)


}
