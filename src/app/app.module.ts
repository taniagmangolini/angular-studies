import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthInterceptor } from './core/auth/auth.interceptor';;

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductsV2Module } from './products-v2/products-v2.module';
import { ProductsV3Module } from './products-v3/products-v3.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    KeyLoggerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule, 
    ProductsV3Module, // The order that we import routing modules does matter. Features routing module needs to be imported before the AppRoutingModule
    AppRoutingModule,
    ProductsModule,
    ProductsV2Module,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule, //Reactive forms are built around the FormGroup and FormControl classes and FormArray is an extension of these, designed to handle dynamic form controls.
    CommonModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true //  accept multiple service instances and providedIn property in the @Injectable decorator of the services not need to be set
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
