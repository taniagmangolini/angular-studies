import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface'
import { ProductsService } from '../../shared/services/products.service'

@Component({
  selector: 'app-products-list-v3',
  templateUrl: './products-list-v3.component.html',
  styleUrl: './products-list-v3.component.css'
})
export class ProductsListV3Component {
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  selectedProduct: Product | undefined;
  productsByService$: Observable<Product[]> | undefined;
  products: Product[] = [];
  datasource = new MatTableDataSource<Product>()
  subscriptions: Subscription[] = [];
  columnNames = ['name', 'price'];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.subscriptions.push(this.productService.getProductsFromApi().subscribe(products => {
      this.products = products;

      //datasource for the mat-table 
      new MatTableDataSource(products);
      this.datasource = new MatTableDataSource<Product>(products);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    }));
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product) {
    this.products.push(product)
    window.alert(`Added ${product.name}!`);
  }

  onDelete() {
    this.products = this.products.filter(product => product !== this.selectedProduct);
    this.selectedProduct = undefined;
  }
  
  reorder(event: CdkDragDrop<Product[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
