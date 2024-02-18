import { 
  Component, EventEmitter, Input, Output, OnInit 
} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ActivatedRoute allows to retrieve information about the currently active route, including any parameters.
import { Observable, switchMap } from 'rxjs';
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

  constructor(
    private productService: ProductsService, 
    public authService: AuthService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // The ActivatedRoute service contains the paramMap observable, which we can use to subscribe and get route parameter values (strings)
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.productService.getProductsByIdFromApi(Number(params.get('id'))); 
      })
    );
  }
}
