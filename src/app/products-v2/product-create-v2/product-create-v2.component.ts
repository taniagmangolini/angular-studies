import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-create-v2',
  templateUrl: './product-create-v2.component.html',
  styleUrl: './product-create-v2.component.css'
})
export class ProductCreateV2Component {

  @Output() added = new EventEmitter<Product>();

  constructor(private productsService: ProductsService) {}

  createProduct(name: string, price: number) {
    this.productsService.addProduct(name, price).subscribe(product => {
      this.added.emit(product);
    });
  }

}
