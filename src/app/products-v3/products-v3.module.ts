// This module v3 adds routing capabilities (navigation) to the app

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListV3Component } from './products-list-v3/products-list-v3.component';
import { CartV3Component } from './cart-v3/cart-v3.component';
import { ProductsV3RoutingModule } from './products-v3-routing.module';

@NgModule({
  declarations: [
    ProductsListV3Component,
    CartV3Component
  ],
  imports: [
    CommonModule,
    ProductsV3RoutingModule
  ],
  exports: [
    ProductsListV3Component,
    CartV3Component
  ]
})
export class ProductsV3Module { }
