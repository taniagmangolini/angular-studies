/* Angular Router can also be used to:
- Control access to a route (guard. See te auth.guard.ts on the core module
- Prevent navigation away from a route
- Prefetch data to improve the UX
- Lazy-load routes to speed up the response time
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartV3Component } from './products-v3/cart-v3/cart-v3.component';
import { authGuard } from './core/auth/auth.guard';
import { checkoutGuard } from './products-v3/cart-v3/checkout.guard';

const routes: Routes = [
  { path: 'cart', 
    component: CartV3Component,
    canActivate: [authGuard], //guard to allow only authenticated users
    canDeactivate: [checkoutGuard]
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, //default route
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }