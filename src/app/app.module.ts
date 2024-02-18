import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';;

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductsV2Module } from './products-v2/products-v2.module';
import { ProductsV3Module } from './products-v3/products-v3.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    KeyLoggerComponent,
  ],
  imports: [
    BrowserModule,
    ProductsV3Module, // The order that we import routing modules does matter. Features routing module needs to be imported before the AppRoutingModule
    AppRoutingModule,
    ProductsModule,
    ProductsV2Module,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true //  accept multiple service instances and providedIn property in the @Injectable decorator of the services not need to be set
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
