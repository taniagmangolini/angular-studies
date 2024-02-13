import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component'

//ViewContainerRef: view container that will host the dynamically created component

@Directive({
  selector: '[appProductHost]'
})
export class ProductHostDirective implements OnInit {
  constructor(private vc: ViewContainerRef) { }
  ngOnInit(): void {
    const productRef = this.vc.createComponent(ProductDetailComponent);
    productRef.setInput('name', 'Optical mouse');
  }
}