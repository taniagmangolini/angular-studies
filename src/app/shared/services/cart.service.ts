import { Injectable } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    this.cart.push(product);
  } 
}
