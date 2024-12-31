import { Component, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">My store</span>
      <!--PODERMOS USAR CONTENIDO DINAMICO USANDO [] EN HTML-->
      <app-primary-button [label]="'Cart('+cartService.cart().length+')'" />

    </div>
  `,
  styles: ''
})
export class HeaderComponent {
  //AQUI PUEDES ASIGNAR UN VALOR QUE IRA A LA PROPIEDAD DEL COMPONENTE PIRMARY BUTTON
  //cart = input('Prueba')
  cartService = inject(CartService)


}
