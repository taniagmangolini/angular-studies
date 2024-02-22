// This module v3 adds routing capabilities (navigation) to the app

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListV3Component } from './products-list-v3/products-list-v3.component';
import { CartV3Component } from './cart-v3/cart-v3.component';
import { ProductsV3RoutingModule } from './products-v3-routing.module';
import { ProductDetailV3Component } from './product-detail-v3/product-detail-v3.component';
import { ProductCreateV3Component } from './product-create-v3/product-create-v3.component';

@NgModule({
  declarations: [
    ProductsListV3Component,
    CartV3Component,
    ProductDetailV3Component,
    ProductCreateV3Component
  ],
  imports: [
    CommonModule,
    ProductsV3RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductsListV3Component,
    CartV3Component,
    ProductDetailV3Component
  ]
})
export class ProductsV3Module { }
