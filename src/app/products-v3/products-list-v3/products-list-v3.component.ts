import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface'
import { ProductsService } from '../../shared/services/products.service'

@Component({
  selector: 'app-products-list-v3',
  templateUrl: './products-list-v3.component.html',
  styleUrl: './products-list-v3.component.css'
})
export class ProductsListV3Component {
  selectedProduct: Product | undefined;
  productsByService$: Observable<Product[]> | undefined;
  products: Product[] = [];
  subscriptions: Subscription[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.subscriptions.push(this.productService.getProductsFromApi().subscribe(products => {
      this.products = products;
    }));
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product) {
    this.products.push(product)
    window.alert(`Added ${product.name}!`);
  }

  onDelete() {
    this.products = this.products.filter(product => product !== this.selectedProduct);
    this.selectedProduct = undefined;
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
