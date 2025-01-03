import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-sumary',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 p-6  shadow-xl border rounded-xl">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4"> 
        <div class="flex gap-4 mt-2">
          <span class="text-lg ">Total</span>
          <span class="text-lg font-bold">{{'$' + totalOrder()}}</span>
        </div>
        <app-primary-button label="Procced to chckout"/>
      </div>
    <div>
  `,
  styles: ''
})
export class OrderSumaryComponent {
  cartService = inject(CartService)
  
  totalOrder = computed(()=> this.cartService.cart().reduce((ac,value)=> ac + value.price ,0) )
}
