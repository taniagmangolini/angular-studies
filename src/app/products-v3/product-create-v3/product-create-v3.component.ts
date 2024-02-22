
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';
import { priceRangeValidator } from '../price-range.directive';

@Component({
  selector: 'app-product-create-v3',
  templateUrl: './product-create-v3.component.html',
  styleUrl: './product-create-v3.component.css'
})
export class ProductCreateV3Component {

  @Output() added = new EventEmitter<Product>();

  // Without FormBuilder
  /*
  productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true
    }),
    info: new FormGroup({
      category: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl('')
    })
  });
  */

  // WITH FORM BUILDER: we don’t have to deal with the FormGroup and FormControl data types explicitly
  productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, priceRangeValidator()]
    })
  });

  constructor(private productsService: ProductsService, private builder: FormBuilder) {}
  
  get name() { return this.productForm.controls.name }
    
  get price() { return this.productForm.controls.price }

  private buildForm() {
    this.productForm = this.builder.nonNullable.group({
      name: this.builder.nonNullable.control(''),
      price: this.builder.nonNullable.control<number | undefined>(undefined, {})
    });
  }

  createProduct() {
    this.productsService.addProduct(this.name.value, Number(this.price.value)).subscribe(product => {
    //this.productsService.addProduct(this.name.value, Number(this.price.value)).subscribe(product => {
      //this.productForm.reset();
      this.added.emit(product);
    });
  }
}
