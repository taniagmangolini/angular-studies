import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductsV2Module } from './products-v2/products-v2.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { KeyLoggerComponent } from './key-logger/key-logger.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyLoggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ProductsV2Module,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
