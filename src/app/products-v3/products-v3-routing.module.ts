import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListV3Component } from './products-list-v3/products-list-v3.component';
import { ProductDetailV3Component } from './product-detail-v3/product-detail-v3.component';

const routes: Routes = [
  { path: 'products', component: ProductsListV3Component },
  { path: 'products/:id', component: ProductDetailV3Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)], //forChild method is used when we want to register routes in a feature module.
  exports: [RouterModule]
})
export class ProductsV3RoutingModule { }