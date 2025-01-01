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
      <app-primary-button 
      routerLink="/cart"
      [label]="'Cart('+cartService.cart().length+')'" />

    </div>
  `,
  styles: ''
})
export class HeaderComponent {
  //AQUI PUEDES ASIGNAR UN VALOR QUE IRA A LA PROPIEDAD DEL COMPONENTE PIRMARY BUTTON
  //cart = input('Prueba')
  cartService = inject(CartService)


}
