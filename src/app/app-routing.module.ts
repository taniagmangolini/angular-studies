import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartV3Component } from './products-v3/cart-v3/cart-v3.component';

const routes: Routes = [
  //{ path: 'products', component: ProductsListV3Component }, path moved to the feature routing module
  { path: 'cart', component: CartV3Component },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, //default route
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }