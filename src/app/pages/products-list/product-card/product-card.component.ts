import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col relative">
    <div class="mx-auto">
      <img [src]="product().image" class="w-[200px] h-[100px] object-contain">  
    </div>
    <div class="flex flex-col mt-2">
      <span class="text-md font-bold">{{product().title}}</span>
      <span class="text-sm">{{"$" + product().price}}</span>
      <app-primary-button label="Add to Cart" class="mt-3" (btnClicked)="cartService.addToCart(product())"/>
    </div>
    <span class="absolute top-2 right-3 text-sm font-bold" 
    [class]="product().stock? 'text-green-500' : 'text-red-500'">
      @if(product().stock){
        {{product().stock}} left
      }@else{
        Out of stock
      }
    </span>
  </div>
  `,
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  //SE AGREGA LA CCONDICION DE REQUERIDO YA QUE SI NO NO HABRA INFORMACINO
  //PARA MOSTRAR
  cartService = inject(CartService)
  product = input.required<Product>();
}
