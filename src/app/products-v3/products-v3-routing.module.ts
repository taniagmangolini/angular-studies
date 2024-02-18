import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListV3Component } from './products-list-v3/products-list-v3.component';
import { CartV3Component } from './cart-v3/cart-v3.component';

const routes: Routes = [
  { path: 'products', component: ProductsListV3Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)], //forChild method is used when we want to register routes in a feature module.
  exports: [RouterModule]
})
export class ProductsV3RoutingModule { }