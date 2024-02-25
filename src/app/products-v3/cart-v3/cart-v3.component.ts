import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../../shared/services/cart.service';


@Component({
  selector: 'app-cart-v3',
  templateUrl: './cart-v3.component.html',
  styleUrl: './cart-v3.component.css'
})
export class CartV3Component implements OnInit {
  /* FormArray becomes essential when dealing with forms that have a variable number of form controls. For instance, 
  a form for a shopping cart, where the user can add or remove items dynamically. 
  Each item in the cart can have multiple properties like name, quantity, and price.
  Another more common example of a dynamic form would be an in-place editable table, 
  where the user can add or remove lines containing multiple editable form controls.
  We wouldn't be able to define a form model using FormGroup, without knowing the exact number of rows. 
  But we can define a form model for this in-place editable table using a FormArray instead.
  The FormArray API contains: 
  - controls: array of form controls
  - length: length of the array
  - at(index): Returns the form control at a given array position
  - push(control): Adds a new control to the end of the array
  - removeAt(index): Removes a control at a given position of the array
  - getRawValue(): Gets the values of all form controls, via the control.value property of each control
  */
  cartForm = new FormGroup({
    products: new FormArray<FormControl<number>>([])
  });

  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cart.forEach(() => {
      this.cartForm.controls.products.push(
        new FormControl(3, { nonNullable: true })
      );
    });
  }

}
