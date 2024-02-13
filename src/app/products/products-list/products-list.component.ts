import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements AfterViewInit {
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  selectedProduct = 'Webcam';

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
