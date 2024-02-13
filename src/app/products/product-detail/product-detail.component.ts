import { 
  Component, ChangeDetectionStrategy, EventEmitter, Input, OnInit, 
  OnDestroy, OnChanges, Output, SimpleChanges, ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.Emulated, //Do not let style defined here to leak outside the component
  changeDetection: ChangeDetectionStrategy.OnPush //Will trigger the change detection mechanism only when the reference of the name input property changes
})
export class ProductDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() name = '';
  @Output() bought = new EventEmitter();
  @Output() boughtWithParam = new EventEmitter<string>();

  constructor() {
    // name will be an empty string
    console.log(`Name is ${this.name} in the constructor`);
  }

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

  buy() {
    this.bought.emit();
    this.boughtWithParam.emit(this.name);
  }

  ngOnInit(): void {
    // name will have the value set as default on the productsListComponent (Webcam)
    console.log(`Name is ${this.name} in the ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name']; 
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue; 
      const newValue = product.currentValue; 
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  ngOnDestroy(): void {}
}
