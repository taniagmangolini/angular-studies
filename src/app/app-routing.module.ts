/* Angular Router can also be used to:
- Control access to a route (guard. See te auth.guard.ts on the core module
- Prevent navigation away from a route
- Prefetch data to improve the UX
- Lazy-load routes to speed up the response time

An Angular service is registered with the root injector of the application using the providedIn property of the @Injectable decorator.
Lazy-loaded modules create a separate injector that is an immediate child of the root application injector. 
If you use an Angular service registered with the root application injector in a lazy-loaded module, 
you will end up with a separate service instance in both cases. So, we must be cautious as to how we use services in lazy-loaded modules.
To use a guard with a lazy loaded module, the guard should implement the interface CanLoad. See the auth guard.
Also, the Angular router can lazy load not only Angular modules but also standalone components (@Component with standalone: true). Ex AboutInfoComponent
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
  {
    path: 'about',
    canLoad: [authGuard], //guard for lazy loaded module
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule), //loadChildren is used to lazy load Angular modules
    //loadComponent: () => import('./about/about-info/about-info.component').then(c => c.AboutInfoComponent) ///loadComponent is used to lazy load Angular Components
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }