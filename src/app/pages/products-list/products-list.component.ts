import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from './product-card/product-card.component';
@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for( product of products(); track product.id){
        <div>
          <app-product-card [product]="product"/>
        </div>
      }
    </div>
  `,
  styles: ''
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id : 0,
      title: "asd", 
      image: "asd",
      price: 15,
      stock: 15
    },
    {
      id : 1,
      title: "asd", 
      image: "asd",
      price: 15,
      stock: 15
    },
    {
      id : 2,
      title: "asd", 
      image: "asd",
      price: 15,
      stock: 15
    },
    {
      id : 3,
      title: "asd", 
      image: "asd",
      price: 15,
      stock: 15
    }
  ]);
}
