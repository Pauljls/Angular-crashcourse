import { Injectable, input, signal } from '@angular/core';
import { Product } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
//UN SERVICIO SRIVE PARA MANEJAR EL CONTORL DE UN ESTADO EN DIFERENTES PARTES
//DEL CODIGO 

//EN ESTE CCASO MANEJAREMOS EL ESTADO DE LA LSITA DE PRODUTOS DEL CARRITO
//DEFINIMOS CART COMO PROPEIDAD, DE ESTA AMENRA PODREMOS ACCEDER A ESTA ATRAVEZ
//DE LLAMAR AL SERVIIO Y SABER  MAS DE ESTA PROPEIDAD
  cart = signal<Product[]>([])
   
//ASIGNAMOS UN METODO PARA CONTROLAR LA CANTIDAD DE ELEMENTOS EN EL CARRITO
  addToCart(product : Product){
    this.cart.set([...this.cart(), product])
  }

  removeFromCart(id : number){
    this.cart.set(
      this.cart().filter((p)=> p.id !== id)
    );
  }
  constructor() { 
  }
}
