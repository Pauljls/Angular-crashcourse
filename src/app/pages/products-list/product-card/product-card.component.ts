import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  template: `
   <p>
   {{product().title}}
  </p>
  `,
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  //SE AGREGA LA CCONDICION DE REQUERIDO YA QUE SI NO NO HABRA INFORMACINO
  //PARA MOSTRAR
  product = input.required<Product>();
}
