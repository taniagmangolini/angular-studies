import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListV2Component } from './product-list-v2/product-list-v2.component';
import { ProductDetailV2Component } from './product-detail-v2/product-detail-v2.component';
import { ProductCreateV2Component } from './product-create-v2/product-create-v2.component';

@NgModule({
  declarations: [
    ProductListV2Component,
    ProductDetailV2Component,
    ProductCreateV2Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListV2Component,
    ProductDetailV2Component
  ]
})
export class ProductsV2Module { }
