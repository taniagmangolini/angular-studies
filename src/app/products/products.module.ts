import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
