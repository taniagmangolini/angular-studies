import { Component } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface'

import { ProductsService } from '../../shared/services/products.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  products: Product[] = [];

  // ProductsService can be provided through two injectors: the application root injector and ProductListComponent.
  // First it will ask the injector of its parent component (providers: [ProductsService])
  // ProductListComponent class indeed provides ProductsService, so it creates a new instance of the service and returns it to FavoritesComponent
  // Otherwise it will ask it for the root.
  // @Host and @Optional decorators define at what level the injector searches for dependencies.
  // Ex constructor(@Optional private productService: ProductsService) { }
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
