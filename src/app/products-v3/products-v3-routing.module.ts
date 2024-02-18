import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListV3Component } from './products-list-v3/products-list-v3.component';
import { ProductDetailV3Component } from './product-detail-v3/product-detail-v3.component';
import { productDetailV3Resolver } from './product-detail-v3/product-detail-v3.resolver';

const routes: Routes = [
  { 
    path: 'products', 
    component: ProductsListV3Component,
    children: [
      { 
        path: ':id', 
        component: ProductDetailV3Component,
        resolve: {
          product: productDetailV3Resolver
        }
      } // as a children, the /products/:id route is not destroyed when we navigate from one product to another and its ngOnInit method is called once.
      // If there are children, Angular will use the parent's <router-outlet></router-outlet> to place the children component DOM. 
    ]
  },
  //{ path: 'products/:id', component: ProductDetailV3Component }, // use it if you wants to recriate the component among navigation and to open it independently. 
];
@NgModule({
  imports: [RouterModule.forChild(routes)], //forChild method is used when we want to register routes in a feature module.
  exports: [RouterModule]
})
export class ProductsV3RoutingModule { }