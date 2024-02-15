import { Component } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface'
import { ProductsService } from '../../shared/services/products.service'

@Component({
  selector: 'app-product-list-v2',
  templateUrl: './product-list-v2.component.html',
  styleUrl: './product-list-v2.component.css'
})
export class ProductListV2Component {
  selectedProduct: Product | undefined;
  productsByService$: any = []

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productsByService$ = this.productService.getProductsFromApi();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct}!`);
  }

}
