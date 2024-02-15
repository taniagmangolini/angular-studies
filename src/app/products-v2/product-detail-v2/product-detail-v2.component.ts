import { 
  Component, ChangeDetectionStrategy, EventEmitter, Input, OnInit, 
  OnDestroy, OnChanges, Output, SimpleChanges, ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-product-detail-v2',
  templateUrl: './product-detail-v2.component.html',
  styleUrl: './product-detail-v2.component.css'
})
export class ProductDetailV2Component {
  @Input() name = '';
  @Output() bought = new EventEmitter();
  @Output() boughtWithParam = new EventEmitter<string>();

  constructor() {
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
}
