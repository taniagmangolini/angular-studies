import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface'
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//DTO: Data Transfer Object
interface ProductDTO {
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }


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

  getProductsFromApi(): Observable<Product[]> {
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
      map(products => products.map(product => {
        return {
          name: product.title,
          price: product.price
        }
      }))
    );
  }
}
