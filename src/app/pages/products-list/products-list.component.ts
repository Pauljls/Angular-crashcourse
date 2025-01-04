import { Component, signal, OnInit } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
    @if (!loading() && products().length !== 0) {
      @for(product of products(); track product.id) {
        <div>
          <app-product-card [product]="product"/>
        </div>
      }
    } @else {
      <div class="flex flex-col items-center justify-center">
        @if (loading()) {
          <h1 class="text-2xl"><span class="loading loading-spinner text-accent"></span> Cargando productos...</h1>
        } @else {
          <h1 class="text-2xl">Aun no hay items</h1>
        }
      </div>
    }
    </div>
  `,
  styles: ''
})
export class ProductsListComponent implements OnInit {
  products = signal<Product[]>([]);
  loading = signal<boolean>(true);

  ngOnInit() {
    this.fetchProducts();
  }

  private async fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products/category/electronics');
      const data = await res.json();
      this.products.set(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      this.loading.set(false);
    }
  }
}