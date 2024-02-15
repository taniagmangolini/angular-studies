import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailV2Component } from './product-detail-v2.component';

describe('ProductDetailV2Component', () => {
  let component: ProductDetailV2Component;
  let fixture: ComponentFixture<ProductDetailV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
