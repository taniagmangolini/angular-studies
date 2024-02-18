import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailV3Component } from './product-detail-v3.component';

describe('ProductDetailV3Component', () => {
  let component: ProductDetailV3Component;
  let fixture: ComponentFixture<ProductDetailV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
