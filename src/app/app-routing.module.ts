import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListV3Component } from './products-v3/products-list-v3/products-list-v3.component';
import { CartV3Component } from './products-v3/cart-v3/cart-v3.component';

const routes: Routes = [
  //{ path: 'products', component: ProductsListV3Component }, path moved to the feature routing module
  { path: 'cart', component: CartV3Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }