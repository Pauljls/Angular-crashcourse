import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSumaryComponent } from "./order-sumary/order-sumary.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, OrderSumaryComponent],
  template: `
    <div class="p-6 flex flex-col gap-4 ">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (item of CartService.cart(); track $index) {
        <app-cart-item [item]="item" (removeEvent)="CartService.removeFromCart($index)"/>
      }
      <app-order-sumary/>
    </div>
    
  `,
  styles: ''
})
export class CartComponent {
  CartService = inject(CartService)
}
