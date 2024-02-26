// This module v3 adds routing capabilities (navigation) to the app

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductsListV3Component } from './products-list-v3/products-list-v3.component';
import { CartV3Component } from './cart-v3/cart-v3.component';
import { ProductsV3RoutingModule } from './products-v3-routing.module';
import { ProductDetailV3Component } from './product-detail-v3/product-detail-v3.component';
import { ProductCreateV3Component } from './product-create-v3/product-create-v3.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    ProductsListV3Component,
    CartV3Component,
    ProductDetailV3Component,
    ProductCreateV3Component,
    PriceComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    ProductsV3RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule
  ],
  exports: [
    ProductsListV3Component,
    CartV3Component,
    ProductDetailV3Component
  ]
})
export class ProductsV3Module { }
