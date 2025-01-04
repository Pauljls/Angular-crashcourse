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

  async ngOnInit(){//USAMOS ESTE HOOK PARA INDICAR QUE ALGO SE EJCUTE DURANTE LA CREACION DEL COMPONENTE
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json();
    this.products.set(data)
  }
  products = signal<Product[]>([]);
}
