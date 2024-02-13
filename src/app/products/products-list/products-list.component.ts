import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../../shared/interfaces/product.interface'
import { ProductsService } from '../../shared/services/products.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  products = ['Webcam', 'Microphone', 'Wireless keyboard'];
  selectedProduct = 'Webcam';
  selectedProductInterface: Product | undefined;
  productsByService: Product[] = []
  otherVariable = undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productsByService = this.productService.getProducts();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct}!`);
  }

  onBuyWithParam(name: string) {
    window.alert(`You just bought with param ${name}!`);
  }

  ngAfterViewInit(): void {
    // This hook is called when the HTML template of the component has been initialized
    // or the HTML templates of all child components have been initialized
    if (this.productDetail) {
      console.log(`ProductsListComponent ngAfterViewInit child ${this.productDetail.name}`);
    }
  }
  
}
