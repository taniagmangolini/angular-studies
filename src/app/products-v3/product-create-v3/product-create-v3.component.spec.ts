import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateV3Component } from './product-create-v3.component';

describe('ProductCreateV3Component', () => {
  let component: ProductCreateV3Component;
  let fixture: ComponentFixture<ProductCreateV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCreateV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCreateV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
