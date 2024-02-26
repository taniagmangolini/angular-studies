
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';
import { priceRangeValidator } from '../price-range.directive';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-create-v3',
  templateUrl: './product-create-v3.component.html',
  styleUrl: './product-create-v3.component.css'
})
export class ProductCreateV3Component implements OnInit {

  @Output() added = new EventEmitter<Product>();

  products: Product[] = [];

  products$: Observable<Product[]> | undefined;

  showPriceRangeHint = false;
  
  isChecked = false;

  categories = ['Hardware', 'Computers', 'Clothing', 'Software'];

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

  ngOnInit(): void {
    /*
    The FormGroup class contains two methods that we can use to change the values of a form programmatically:
    - setValue: Replaces values in all the controls of the form
    - patchValue: Updates values in specific controls of the form
    */
   /*
    // all controls
    this.productForm.setValue({
      name: 'New product',
      price: 150
    });
    */

    // specific controls
    this.productForm.patchValue({
      price: 150
    });

    /*
    A FormControl instance contains two observable properties: statusChanges and valueChanges. 
    The first one notifies us when the status of the control changes, such as going from invalid to valid. 
    On the other hand, the second one notifies us when the value of the control changes.
    The valueChanges and statusChanges properties in a FormControl instance are standard observable streams. 
    Do not forget to unsubscribe from them when the component is destroyed.
    */
    this.price.valueChanges.subscribe(price => {
      if (price) {
        this.showPriceRangeHint = price > 1 && price < 10000; 
      }
    });

    this.productsService.getProductsFromApi().subscribe(products => {
      this.products = products;
    });

    this.products$ = this.name.valueChanges.pipe(
      map(name => this.products.filter(product => product.name.startsWith(name)))
    );
  }

  createProduct() {
    this.productsService.addProduct(this.name.value, Number(this.price.value)).subscribe(product => {
    //this.productsService.addProduct(this.name.value, Number(this.price.value)).subscribe(product => {
      //this.productForm.reset();
      this.added.emit(product);
    });
  }

}
