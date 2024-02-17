import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateV2Component } from './product-create-v2.component';

describe('ProductCreateV2Component', () => {
  let component: ProductCreateV2Component;
  let fixture: ComponentFixture<ProductCreateV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCreateV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCreateV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
