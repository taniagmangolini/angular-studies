import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface'

//DTO: Data Transfer Object
interface ProductDTO {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }


  private convertToProduct(product: ProductDTO): Product {
    return {
      id: product.id,
      name: product.title,
      price: product.price
    };
  }

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
        return this.convertToProduct(product)
      }))
    );
  }

  getProductsByIdFromApi(id: any): Observable<Product> {
    return this.http.get<ProductDTO>(`${this.productsUrl}/${id}`).pipe(
      map(product => this.convertToProduct(product))
    )
  }

  addProduct(name: string, price: number): Observable<Product> {
    return this.http.post<ProductDTO>(this.productsUrl, {
      title: name,
      price: price
    }).pipe(
      map(product => this.convertToProduct(product))
    );
  }

  updateProduct(product: Product, price: number): Observable<void> {
    //patch method should be used when we want to update only a subset of an object
    return this.http.patch<void>(`${this.productsUrl}/${product.id}`, { price });
  }

  deleteProduct(product: Product): Observable<void> {
    return this.http.delete<void>(`${this.productsUrl}/${product.id}`);
  }
}
