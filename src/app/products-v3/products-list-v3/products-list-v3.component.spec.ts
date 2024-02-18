import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListV3Component } from './products-list-v3.component';

describe('ProductsListV3Component', () => {
  let component: ProductsListV3Component;
  let fixture: ComponentFixture<ProductsListV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsListV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
