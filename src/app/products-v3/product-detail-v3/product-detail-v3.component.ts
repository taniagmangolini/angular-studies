import { 
  Component, EventEmitter, Input, Output, OnInit 
} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ActivatedRoute allows to retrieve information about the currently active route, including any parameters.
import { filter, Observable, switchMap, of } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';;
import { AuthService } from '../../shared/services/auth.service';
import { CartService } from '../../shared/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-product-detail-v3',
  templateUrl: './product-detail-v3.component.html',
  styleUrl: './product-detail-v3.component.css'
})
export class ProductDetailV3Component implements OnInit {
  @Input() id: number | undefined = -1;
  product$: Observable<Product> | undefined;
  price: number | undefined;

  constructor(
    private productService: ProductsService, 
    public authService: AuthService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    /* WITHOUT A RESOLVER */

    /*
    // The ActivatedRoute service contains the paramMap observable, which we can use to subscribe and get route parameter values (strings)
    // Use it if you intend to update the URL parameter within the same component, then you have to use a subscription.

    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.productService.getProductsByIdFromApi(Number(params.get('id'))); 
      })
    );
    // The ActivatedRoute and contains a queryParamMap observable that we can subscribe to in order to get query parameter values.
    // Query parameters are optional. For instance: /products?sortOrder=desc&pageSize=10
    // queryParamMap property is also available when working with snapshot routing.
      this.route.queryParamMap.subscribe(params => {
        console.log(params.get('sortOrder'));
      });
    */

    /*
    Another option to get the parameter. snapshot is sync, that is,  you get the value once and that is it
    It is an immutable object representing a particular version of ActivatedRoute
    If you intend not to update your URL parameter within the same component you are accessing it, then you can use the snapshot.
    It won’t be updated, even if you change its value from within the same component.
    */
    //const id = Number(this.route.snapshot.params['id']);
    //this.product$ = this.productService.getProductsByIdFromApi(id);

    /* WITH A RESOLVER */

    this.product$ = this.route.data.pipe(
      switchMap(data => of(data['product']))
    );
  }

  changePrice(product: Product, price?: Number) {
    /*The open method of the MatDialog service returns an afterClosed observable property that we can subscribe to, 
    which will enable us to be notified when the dialog closes. The observable emits any value that is sent back from the dialog. 
    Note that we check whether a value is returned from the dialog using the filter RxJS operator because the Cancel button does
    not return a value at all.
    */
    this.dialog.open(PriceComponent).afterClosed().pipe(
      filter(price => !!price),
      switchMap(price => this.productService.updateProduct(product, price))
    ).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  onAdd(product: Product) {
    window.alert(`Added ${product.name}!`);
  }

  buy(product: Product) {
    this.cartService.addProduct(product);
  }

}
