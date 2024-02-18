import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartV3Component } from './cart-v3.component';

describe('CartV3Component', () => {
  let component: CartV3Component;
  let fixture: ComponentFixture<CartV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
