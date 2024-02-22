import { 
  Component, EventEmitter, Input, Output, OnInit 
} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ActivatedRoute allows to retrieve information about the currently active route, including any parameters.
import { Observable, switchMap, of } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';;
import { AuthService } from '../../shared/services/auth.service';


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
    private route: ActivatedRoute
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
    console.log(' ENTROU', this.price)
  }

  onAdd(product: Product) {
    window.alert(`Added ${product.name}!`);
  }

}
