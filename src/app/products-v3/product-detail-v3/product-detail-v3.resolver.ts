import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';

/*
A resolver is a function of the ResolveFn<T> type, where T is the resolved data type. 
It can return resolved data either synchronously or asynchronously.
*/
export const productDetailV3Resolver: ResolveFn<Product> = (route: ActivatedRouteSnapshot) => {
    const productService = inject(ProductsService);
    const id = Number(route.paramMap.get('id'));
    return productService.getProductsByIdFromApi(id);
};
