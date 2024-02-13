import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductHostDirective } from './product-host.directive';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective
  ],
  imports: [
    FilterPipe,
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProductsListComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
