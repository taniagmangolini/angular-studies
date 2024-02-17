import { 
  Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';;

@Component({
  selector: 'app-product-detail-v2',
  templateUrl: './product-detail-v2.component.html',
  styleUrl: './product-detail-v2.component.css'
})
export class ProductDetailV2Component implements OnChanges{
  @Input() id: number | undefined = -1;
  product$: Observable<Product> | undefined;
  @Output() bought = new EventEmitter();
  @Output() boughtWithParam = new EventEmitter<number>();
  @Output() deleted = new EventEmitter();

  constructor(private productService: ProductsService) { }

  ngOnChanges(): void {
    this.product$ = this.productService.getProductsByIdFromApi(this.id);
  }

  buy() {
    this.bought.emit();
    this.boughtWithParam.emit(this.id);
  }

  changePrice(product: Product, newPrice: number) {
    this.productService.updateProduct(product, newPrice).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.deleted.emit();
    });
  }
}
