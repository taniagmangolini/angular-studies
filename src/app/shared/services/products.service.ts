import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: 'Webcam',
      },
      {
        name:  'Microphone',
      },
      {
        name: 'Wireless keyboard',
      }
    ];
  }
}
